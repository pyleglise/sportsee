import { useLocation } from 'react-router-dom'
const Home = () => {
  let location = useLocation()
  let pageName = 'Accueil'
  if (location.state && location.state.pageName !== undefined) {
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
