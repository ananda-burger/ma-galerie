import { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import ImageModal from '../components/ImageModal.js'
import Layout from '../components/Layout.js'
import LikeButton from '../components/LikeButton.js'
import FilterBar from '../components/FilterBar.js'
import SkeletonImage from '../components/skeletons/SkeletonImage.js'
import Expand from '../components/icons/Expand.js'
import * as imageDomain from '../domain/image.js'
import classes from './index.module.css'

export default function Home() {
  const [images, setImages] = useState([])
  const [imageId, setImageId] = useState()

  const router = useRouter()

  let filteredImages = images
  if (router.query.tag) {
    filteredImages = images.filter(imageDomain.tagFilter(router.query.tag))
  }

  useEffect(() => {
    imageDomain.fetchImages().then((i) => setImages(i))
  }, [])

  return (
    <Layout>
      {imageId && (
        <ImageModal
          images={filteredImages}
          imageId={imageId}
          setImageId={setImageId}
        />
      )}
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
                  <a
                    onClick={() => setImageId(img.id)}
                    className={classes.expand}
                  >
                    <Expand className="icon-medium" />
                  </a>
                  <a
                    onClick={() => setImageId(img.id)}
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
                          <source src={img.thumbnailSource} type="video/mp4" />
                        </video>
                      ) : (
                        <Image
                          src={img.thumbnailSource}
                          alt={img.title}
                          layout="fill"
                          objectFit="cover"
                          className={classes.image}
                        />
                      )}
                    </div>
                  </a>
                  <div className={classes.info}>
                    <div className={classes.imageTitle}>{img.title}</div>
                    <LikeButton
                      setImages={setImages}
                      images={images}
                      img={img}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
        )}
        <FilterBar />
      </div>
    </Layout>
  )
}
