import { Link } from 'react-router-dom'
import logo from '../../assets/logo-sportsee.svg'
import '../../utils/style/_header.scss'

function Header() {
  return (
    <header className="headerContainer">
      <Link to="/">
        <img className="headerLogo" src={logo} alt="SportSee Logo" />
      </Link>
      <nav className="headerNavigation">
        <Link to="/" state={{ pageName: 'Accueil' }}>
          Accueil
        </Link>
        <Link to="/user">Profil</Link>
        <Link to="/" state={{ pageName: 'Réglages' }}>
          Réglages
        </Link>
        <Link to="/" state={{ pageName: 'Communauté' }}>
          Communauté
        </Link>
      </nav>
    </header>
  )
}

export default Header
