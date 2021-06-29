import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.head}>
      <div >
        <Link to='/contact' className={classes.menu}>Menu</Link>
      </div>
      <div>
        <Link to='/' className={classes.title}>My Pictures</Link>
      </div>
      <ul>
        <li>
          <Link to='/new-picture'>Add</Link>
        </li>
        <li>
          <Link to='/favorites' >Favs</Link>
        </li>
      </ul>
    </header>
  )
}

export default MainNavigation
