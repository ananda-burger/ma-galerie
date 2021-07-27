import FullHeart from './icons/FullHeart.js'
import HollowHeart from './icons/HollowHeart.js'
import * as imageDomain from '../domain/image.js'

import classes from './LikeButton.module.css'

export default function LikeButton({ images, setImages, img }) {
  const toggleLike = (id) => {
    setImages(imageDomain.toggleLike(images, id))
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
