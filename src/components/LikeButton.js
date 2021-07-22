import FullHeart from './icons/FullHeart.js'
import HollowHeart from './icons/HollowHeart.js'
import * as imageDomain from '../domain/image.js'

import classes from './LikeButton.module.css'

const LikeButton = (props) => {
  const toggleLike = (id) => {
    props.setImages(imageDomain.toggleLike(props.images, id))
  }

  return (
    <button onClick={() => toggleLike(props.img.id)} className={classes.likes}>
      {props.img.isLiked ? (
        <FullHeart className="icon-small" />
      ) : (
        <HollowHeart className="icon-small" />
      )}
    </button>
  )
}

export default LikeButton
