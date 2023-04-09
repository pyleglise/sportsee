import '../../utils/style/_user.scss'
import caloriesIcon from '../../assets/calories-icon.svg'
import proteinIcon from '../../assets/protein-icon.svg'
import carbsIcon from '../../assets/carbs-icon.svg'
import fatIcon from '../../assets/fat-icon.svg'
import Error from '../../components/error'
import Loader from '../../components/loader'
import LeftNavBar from '../../components/leftNavBar'
import Activity from '../../components/activity'
import AverageSession from '../../components/averageSession'
import Perfomance from '../../components/performance'
import Goal from '../../components/goal'
import KeyInfo from '../../components/keyInfo'
import { useParams } from 'react-router'
import useGet from '../../utils/data/hook'
import baseUrl from '../../utils/data/config'
import PerformanceData from '../../utils/data/models/PerformanceData'
import ActivityData from '../../utils/data/models/ActivityData'
import AvgSessionsData from '../../utils/data/models/AverageSessionsData'
import UserInfoData from '../../utils/data/models/UserInfoData'
import PropTypes from 'prop-types'
/**
 * Component that displays the user's dashboard and datas
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * return{
 *  <User pageName="Activity" />
 * }
 * @prop    {string}  pageName      User element to display. Dashboard by default
 * @returns {JSX.Element}           A JSX.Element that displays the user page
 */
const User = (props) => {
  const pageName = props.pageName
  const { id } = useParams()
  const userInfoRaw = useGet(baseUrl + id)
  const userActivityRaw = useGet(baseUrl + id + '/activity')
  const userPerfRaw = useGet(baseUrl + id + '/performance')
  const userSessionsRaw = useGet(baseUrl + id + '/average-sessions')

  if (
    userInfoRaw.isLoading ||
    userActivityRaw.isLoading ||
    userPerfRaw.isLoading ||
    userSessionsRaw.isLoading
  ) {
    return (
      <div className="main">
        <LeftNavBar />
        <div className="temp-div">
          <Loader />
        </div>
      </div>
    )
  } else {
    if (id === undefined || userInfoRaw.error) return <Error />
    else {
      const userInfo = new UserInfoData(userInfoRaw.data)
      const userActivity = new ActivityData(userActivityRaw.data)
      const userPerf = new PerformanceData(userPerfRaw.data)
      const userSessions = new AvgSessionsData(userSessionsRaw.data)
      const { userInfos, score, keyData } = userInfo

      return (
        <div className="main">
          <LeftNavBar />
          {
            {
              Dashboard: (
                <div className="content">
                  <div className="content-profile">
                    <div className="welcome">
                      <h1>
                        Bonjour <span>{`${userInfos.firstName}`}</span>
                      </h1>
                      <p>
                        Félicitations! Vous avez explosé vos objectifs hier 👏
                      </p>
                    </div>
                    <div className="dashboard">
                      <div className="charts">
                        <Activity dataActivity={userActivity} />
                        <div className="secondary-charts-container">
                          <AverageSession sessionData={userSessions} />
                          <Perfomance perfData={userPerf} />
                          <Goal score={score} isLoading={userInfo.isLoading} />
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
          }
        </div>
      )
    }
  }
}
User.propTypes = {
  /**
   * User element to display. Dashboard by default
   */
  pageName: PropTypes.string.isRequired,
}

User.defaultProps = {
  pageName: 'Dashboard',
}
export default User
