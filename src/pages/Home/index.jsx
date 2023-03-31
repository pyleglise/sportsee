import { useLocation } from 'react-router-dom'
const Home = () => {
  let location = useLocation()
  // console.log(location)
  let pageName
  if (!location.state || location.state.pageName === undefined) {
    console.log('State=null')
    // if (location.state.pageName === undefined) {
    pageName = 'Accueil'
    // }
  } else {
    pageName = location.state.pageName
  }
  return (
    <div className="temp-div">
      Page {pageName}
      <br />
      En cours de développement
    </div>
  )
}
export default Home
