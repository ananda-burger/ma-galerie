import Link from 'next/link'

import classes from './MainNavigation.module.css'

export default function MainNavigation() {
  return (
    <header className={classes.head}>
      <div className={classes.title}>
        <Link  href="/">
          <a className={classes.transition}>
          Ma Galerie
          </a>
        </Link>
      </div>
      <Link href="/about">
        <a className={classes.nav}>
        About
        </a>
      </Link>
      <Link href="/contact">
        <a className={classes.nav}>
        Contact
        </a>
      </Link>
    </header>
  )
}
