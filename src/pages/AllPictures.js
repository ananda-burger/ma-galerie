import ImageModal from '../components/modal/ImageModal.js'
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

  const expandHandler = (id) => {
    props.setImageIsOpen(true)
  }

  return (
    <div>
      <ul className={classes.cols}>
        {filteredImages.map((img) => {
          return (
            <li key={img.id} className={classes.item}>
              <button
                className={classes.expand}
                onClick={() => expandHandler(img.id)}
              >
                <Expand />
              </button>
              <div className={classes.imghoverzoom}>
                <img
                  src={img.image}
                  alt={img.title}
                  className={classes.image}
                />
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
      {props.imageIsOpen && <ImageModal />}
      {/* {props.imageIsOpen && <ImageBackdrop />} */}
    </div>
  )
}

export default AllPicturesPage
