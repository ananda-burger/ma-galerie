import { tagFilter, toggleLike, fetchImages } from '../../domain/image.js'

describe('.tagFilter', () => {
  const image = { tags: ['pudim', 'banana'] }

  it('returns true when filtered tag is included in the image tags', () => {
    expect(tagFilter('pudim')(image)).toBe(true)
    expect(tagFilter('banana')(image)).toBe(true)
  })

  it('returns false when filtered tag is not included in the image tags', () => {
    expect(tagFilter('kakarot')(image)).toBe(false)
    expect(tagFilter('')(image)).toBe(false)
  })
})

describe('.toggleLike', () => {
  const images = [
    { id: 1, isLiked: true },
    { id: 2, isLiked: false }
  ]

  it('toggles the image liked flag', () => {
    expect(toggleLike(images, 1)).toEqual([
      { id: 1, isLiked: false },
      { id: 2, isLiked: false }
    ])

    expect(toggleLike(images, 2)).toEqual([
      { id: 1, isLiked: true },
      { id: 2, isLiked: true }
    ])
  })

  it('is immutable', () => {
    expect(toggleLike(images, 1)).not.toBe(toggleLike(images, 1))
  })

  it('throws an error if image id is not found', () => {
    expect(() => toggleLike(images, 0)).toThrow()
  })
})

describe('.fetchImages', () => {
  it('asynchronously fetches images', async () => {
    const images = await fetchImages()
    expect(images.length).toBeGreaterThan(1)
    expect(images[0]).toEqual({
      id: 1,
      thumbnailSource:
        'https://ik.imagekit.io/z9fjicafx6e/thumbnails/we-meet-again-thumb_4B_gwVUex.jpg?updatedAt=1627234034400',
      highResolutionSource:
        'https://ik.imagekit.io/z9fjicafx6e/Illustrations/we-meet-again-high_h2ig8cfT6y.jpg?updatedAt=1627233997575',
      title: 'We meet again',
      isLiked: false,
      tags: ['original'],
      type: 'image'
    })
  })
})
