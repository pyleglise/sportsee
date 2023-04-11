import '../../utils/style/_performance.scss'
import PropTypes from 'prop-types'
import Loader from '../../components/loader'

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'

/**
 * Component that displays a chart showing performances of the user.
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @see {@link https://recharts.org/en-US/api/RadarChart} for further information on `RadarChart` element from recharts api
 * @example
 * const userSessions = {isLoading: false, data[{kind:'Vitesse', value: 220},...]}
 * return (
 *  <Perfomance perfData={userPerf} />
 * )
 * @prop {Object}     perfData                   The props passed to the component.
 * @prop {boolean}    perfData.isLoading         False if all the data have been fetched
 * @prop {object[]}   perfData.data              An array of objects containing data for the chart. `{kind: string, value: number}`
 * @prop {string}     perfData.data[].kind       Category of the performance
 * @prop {number}     perfData.data[].value      Value of the performance
 * @returns {JSX.Element}                        A JSX element containing a `RadarChart` element from the `recharts` library.
 */
const Perfomance = ({ perfData }) => {
  /**
   * Displays the performances legends around the radarchart.
   *
   * @component
   * @prop {number} cx     Position on X axe
   * @prop {number} cy     Position on Y axe
   * @returns {JSX.Element} A JSX element representing the custom legend.
   */
  const LegendPerf = ({ payload, x, y, cx, cy, ...rest }) => {
    return (
      <text {...rest} y={y + (y - cy) / 8} x={x + (x - cx) / 82}>
        {payload.value}
      </text>
    )
  }
  const { isLoading } = perfData

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="perf-container">
          <ResponsiveContainer>
            <RadarChart
              // data={formatData().reverse()}
              data={perfData.data}
              // cx="50%"
              // cy="50%"
              // outerRadius="70%"
              // innerRadius="70%"
              margin={{ right: 30, left: 30 }}
            >
              <PolarGrid radialLines={false} />
              <PolarAngleAxis
                dataKey="kind"
                stroke="#fffefc"
                tick={<LegendPerf />}
                tickLine={false}
                dy={0}
              />
              <Radar dataKey="value" fill="red" fillOpacity={0.7} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  )
}
Perfomance.propTypes = {
  /**
   * Performances data of the user
   */
  perfData: PropTypes.object.isRequired,
}

Perfomance.defaultProps = {
  perfData: {
    isLoading: false,
    data: [
      {
        kind: 'Intensité',
        value: 110,
      },
      {
        kind: 'Vitesse',
        value: 220,
      },
    ],
  },
}

export default Perfomance
Perfomance.propTypes = {
  perfData: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        kind: PropTypes.string,
        value: PropTypes.number,
      })
    ).isRequired,
  }).isRequired,
}
