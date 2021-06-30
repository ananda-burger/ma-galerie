// import ImageItem from './ImageItem.js'
import classes from './ImagesList.module.css'

const ImagesList = (props) => {
  return (
    <ul className={classes.list}>
      {props.images.map((img) => {
        return (
          <li key={img.id} className={classes.item}>
            <img src={img.image} alt={img.title} className={classes.image} />
            <div className={classes.text}>{img.title}</div>
          </li>
        )
      })}
    </ul>
  )
}

export default ImagesList
