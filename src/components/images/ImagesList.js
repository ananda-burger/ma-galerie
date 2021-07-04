import { useState } from 'react'

import FullHeart from '../icons/FullHeart.js'
import HollowHeart from '../icons/HollowHeart.js'
import classes from './ImagesList.module.css'

const ImagesList = (props) => {
  const [renderImages, setRenderImages] = useState(props.images)

  const hasLikes = (id) => {
    const index = renderImages.findIndex((image) => image.id === id)
    renderImages[index].likes = !renderImages[index].likes
    const updatedImages = [...renderImages]

    setRenderImages(updatedImages)
  }

  return (
    <ul className={classes.list}>
      {renderImages.map((img) => {
        return (
          <li key={img.id} className={classes.item}>
            <img src={img.image} alt={img.title} className={classes.image} />
            <div className={classes.text}>{img.title}</div>
            <button onClick={() => hasLikes(img.id)} className={classes.likes}>
              {img.likes ? (
                <FullHeart className="icon-small" />
              ) : (
                <HollowHeart className="icon-small" />
              )}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default ImagesList
