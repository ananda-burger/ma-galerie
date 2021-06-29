import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.head}>
      <div className={classes.title}>
        <Link to="/">My Pictures</Link>
      </div>
      <Link to="/new-picture" className={classes.nav}>
        Add
      </Link>
      <Link to="/favorites" className={classes.nav}>
        Favs
      </Link>
      <Link to="/contact" className={classes.nav}>
        Contact
      </Link>
    </header>
  )
}

export default MainNavigation
