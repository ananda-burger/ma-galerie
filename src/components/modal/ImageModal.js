import classes from './ImageModal.module.css'
import Close from '../icons/Close.js'

const ImageModal = (props) => {
  const clickedImage = props.images.find((img) => img.id === props.imageId)
  // const keyUpHandler = (event) => {
  //   console.log(event.key)
  // }

  return (
    <div
      className={classes.backdrop}
      onClick={() => props.setImageIsOpen(false)}
      /* onKeyUp={keyUpHandler} */
    >
      <img src={clickedImage.image} className={classes.image} />
      <button
        className={classes.close}
        onClick={() => props.setImageIsOpen(false)}
      >
        X
      </button>
    </div>
  )
}

export default ImageModal