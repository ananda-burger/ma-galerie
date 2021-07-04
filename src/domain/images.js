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

export { filterImages }
