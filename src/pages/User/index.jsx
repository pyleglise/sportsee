import '../../utils/style/_user.scss'
import caloriesIcon from '../../assets/calories-icon.svg'
import proteinIcon from '../../assets/protein-icon.svg'
import carbsIcon from '../../assets/carbs-icon.svg'
import fatIcon from '../../assets/fat-icon.svg'
import Loader from '../../components/loader'
import LeftNavBar from '../../components/leftNavBar'
import Activity from '../../components/activity'
import AverageSession from '../../components/averageSession'
import Perfomance from '../../components/performance'
import Goal from '../../components/goal'
import KeyInfo from '../../components/keyInfo'

import { useParams } from 'react-router'
import { useGet } from '../../utils/data/hook'
import baseUrl from '../../utils/data/config'
import Error from '../Error'

const User = (props) => {
  const { id } = useParams()
  const userInfo = useGet(baseUrl + id)

  const pageName = props.pageName
  const userActivity = useGet(baseUrl + id + '/activity')
  const userSessions = useGet(baseUrl + id + '/average-sessions')
  const userPerf = useGet(baseUrl + id + '/performance')
  const { userInfos, score, todayScore, keyData } = userInfo.data

  if (id === undefined || userInfo.error) return <Error />

  let scoreGoal = 0
  score ? (scoreGoal = score) : (scoreGoal = todayScore)

  return (
    <div className="main">
      <LeftNavBar />
      {userInfo.isLoading ? (
        <div className="temp-div">
          <Loader />
        </div>
      ) : (
        {
          Dashboard: (
            <div className="content">
              <div className="content-profile">
                <div className="welcome">
                  <h1>
                    Bonjour <span>{`${userInfos.firstName}`}</span>
                  </h1>
                  <p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className="dashboard">
                  <div className="charts">
                    <Activity dataActivity={userActivity} />
                    <div className="secondary-charts-container">
                      <AverageSession sessionData={userSessions} />
                      <Perfomance perfData={userPerf} />
                      <Goal
                        scoreGoal={scoreGoal}
                        isLoading={userInfo.isLoading}
                      />
                    </div>
                  </div>
                  <div className="key-infos-zone">
                    <KeyInfo
                      className="key-info"
                      keyData={keyData.calorieCount}
                      img={caloriesIcon}
                      unit={'kCal'}
                      category={'Calories'}
                      isLoading={userInfo.isLoading}
                    />
                    <KeyInfo
                      className="key-info"
                      keyData={keyData.proteinCount}
                      img={proteinIcon}
                      unit={'g'}
                      category={'Proteines'}
                      isLoading={userInfo.isLoading}
                    />
                    <KeyInfo
                      className="key-info"
                      keyData={keyData.carbohydrateCount}
                      img={carbsIcon}
                      unit={'g'}
                      category={'Glucides'}
                      isLoading={userInfo.isLoading}
                    />
                    <KeyInfo
                      className="key-info"
                      keyData={keyData.lipidCount}
                      img={fatIcon}
                      unit={'g'}
                      category={'Lipides'}
                      isLoading={userInfo.isLoading}
                    />
                  </div>
                </div>
              </div>
            </div>
          ),
          Activity: (
            <div className="solo-container">
              <Activity dataActivity={userActivity} />
            </div>
          ),
          AverageSessions: (
            <div className="solo-container">
              <AverageSession sessionData={userSessions} />
            </div>
          ),
          Performance: (
            <div className="solo-container">
              <Perfomance perfData={userPerf} />
            </div>
          ),
        }[pageName]
      )}
    </div>
  )
}
export default User
