import { Link, useLocation } from 'react-router-dom'

import FullHeart from '../components/icons/FullHeart.js'
import HollowHeart from '../components/icons/HollowHeart.js'
import Expand from '../components/icons/Expand.js'
import classes from './AllPictures.module.css'
import * as imageDomain from '../domain/image.js'
import { Tags } from '../domain/constants.js'
import SkeletonImage from '../components/skeletons/SkeletonImage.js'

const AllPicturesPage = (props) => {
  const location = useLocation()

  let filteredImages = props.images
  if (props.selectedTag) {
    filteredImages = props.images.filter(
      imageDomain.tagFilter(props.selectedTag)
    )
  }

  const fakeFetchImages = () => {
    props.setImages(props.fetchedImages)
  }

  setTimeout(fakeFetchImages, 1000)

  const toggleLike = (id) => {
    props.setImages(imageDomain.toggleLike(props.images, id))
  }

  const tagHandler = (tag) => (_event) => {
    if (props.selectedTag === tag) {
      props.setSelectedTag(undefined)
    } else {
      props.setSelectedTag(tag)
    }
  }

  const tagClass = (tag) => {
    return props.selectedTag === tag ? classes.selectedfilter : classes.filter
  }

  return (
    <div>
      {!props.images && (
        <ul className={classes.cols}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => {
            return <SkeletonImage key={n} />
          })}
        </ul>
      )}
      {props.images && (
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
      )}
      <div className={classes.filterbar}>
        <div
          className={tagClass(Tags.Original)}
          onClick={tagHandler(Tags.Original)}
        >
          Original
        </div>
        <div
          className={tagClass(Tags.FanArt)}
          onClick={tagHandler(Tags.FanArt)}
        >
          FanArt
        </div>
        <div className={tagClass(Tags.Manga)} onClick={tagHandler(Tags.Manga)}>
          Manga
        </div>
      </div>
    </div>
  )
}

export default AllPicturesPage
