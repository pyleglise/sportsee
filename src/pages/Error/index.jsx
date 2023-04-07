import '../../utils/style/_error.scss'
import { NavLink } from 'react-router-dom'

export default function Untraceable() {
  return (
    <div className="error">
      <p className="error-num">404</p>
      <p className="error-txt">
        Oups!
        <br /> La page ou l'utilisateur que vous demandez n'existe pas.
      </p>
      <p>
        <NavLink to="/">Retournez sur la page d'accueil</NavLink>
      </p>
    </div>
  )
}
