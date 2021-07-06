import FullHeart from '../components/icons/FullHeart.js'
import HollowHeart from '../components/icons/HollowHeart.js'
import classes from './AllPictures.module.css'
import * as imageDomain from '../domain/image.js'

const AllPicturesPage = (props) => {
  const filteredImages = props.images
    .filter(imageDomain.likeFilter(props.selectedFilter))
    .filter(
      imageDomain.boardFilter(props.selectedBoardFilter.map((b) => b.value))
    )

  const toggleLike = (id) => {
    props.setImages(imageDomain.toggleLike(props.images, id))
  }

  const createColumns = (number) => {
    return '1fr '.repeat(number)
  }

  const gridStyle = {
    gridTemplateColumns: createColumns(props.imagesDisplayed)
  }

  return (
    <ul className={classes.list} style={gridStyle}>
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
