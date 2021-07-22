import classes from './ImageModal.module.css'
import Close from './icons/Close.js'
import NotFound from '../pages/NotFound.js'

import { useHistory, useParams } from 'react-router-dom'

const ImageModal = (props) => {
  const history = useHistory()
  const id = parseInt(useParams().id, 10)
  const image = props.images.find((img) => img.id === id)

  if (!image) return <NotFound />

  const close = (e) => {
    e.stopPropagation()
    history.push('/')
  }

  return (
    <div className={classes.backdrop} onClick={close}>
      <input className={classes.input} autoFocus onKeyUp={close} />
      {image.type === 'video' ? (
        <video controls muted height="100%" className={classes.image}>
          <source src={image.source} type="video/mp4" />
        </video>
      ) : (
        <img alt={image.title} src={image.source} className={classes.image} />
      )}
      <button className={classes.close} onClick={close}>
        <Close className={classes.x} />
      </button>
    </div>
  )
}

export default ImageModal
