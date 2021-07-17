import { Link, useLocation } from 'react-router-dom'

import FullHeart from '../components/icons/FullHeart.js'
import HollowHeart from '../components/icons/HollowHeart.js'
import Expand from '../components/icons/Expand.js'
import classes from './AllPictures.module.css'
import * as imageDomain from '../domain/image.js'

const AllPicturesPage = (props) => {
  const location = useLocation()

  const filteredImages = props.images
    .filter(imageDomain.likeFilter(props.selectedFilter))
    .filter(
      imageDomain.boardFilter(props.selectedBoardFilter.map((b) => b.value))
    )

  const toggleLike = (id) => {
    props.setImages(imageDomain.toggleLike(props.images, id))
  }

  return (
    <div>
      <ul className={classes.cols}>
        {filteredImages.map((img) => {
          return (
            <li key={img.id} className={classes.item}>
              <Link
                to={{
                  pathname: `/images/${img.id}`,
                  state: { prevLocation: location }
                }}
                className={classes.expand}
              >
                <Expand className="icon-medium" />
              </Link>
              <Link
                to={{
                  pathname: `/images/${img.id}`,
                  state: { prevLocation: location }
                }}
                className={classes.imghoverzoom}
              >
                <div className={classes.overflow}>
                  {img.type === 'video' ? (
                    <video
                      className={classes.video}
                      height="400px"
                      width="100%"
                      controls
                      muted
                    >
                      <source src={img.source} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={img.source}
                      alt={img.title}
                      className={classes.image}
                    />
                  )}
                </div>
              </Link>
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
      <div className={classes.filterbar}>
        <div className={classes.filter}>Original</div>
        <div className={classes.filter}>FanArt</div>
        <div className={classes.filter}>Image</div>
        <div className={classes.filter}>Video</div>
      </div>
    </div>
  )
}

export default AllPicturesPage
