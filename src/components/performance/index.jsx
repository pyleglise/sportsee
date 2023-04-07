import '../../utils/style/_performance.scss'
import Loader from '../../components/loader'

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'
const TicksPerf = ({ payload, x, y, cx, cy, ...rest }) => {
  return (
    <text {...rest} y={y + (y - cy) / 8} x={x + (x - cx) / 82}>
      {payload.value}
    </text>
  )
}
const Perfomance = ({ perfData }) => {
  const { data, isLoading } = perfData
  // console.log('perfData=' + perfData)
  const frenchCategories = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ]

  const formatData = () =>
    data.data.map((item, index) => ({
      name: frenchCategories[index],
      value: item.value,
    }))

  return isLoading ? (
    <Loader />
  ) : (
    <div className="perf-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={formatData().reverse()}
          cx="50%"
          cy="50%"
          // outerRadius="50%"
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="name"
            stroke="#fffefc"
            tick={<TicksPerf cx={100} cy={70} />}
            tickLine={false}
            dy={0}
          />
          <Radar dataKey="value" fill="red" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Perfomance
