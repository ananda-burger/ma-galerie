import Link from 'next/link'
import { useRouter } from 'next/router'

import classes from './MainNavigation.module.css'

export default function MainNavigation() {
  const router = useRouter()

  return (
    <header className={classes.head}>
      <div className={classes.title}>
        <Link href="/">
          <a
            className={
              router.pathname === '/'
                ? classes.selectedTitle
                : classes.notSelected
            }
          >
            Ma Galerie
          </a>
        </Link>
      </div>
      <Link href="/about">
        <a
          className={
            router.pathname === '/about' ? classes.selectedNav : classes.nav
          }
        >
          About
        </a>
      </Link>
      <Link href="/contact">
        <a
          className={
            router.pathname === '/contact' ? classes.selectedNav : classes.nav
          }
        >
          Contact
        </a>
      </Link>
    </header>
  )
}
