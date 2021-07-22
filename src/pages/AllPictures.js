import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Expand from '../components/icons/Expand.js'
import SkeletonImage from '../components/skeletons/SkeletonImage.js'
import FilterBar from '../components/FilterBar.js'
import LikeButton from '../components/LikeButton.js'
import * as imageDomain from '../domain/image.js'

import classes from './AllPictures.module.css'

const AllPicturesPage = ({
  selectedTag,
  setSelectedTag,
  images,
  setImages
}) => {
  const location = useLocation()

  let filteredImages = images
  if (selectedTag) {
    filteredImages = images.filter(imageDomain.tagFilter(selectedTag))
  }

  useEffect(() => {
    imageDomain.fetchImages().then((i) => setImages(i))
  }, [])

  return (
    <div>
      {filteredImages.length === 0 && (
        <ul className={classes.cols}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => {
            return <SkeletonImage key={n} />
          })}
        </ul>
      )}
      {filteredImages.length > 0 && (
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
                  className={classes.imageHoverZoom}
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
                  <div className={classes.imageTitle}>{img.title}</div>
                  <LikeButton setImages={setImages} images={images} img={img} />
                </div>
              </li>
            )
          })}
        </ul>
      )}
      <FilterBar selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
    </div>
  )
}

export default AllPicturesPage
