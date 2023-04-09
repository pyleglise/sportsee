import '../../utils/style/_averageSession.scss'
import Loader from '../../components/loader'
import PropTypes from 'prop-types'
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

/**
 * Component that displays a chart showing the average sessions.
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @see {@link https://recharts.org/en-US/api/LineChart} for further information on `LineChart` element from recharts api
 * @example
 * const userSessions = {isLoading: false, data[{day:1, sessionLength: 30},...]}
 * return (
 *  <AverageSession sessionData={userSessions} />
 * )
 * @prop {Object}     sessionData                   The props passed to the component.
 * @prop {boolean}    sessionData.isLoading         False if all the data have been fetched
 * @prop {object[]}   sessionData.data              An array of objects containing data for the chart. `{day: string, sessionLength: number}`
 * @prop {string}     sessionData.data[].day        Day of the week of the activity
 * @prop {number}     sessionData.data[].sessionLength   Length of the activity
 * @returns {JSX.Element}                            A JSX element containing a `LineChart` element from the `recharts` library.
 */
const AverageSession = ({ sessionData }) => {
  const { isLoading } = sessionData
  /**
   * Displays a custom tooltip for a chart.
   *
   * @component
   * @author  Pierre-Yves Léglise <pleglise@pm.me>
   * @example
   * return{
   *  <TooltipSession />
   * }
   * @prop {boolean} active         Whether or not the tooltip is active.
   * @prop {Array} payload          An array of objects containing data for the chart.
   * @returns {null|JSX.Element}  A JSX element representing the custom tooltip. If the `active` property is `true` and the `payload` array exists and is not empty, the element is a list element containing the text returned by the `TooltipText` function.
   */
  const TooltipSession = ({ payload, active }) => {
    if (active) {
      return (
        <div className="special-tooltip--sessions">
          <p>{`${payload[0].value} min`}</p>
        </div>
      )
    }
    return null
  }
  /**
   * Displays a custom legend for a chart.
   *
   * @component
   * @returns {JSX.Element} A JSX element representing the custom legend.
   */
  const LegendSession = () => {
    return (
      <div className="special-legend--sessions">
        <p>Durée moyenne des sessions</p>
      </div>
    )
  }

  return isLoading ? (
    <Loader />
  ) : (
    <div className="sessions-container">
      <div className="bg-we"></div>
      <div className="week-end">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width="100%"
            height="100%"
            // data={formatData()}
            data={sessionData.data}
            margin={{ top: 10, right: 15, left: 15, bottom: 10 }}
          >
            <XAxis
              dataKey="day"
              stroke="#fffefc"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, opacity: 0.6 }}
            />
            <YAxis hide={true} padding={{ top: 80, bottom: 40 }} />
            <Tooltip
              content={<TooltipSession />}
              cursor={{
                strokeOpacity: 0,
              }}
              wrapperStyle={{ outline: 'none' }}
            />
            <Legend verticalAlign="top" content={<LegendSession />} />
            <Line
              dataKey="sessionLength"
              type="natural"
              stroke="#FFF"
              strokeWidth={1.5}
              dot={false}
              activeDot={{
                stroke: '#FFF',
                strokeOpacity: 0.4,
                strokeWidth: 10,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
export default AverageSession

AverageSession.propTypes = {
  sessionData: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string,
        sessionLength: PropTypes.number,
      })
    ).isRequired,
  }).isRequired,
}
