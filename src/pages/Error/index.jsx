import '../../utils/style/_error.scss'
import { NavLink } from 'react-router-dom'

export default function Untraceable() {
  return (
    <div className="error">
      <p className="error-num">404</p>
      <p className="error-txt">Oups! La page que vous demandez n'existe pas.</p>
      <p>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
        >
          Retournez sur la page d'accueil
        </NavLink>
      </p>
    </div>
  )
}
