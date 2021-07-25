import FullHeart from './icons/FullHeart.js'
import HollowHeart from './icons/HollowHeart.js'
import * as imageDomain from '../domain/image.js'

import classes from './LikeButton.module.css'

const LikeButton = ({ thumbnails, setThumbnails, img }) => {
  const toggleLike = (id) => {
    setThumbnails(imageDomain.toggleLike(thumbnails, id))
  }

  return (
    <button onClick={() => toggleLike(img.id)} className={classes.likes}>
      {img.isLiked ? (
        <FullHeart className="icon-small" />
      ) : (
        <HollowHeart className="icon-small" />
      )}
    </button>
  )
}

export default LikeButton
