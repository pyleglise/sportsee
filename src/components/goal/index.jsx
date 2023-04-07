import '../../utils/style/_goal.scss'
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
  Legend,
} from 'recharts'
import Loader from '../loader'

const Goal = ({ scoreGoal, isloading }) => {
  const formatData = [{ scoreGoal }]

  const LegendGoal = () => {
    const userScore = formatData[0].scoreGoal
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
