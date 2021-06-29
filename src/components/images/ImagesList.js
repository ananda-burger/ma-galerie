import ImageItem from './ImageItem.js'

const ImagesList = (props) => {
  return (
    <ul>
      {
        props.images.map(img => {
          return <ImageItem key={img.id} id={img.id} image={img.image} title={img.title} />
        })
      }
    </ul>
  )
}

export default ImagesList
