import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import '../../utils/style/_leftNavBar.scss'
import Meditation from '../../assets/zenMan.svg'
import Swimmer from '../../assets/swimMan.svg'
import Biker from '../../assets/bikeMan.svg'
import Weight from '../../assets/weight.svg'

const LeftNavBar = () => {
  const { id } = useParams()
  // console.log('id=' + id)
  return (
    <div className="leftNavBarContainer">
      <div className="leftNavBarIconContainer">
        <Link
          to={{ pathname: '/user/' + id }}
          state={{ pageName: 'Main user infos' }}
        >
          <img src={Meditation} alt="Meditation" />
        </Link>
        <Link
          to={{ pathname: '/user/' + id + '/activity' }}
          state={{ pageName: 'Activity' }}
        >
          <img src={Swimmer} alt="Swimmer" />
        </Link>
        <Link
          to={{ pathname: '/user/' + id + '/average-sessions' }}
          state={{ pageName: 'Average sessions' }}
        >
          <img src={Biker} alt="Biker" />
        </Link>
        <Link
          to={{ pathname: '/user/' + id + '/performance' }}
          state={{ pageName: 'Performance' }}
        >
          <img src={Weight} alt="Weight" />
        </Link>
      </div>
      <div className="leftNavBarCopyright">Copyright, SportSee 2023</div>
    </div>
  )
}

export default LeftNavBar
