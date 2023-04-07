import '../../utils/style/_activity.scss'
import Loader from '../../components/loader'

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

const Activity = ({ dataActivity }) => {
  const { data, isLoading } = dataActivity
  const { sessions } = data

  const formatData = () =>
    sessions.map((item, index) => ({
      day: index + 1,
      poids: sessions[index].kilogram,
      cals: sessions[index].calories,
    }))

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
              // width={500}
              // height={300}
              data={formatData()}
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
                // dy={15}
                tickCount="10"
                tickLine={false}
                tick={{ fontSize: 14 }}
              />
              <YAxis
                dataKey="poids"
                yAxisId="poids"
                axisLine={false}
                domain={['dataMin-1', 'dataMax+2']}
                // dx={14}
                tickCount="3"
                tickLine={false}
                tick={{ fontSize: 14 }}
                orientation="right"
              />
              <YAxis dataKey="cals" yAxisId="cals" type="number" hide={true} />
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
                dataKey="poids"
                yAxisId="poids"
                fill="black"
                radius={[10, 10, 0, 0]}
                barSize={10}
              />
              <Bar
                dataKey="cals"
                yAxisId="cals"
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
