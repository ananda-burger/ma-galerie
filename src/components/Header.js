import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.head}>
      <div>
        <h1>My Pictures</h1>
      </div>
      <div className={classes.navigation}>
        <a>Add new image</a>
        <p>Favorites</p>
        <a>Contact</a>
      </div>
    </header>
  )
}

export default Header
