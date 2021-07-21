import { tagFilter, toggleLike } from '../../src/domain/image.js'

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
