import classes from './ImageModal.module.css'
import Close from '../icons/Close.js'

import { useHistory, useParams } from 'react-router-dom'

const ImageModal = (props) => {
  const history = useHistory()
  const id = parseInt(useParams().id, 10)
  const image = props.images.find((img) => img.id === id)

  if (!image) return null

  const close = (e) => {
    console.log(e)
    e.stopPropagation()
    history.push('/')
  }

  return (
    <div className={classes.backdrop} onClick={close}>
      <input className={classes.input} autoFocus onKeyUp={close} />
      <img alt={image.title} src={image.image} className={classes.image} />
      <button className={classes.close} onClick={close}>
        <Close className="icon-medium" />
      </button>
    </div>
  )
}

export default ImageModal
