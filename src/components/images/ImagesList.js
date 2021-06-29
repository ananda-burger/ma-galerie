// import ImageItem from './ImageItem.js'
import classes from './ImagesList.module.css'

const ImagesList = (props) => {
  return (
    <ul className={classes.list}>
      {props.images.map((img) => {
        return (
          <li className={classes.item}>
            <img
              key={img.id}
              src={img.image}
              alt={img.title}
              className={classes.image}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default ImagesList
