import classes from './ImageItem.module.css'

const ImageItem = (props) => {
  return (
    <li>
      <div>
      <img src={props.image} alt={props.title}/>
      </div>
      <div className={classes.description}>
        <p>{props.title}</p>
        <button>likes</button>
      </div>
    </li>
  )
}

export default ImageItem
