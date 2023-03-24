import '../../utils/style/_user.scss'
import LeftNavBar from '../../components/leftNavBar'
import { useLocation } from 'react-router-dom'

const User = () => {
  let location = useLocation()
  let pageName
  if (!location.state || location.state.pageName === undefined) {
    console.log('State=null')
    pageName = 'Dashboard 1'
  } else {
    pageName = location.state.pageName
  }
  return (
    <div className="main">
      <LeftNavBar />
      <div className="temp-div">
        {' '}
        Page User
        <br />
        {pageName}
      </div>
    </div>
  )
}
export default User
