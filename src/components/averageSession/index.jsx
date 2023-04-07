import '../../utils/style/_averageSession.scss'
import Loader from '../../components/loader'

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
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

const LegendSession = () => {
  return (
    <div className="special-legend--sessions">
      <p>Durée moyenne des sessions</p>
    </div>
  )
}

const AverageSession = ({ sessionData }) => {
  const { data, isLoading } = sessionData
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  const formatData = () =>
    days.map((item, index) => ({
      day: item,
      length: data.sessions[index].sessionLength,
    }))

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
            data={formatData()}
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
              dataKey="length"
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
