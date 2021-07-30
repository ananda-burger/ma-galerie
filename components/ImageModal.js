import classes from './ImageModal.module.css'
import Close from './icons/Close.js'
import NotFound from '../pages/404.js'

export default function ImageModal({ images, imageId, setImageId }) {
  const image = images.find((img) => img.id === imageId)
  if (!image) return <NotFound />

  const close = (_event) => setImageId(undefined)

  return (
    <div className={classes.backdrop} onClick={close}>
      {image.type === 'video' ? (
        <video controls muted height="100%" className={classes.image}>
          <source src={image.highResolutionSource} type="video/mp4" />
        </video>
      ) : (
        <img
          alt={image.title}
          src={image.highResolutionSource}
          className={classes.image}
        />
      )}
      <button className={classes.close} onClick={close}>
        <Close className={classes.x} />
      </button>
    </div>
  )
}
