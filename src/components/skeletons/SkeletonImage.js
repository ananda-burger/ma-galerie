import classes from './SkeletonImage.module.css'
import Photograph from '../icons/Photograph.js'

const SkeletonImage = () => {
  return (
    <div className={classes.skeletonwrapper}>
      <div className={classes.skeletonimage}>
        <Photograph className={classes.icon} />
      </div>
      <div className={classes.skeletontitle}>
        <div className={classes.skeletontext}></div>
        <div className={classes.skeletonlike}></div>
      </div>
      <div className={classes.shimmerwrapper}>
        <div className={classes.shimmer}></div>
      </div>
    </div>
  )
}

export default SkeletonImage
