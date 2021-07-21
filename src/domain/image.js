const tagFilter = (tag) => (image) => {
  return image.tags.includes(tag)
}

const toggleLike = (images, id) => {
  const updatedImages = [...images]
  const index = updatedImages.findIndex((image) => image.id === id)
  updatedImages[index] = {
    ...updatedImages[index],
    likes: !updatedImages[index].likes
  }
  return updatedImages
}

export { tagFilter, toggleLike }
