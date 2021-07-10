import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.head}>
      <div className={classes.title}>
        <Link to="/">Ma Galerie</Link>
      </div>
      <Link to="/about" className={classes.nav}>
        About
      </Link>
      <Link to="/contact" className={classes.nav}>
        Contact
      </Link>
    </header>
  )
}

export default MainNavigation
