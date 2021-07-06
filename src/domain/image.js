const isSubset = (a, b) => {
  for (let value of b) {
    if (!a.includes(value)) {
      return false
    }
  }
  return true
}

const likeFilter = (selectedFilter) => (image) => {
  if (selectedFilter === 'liked') {
    return image.likes === true
  } else if (selectedFilter === 'not-liked') {
    return image.likes === false
  }
  return true
}

const boardFilter = (boards) => (image) => {
  return isSubset(image.boards, boards)
}

const toggleLike = (images, id) => {
  const updatedImages = [...images]
  const index = updatedImages.findIndex((image) => image.id === id)
  updatedImages[index].likes = !updatedImages[index].likes
  return updatedImages
}

export { boardFilter, likeFilter, toggleLike }
