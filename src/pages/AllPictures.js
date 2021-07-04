import FullHeart from '../components/icons/FullHeart.js'
import HollowHeart from '../components/icons/HollowHeart.js'
import classes from './AllPictures.module.css'
import * as imageDomain from '../domain/image.js'

const AllPicturesPage = (props) => {
  // const filteredImages = imageDomain.filterImages(
  //   props.images,
  //   props.selectedFilter
  const filteredBoardImages = imageDomain.filterBoardImages(
    props.images,
    props.selectedFilter
  )

  const toggleLike = (id) => {
    props.setImages(imageDomain.toggleLike(props.images, id))
  }

  return (
    <ul className={classes.list}>
      {filteredBoardImages.map((img) => {
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
