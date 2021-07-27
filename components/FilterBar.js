import { useRouter } from 'next/router'

import { Tags } from '../domain/constants.js'
import classes from './FilterBar.module.css'

export default function FilterBar() {
  const router = useRouter()

  const tagClass = (tag) => {
    return router.query.tag === tag ? classes.selectedFilter : classes.filter
  }

  const tagHandler = (tag) => (_event) => {
    if (router.query.tag === tag) {
      router.push('/')
    } else {
      router.push(`/?tag=${tag}`)
    }
  }

  return (
    <div className={classes.filterBar}>
      <a
        onClick={tagHandler(Tags.Original)}
        className={tagClass(Tags.Original)}
      >
        Original
      </a>
      <a onClick={tagHandler(Tags.FanArt)} className={tagClass(Tags.FanArt)}>
        FanArt
      </a>
      <a onClick={tagHandler(Tags.Manga)} className={tagClass(Tags.Manga)}>
        Manga
      </a>
    </div>
  )
}
