import '../../utils/style/_activity.scss'
import Loader from '../loader'
import PropTypes from 'prop-types'

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

/**
 * Component that displays a chart showing daily activity.
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @see {@link https://recharts.org/en-US/api/BarChart} for further information on `BarChart` element from recharts api
 * @example
 * const dataActivity = {isLoading: false, data[{day:1, kilogram: 80, calories:240},...]}
 * return (
 *  <Activity dataActivity={userActivity} />
 * )
 * @prop {Object}     dataActivity                   The props passed to the component.
 * @prop {boolean}    dataActivity.isLoading         False if all the data have been fetched
 * @prop {object[]}   dataActivity.data              An array of objects containing data for the chart. `{day: number, kilogram: number, calories:number}`
 * @prop {number}     dataActivity.data[].day        Day's number of the activity
 * @prop {number}     dataActivity.data[].kilogram   Kilogram of the activity
 * @prop {number}     dataActivity.data[].calories   Calories  of the activity
 * @returns {JSX.Element}                            A JSX element containing a `BarChart` element from the `recharts` library.
 */
const Activity = ({ dataActivity }) => {
  /**
   * Displays a custom legend for a chart.
   *
   * @component
   * @author  Pierre-Yves Léglise <pleglise@pm.me>
   * @example
   * return{
   *  <LegendCustom />
   * }
   * @returns {JSX.Element} A JSX element representing the custom legend.
   */
  const LegendCustom = () => {
    return (
      <div className="legendCustom">
        <h3>Activité quotidienne</h3>
        <div className="bar-legend">
          <p>Poids (kg)</p>
          <p>Calories brulées (kCal)</p>
        </div>
      </div>
    )
  }
  /**
   * Displays a custom tooltip for a chart.
   *
   * @component
   * @author  Pierre-Yves Léglise <pleglise@pm.me>
   * @example
   * return{
   *  <SpecialTooltip />
   * }
   * @prop {boolean} active         Whether or not the tooltip is active.
   * @prop {Array} payload          An array of objects containing data for the chart.
   * @returns {null|JSX.Element}  A JSX element representing the custom tooltip. If the `active` property is `true` and the `payload` array exists and is not empty, the element is a list element containing the text returned by the `TooltipText` function.
   */
  const SpecialTooltip = ({ payload, active }) => {
    if (active) {
      return (
        <div className="tooltipSpecial">
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}kCal`}</p>
        </div>
      )
    }
    return null
  }
  const { isLoading } = dataActivity

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="activity-container">
          <ResponsiveContainer
            title="Activité quotidienne"
            width="100%"
            height="100%"
          >
            <BarChart
              data={dataActivity.data}
              margin={{
                top: 23,
                right: 30,
                left: 30,
                bottom: 23,
              }}
            >
              <CartesianGrid strokeDasharray="3" vertical={false} />
              <XAxis
                dataKey="day"
                tickCount="10"
                tickLine={false}
                tick={{ fontSize: 14 }}
              />
              <YAxis
                dataKey="kilogram"
                yAxisId="kilogram"
                axisLine={false}
                domain={['dataMin-1', 'dataMax+2']}
                tickCount="3"
                tickLine={false}
                tick={{ fontSize: 14 }}
                orientation="right"
              />
              <YAxis
                dataKey="calories"
                yAxisId="calories"
                type="number"
                hide={true}
              />
              <Legend
                layout="horizontal"
                content={<LegendCustom />}
                verticalAlign="top"
              />
              <Tooltip
                labelFormatter={() => ''}
                cursor={{ fill: '#DFDFDF', opacity: '0.6' }}
                content={<SpecialTooltip />}
                wrapperStyle={{ outline: 'none' }}
              />
              <Bar
                dataKey="kilogram"
                yAxisId="kilogram"
                fill="black"
                radius={[10, 10, 0, 0]}
                barSize={10}
              />
              <Bar
                dataKey="calories"
                yAxisId="calories"
                fill="red"
                radius={[10, 10, 0, 0]}
                barSize={10}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  )
}
export default Activity

Activity.propTypes = {
  dataActivity: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number,
        kilogram: PropTypes.number,
        calories: PropTypes.number,
      })
    ).isRequired,
  }).isRequired,
}
