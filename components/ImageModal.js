import Image from 'next/image'

import classes from './ImageModal.module.css'
import Close from './icons/Close.js'
import NotFound from '../pages/404.js'
import Next from './icons/Next.js'
import Previous from './icons/Previous.js'

export default function ImageModal({ images, imageId, setImageId }) {
  const index = images.findIndex((img) => img.id === imageId)
  const image = images[index]

  if (!image) return <NotFound />

  const close = (_event) => setImageId(undefined)

  const next = (event) => {
    event.stopPropagation()
    if (index === images.length - 1) {
      setImageId(undefined)
    } else {
      const nextId = images[index + 1].id
      setImageId(nextId)
    }
  }

  const prev = (event) => {
    event.stopPropagation()
    if (imageId === 1) {
      setImageId(undefined)
    } else {
      setImageId(imageId - 1)
    }
  }

  return (
    <div>
      <div className={classes.backdrop} onClick={close}>
        {image.type === 'video' ? (
          <video controls muted height="100%" className={classes.video}>
            <source src={image.highResolutionSource} type="video/mp4" />
          </video>
        ) : (
          <div className={classes.imageContainer}>
            <Image
              alt={image.title}
              src={image.highResolutionSource}
              layout="fill"
              className={classes.image}
            />
          </div>
        )}
        <button className={classes.close} onClick={close}>
          <Close className={classes.x} />
        </button>
        <button className={classes.next} onClick={next}>
          <Next />
        </button>
        <button className={classes.prev} onClick={prev}>
          <Previous />
        </button>
      </div>
    </div>
  )
}
