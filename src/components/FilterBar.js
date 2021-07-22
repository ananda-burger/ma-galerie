import { Tags } from '../domain/constants.js'
import classes from './FilterBar.module.css'

const FilterBar = ({ selectedTag, setSelectedTag }) => {
  const tagClass = (tag) => {
    return selectedTag === tag ? classes.selectedFilter : classes.filter
  }

  const tagHandler = (tag) => (_event) => {
    if (selectedTag === tag) {
      setSelectedTag(undefined)
    } else {
      setSelectedTag(tag)
    }
  }

  return (
    <div className={classes.filterBar}>
      <div
        className={tagClass(Tags.Original)}
        onClick={tagHandler(Tags.Original)}
      >
        Original
      </div>
      <div className={tagClass(Tags.FanArt)} onClick={tagHandler(Tags.FanArt)}>
        FanArt
      </div>
      <div className={tagClass(Tags.Manga)} onClick={tagHandler(Tags.Manga)}>
        Manga
      </div>
    </div>
  )
}

export default FilterBar
