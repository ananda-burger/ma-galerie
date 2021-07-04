import FullHeart from '../components/icons/FullHeart.js'
import HollowHeart from '../components/icons/HollowHeart.js'
import classes from './AllPictures.module.css'
import { filterImages } from '../domain/images.js'

const AllPicturesPage = (props) => {
  const filteredImages = filterImages(props.images, props.selectedFilter)

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

export default AllPicturesPage
