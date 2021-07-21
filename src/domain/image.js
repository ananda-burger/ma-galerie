const tagFilter = (tag) => (image) => {
  return image.tags.includes(tag)
}

const toggleLike = (images, id) => {
  const updatedImages = [...images]
  const index = updatedImages.findIndex((image) => image.id === id)

  if (index === -1) throw new Error('Image id was not found')

  updatedImages[index] = {
    ...updatedImages[index],
    likes: !updatedImages[index].likes
  }
  return updatedImages
}

export { tagFilter, toggleLike }
