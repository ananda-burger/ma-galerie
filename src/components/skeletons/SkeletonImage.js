import classes from './SkeletonImage.module.css'
import Photograph from '../icons/Photograph.js'

const SkeletonImage = () => {
  return (
    <div className={classes.skeletonWrapper}>
      <div className={classes.skeletonImage}>
        <Photograph className={classes.icon} />
      </div>
      <div className={classes.skeletonTitle}>
        <div className={classes.skeletonText}></div>
        <div className={classes.skeletonLike}></div>
      </div>
      <div className={classes.shimmerWrapper}>
        <div className={classes.shimmer}></div>
      </div>
    </div>
  )
}

export default SkeletonImage
