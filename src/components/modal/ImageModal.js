import classes from './ImageModal.module.css'
import Close from '../icons/Close.js'

const ImageModal = (props) => {
  const clickedImage = props.images.find((img) => img.id === props.imageId)

  const keyUpHandler = (event) => {
    if (event.key === 'Escape') props.setImageIsOpen(false)
  }

  return (
    <div
      className={classes.backdrop}
      onClick={() => props.setImageIsOpen(false)}
    >
      <input className={classes.input} autoFocus onKeyUp={keyUpHandler} />
      <img
        alt={clickedImage.title}
        src={clickedImage.image}
        className={classes.image}
      />
      <button
        className={classes.close}
        onClick={() => props.setImageIsOpen(false)}
      >
        <Close className="icon-medium" />
      </button>
    </div>
  )
}

export default ImageModal
