import FullHeart from '../icons/FullHeart.js'
import HollowHeart from '../icons/HollowHeart.js'
import classes from './ImagesList.module.css'

const ImagesList = (props) => {
  let filteredImages = props.images
  if (props.selectedFilter !== 'all') {
    filteredImages = filteredImages.filter((image) => {
      if (props.selectedFilter === 'liked') {
        return image.likes === true
      } else {
        return image.likes === false
      }
    })
  }

  const toggleLike = (id) => {
    const index = props.images.findIndex((image) => image.id === id)
    props.images[index].likes = !props.images[index].likes
    const updatedImages = [...props.images]

    props.setImages(updatedImages)
  }

  return (
    <ul className={classes.list}>
      {filteredImages.map((img) => {
        return (
          <li key={img.id} className={classes.item}>
            <img src={img.image} alt={img.title} className={classes.image} />
            <div className={classes.text}>{img.title}</div>
            <button
              onClick={() => toggleLike(img.id)}
              className={classes.likes}
            >
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
