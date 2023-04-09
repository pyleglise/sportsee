import '../../utils/style/_goal.scss'
import PropTypes from 'prop-types'
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
  Legend,
} from 'recharts'
import Loader from '../loader'

/**
 * Component that isplays a chart showing the goal.
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @see {@link https://recharts.org/en-US/api/RadialBarChart} for further information on `RadialBarChart` element from recharts api
 * @example
 * const score = 30
 * const userInfo={isLoading: false}
 * return (
 *  <Goal score={score} isLoading={userInfo.isLoading} />
 * )
 * @prop {boolean}    isLoading         False if all the data have been fetched
 * @prop {number}     score             Score of the goal to display
 * @returns {JSX.Element}               A JSX element containing a `RadialBarChart` element from the `recharts` library.
 */
const Goal = ({ score, isloading }) => {
  const formatData = [{ score }]

  /**
   * Displays a custom legend for a chart.
   *
   * @component
   * @author  Pierre-Yves Léglise <pleglise@pm.me>
   * @example
   * return{
   *  <LegendGoal />
   * }
   * @returns {JSX.Element} A JSX element representing the custom legend.
   */
  const LegendGoal = () => {
    const userScore = formatData[0].score
    return (
      <div className="score-container">
        <span className="score">{userScore ? userScore * 100 : 0}%</span>
        <div>
          <p className="description">de votre objectif</p>
        </div>
      </div>
    )
  }

  return isloading ? (
    <Loader />
  ) : (
    <div className="goal-container">
      <h3>Score</h3>
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="90%"
          barSize={15}
          data={formatData}
          startAngle={90}
          endAngle={360 + 90}
        >
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
          <RadialBar
            minAngle={15}
            dataKey="scoreGoal"
            fill="red"
            cornerRadius={20}
          />
          <Legend
            width={180}
            height={180}
            layout="vertical"
            verticalAlign="middle"
            align="center"
            content={<LegendGoal />}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Goal
Goal.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
}
