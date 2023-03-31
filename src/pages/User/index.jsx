import '../../utils/style/_user.scss'
import LeftNavBar from '../../components/leftNavBar'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router'
import { useGet } from '../../utils/data/hook'
import baseUrl from '../../utils/data/config'
// import { userId } from '../../utils/data/config'
import Error from '../Error'

const User = () => {
  const { id } = useParams()
  // console.log('id=' + id)
  const userInfo = useGet(baseUrl + id)
  // console.log(userInfo)
  const { userInfos } = userInfo.data
  let location = useLocation()
  let pageName
  if (id === undefined) return <Error />
  // if (id === undefined) id = userId
  if (userInfo.error) {
    return (
      <section className="oups">
        <p>Oups il y a eu un problème, veuillez rechargez la page 🙏</p>
        <p>{userInfo.error.message}</p>
      </section>
    )
  }
  if (!location.state || location.state.pageName === undefined) {
    // console.log('State=null')
    pageName = 'Dashboard 1'
  } else {
    pageName = location.state.pageName
  }
  return (
    <div className="main">
      <LeftNavBar />
      {userInfo.isLoading ? (
        <div className="temp-div">
          <p>Chargement en cours...</p>
        </div>
      ) : (
        <div className="temp-div">
          {' '}
          Page User : {userInfos.firstName}
          <br />
          {pageName}
        </div>
      )}
    </div>
  )
}
export default User
