import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'

const MainNavigation = (props) => {
  const selectHandler = (event) => {
    props.setSelectedFilter(event.target.value)
  }

  return (
    <header className={classes.head}>
      <div className={classes.title}>
        <Link to="/">Ma Galerie</Link>
      </div>
      <select defaultValue={props.selectedFilter} onChange={selectHandler}>
        <option value="all">All</option>
        <option value="liked">Liked</option>
        <option value="not-liked">Not liked</option>
      </select>
      {/* <Link to="/new-picture" className={classes.nav}> */}
      {/*   Add */}
      {/* </Link> */}
      {/* <Link to="/favorites" className={classes.nav}> */}
      {/*   Favs */}
      {/* </Link> */}
      {/* <Link to="/contact" className={classes.nav}> */}
      {/*   Contact */}
      {/* </Link> */}
    </header>
  )
}

export default MainNavigation
