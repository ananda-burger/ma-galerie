import Link from 'next/link'
import classes from './404.module.css'

export default function NotFound() {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <img
          src="https://ik.imagekit.io/z9fjicafx6e/Pages/404_rQXms7PVy.jpg?updatedAt=1627235210608"
          alt="404 Page not found"
          className={classes.image}
        />
        <p className={classes.title}>Whoops!</p>
        <p className={classes.text}>Have you lost yourself in the art world?</p>
        <Link href="/">
          <a>
          <div className={classes.home}>Return Home</div>
          </a>
        </Link>
      </div>
    </div>
  )
}
