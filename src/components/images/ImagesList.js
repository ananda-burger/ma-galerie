import ImageItem from './ImageItem.js'
import classes from './ImagesList.module.css'

const ImagesList = (props) => {
  return (
    <div className={classes.list}>
      {props.images.map((img) => {
        return (
          /* <ImageItem */
          /* <li key={img.id} className={classes.item}> */
          <img
            key={img.id}
            src={img.image}
            alt={img.title}
            className={classes.item}
          />
          /* </li> */
          /*     key = { img.id } */
          /* id = { img.id } */
          /* image = { img.image } */
          /* title = { img.title } */
          /*   /> */
        )
      })}
    </div>
  )
}

export default ImagesList
