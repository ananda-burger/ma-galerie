import { Link } from 'react-router-dom'
import classes from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <img
          src="https://live.staticflickr.com/65535/51319473592_4e609971e6_k.jpg"
          alt="404 Page not found"
          className={classes.image}
        />
        <p className={classes.title}>Whoops!</p>
        <p className={classes.text}>Have you lost yourself in the art world?</p>
        <Link to="/">
          <div className={classes.home}>Return Home</div>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
