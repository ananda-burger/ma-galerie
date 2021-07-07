import FullHeart from '../components/icons/FullHeart.js'
import HollowHeart from '../components/icons/HollowHeart.js'
import Expand from '../components/icons/Expand.js'
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

  return (
    <ul className={classes.cols}>
      {filteredImages.map((img) => {
        return (
          <li key={img.id} className={classes.item}>
            <div className={classes.expand}>
              <Expand />
            </div>
            <div className={classes.imghoverzoom}>
              <img src={img.image} alt={img.title} className={classes.image} />
            </div>
            <div className={classes.info}>
              <div className={classes.imgtitle}>{img.title}</div>
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
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default AllPicturesPage
