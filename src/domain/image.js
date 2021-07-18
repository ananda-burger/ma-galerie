const likeFilter = (selectedFilter) => (image) => {
  if (selectedFilter === 'liked') {
    return image.likes === true
  } else if (selectedFilter === 'not-liked') {
    return image.likes === false
  }
  return true
}

const tagFilter = (tag) => (image) => {
  return image.tags.includes(tag)
}

const toggleLike = (images, id) => {
  const updatedImages = [...images]
  const index = updatedImages.findIndex((image) => image.id === id)
  updatedImages[index].likes = !updatedImages[index].likes
  return updatedImages
}

export { tagFilter, likeFilter, toggleLike }
