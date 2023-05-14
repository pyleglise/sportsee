import { useLocation } from 'react-router-dom'

/**
 * Component that displays the Home page\
 * No props
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * return{
 *  <Home />
 * }
 * @returns {JSX.Element}   A JSX.Element that displays the Home Page
 *
 */
const Home = () => {
  let location = useLocation()
  let pageName = 'Accueil'
  if (location.state && location.state.pageName !== undefined) {
    pageName = location.state.pageName
  }
  return (
    <div className="temp-div home-div">
      Page {pageName}
      <br />
      En cours de développement
    </div>
  )
}

export default Home
