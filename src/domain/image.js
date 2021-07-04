const filterImages = (images, selectedFilter) => {
  let filteredImages = images

  if (selectedFilter !== 'all') {
    filteredImages = filteredImages.filter((image) => {
      if (selectedFilter === 'liked') {
        return image.likes === true
      } else {
        return image.likes === false
      }
    })
  }

  return filteredImages
}

const toggleLike = (images, id) => {
  const updatedImages = [...images]
  const index = updatedImages.findIndex((image) => image.id === id)
  updatedImages[index].likes = !updatedImages[index].likes
  return updatedImages
}

export { filterImages, toggleLike }
