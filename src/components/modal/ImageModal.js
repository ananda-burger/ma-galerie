import classes from './ImageModal.module.css'

const ImageModal = (props) => {
  const clickedImage = props.images.find((img) => img.id === props.imageId)
  return (
    <div
      className={classes.backdrop}
      onClick={() => props.setImageIsOpen(false)}
    >
      <img src={clickedImage.image} className={classes.image} />
    </div>
  )
}

export default ImageModal
