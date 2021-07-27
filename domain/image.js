import { Tags } from '../domain/constants.js'

const IMAGES = [
  {
    id: 1,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/thumbnails/we-meet-again-thumb_4B_gwVUex.jpg?updatedAt=1627234034400',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Illustrations/we-meet-again-high_h2ig8cfT6y.jpg?updatedAt=1627233997575',
    title: 'We meet again',
    isLiked: false,
    tags: [Tags.Original],
    type: 'image'
  },
  {
    id: 2,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/thumbnails/alecrim-dourado-thumb_IAmdgbsMN.jpg?updatedAt=1627234031382',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Illustrations/alecrim-dourado-high_hRW27VEge.jpg?updatedAt=1627233996308',
    title: 'Alecrim Dourado',
    isLiked: false,
    tags: [Tags.Original],
    type: 'image'
  },
  {
    id: 3,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/thumbnails/the-girl-and-the-frog-thumb_zHydY20YI.jpg?updatedAt=1627234033606',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Illustrations/the-girl-and-the-frog-high_epLILcgK92.jpg?updatedAt=1627233997500',
    title: 'An odd encounter',
    isLiked: false,
    tags: [Tags.Original],
    type: 'image'
  },
  {
    id: 4,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/thumbnails/timetoshine-thumb_IvEXXaJLT.jpg?updatedAt=1627234033994',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Illustrations/timetoshine-high_T4GvNjLTLR.jpg?updatedAt=1627233997126',
    title: 'Time to shine',
    isLiked: false,
    tags: [Tags.Original],
    type: 'image'
  },
  {
    id: 5,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/Manga/Thumbnails/13-thumb_DuoeGAZPG.jpg?updatedAt=1627250645538',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Manga/High-resolution/13-high_pk_NRYwN6ft.jpg?updatedAt=1627250630453',
    title: "Everyday's fear",
    isLiked: false,
    tags: [Tags.Manga],
    type: 'image'
  },
  {
    id: 6,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/thumbnails/baby-crows-thumb_o0dOkN-5X.jpg?updatedAt=1627234031583',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Illustrations/baby-crows-high_EWOk1pGOo.jpg?updatedAt=1627233995976',
    title: 'Baby crows',
    isLiked: false,
    tags: [Tags.Original],
    type: 'image'
  },
  {
    id: 7,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/Manga/Thumbnails/10-thumb_rFGTM2gi4s.jpg?updatedAt=1627250645020',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Manga/High-resolution/10-high_g7_jx5LCK.jpg?updatedAt=1627250630474',
    title: 'Tension in the hallway',
    isLiked: false,
    tags: [Tags.Manga],
    type: 'image'
  },
  {
    id: 8,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/thumbnails/usagi-thumb_T1SM_3mJY4T.jpg?updatedAt=1627234034031',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Illustrations/usagi-high_Vy44vhCr7.jpg?updatedAt=1627233997198',
    title: 'I will be my own kind of princess',
    isLiked: false,
    tags: [Tags.FanArt],
    type: 'image'
  },
  {
    id: 9,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/thumbnails/howl-thumb_YKwCiayJH8.jpg?updatedAt=1627234031792',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Illustrations/howl-high___3XMOcnV.jpg?updatedAt=1627233995613',
    title: 'Kindness generates kindness',
    isLiked: false,
    tags: [Tags.FanArt],
    type: 'image'
  },
  {
    id: 10,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/Manga/Thumbnails/03-thumb_bb9TChdq3Y.jpg?updatedAt=1627250643277',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Manga/High-resolution/03-high_unfaTSQhxr.jpg?updatedAt=1627250630455',
    title: "Lira's daily life",
    isliked: false,
    tags: [Tags.Manga],
    type: 'image'
  },
  {
    id: 11,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/thumbnails/kiddo-thumb_rAnVomkyM.jpg?updatedAt=1627234032972',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Illustrations/kiddo-high_uoE6uIsff.jpg?updatedAt=1627233996246',
    title: 'Kiddo gesture drawing',
    isLiked: false,
    tags: [Tags.FanArt]
  },
  {
    id: 12,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/Videos/kiddo-gesture_x3u5OGVvLo.mp4?updatedAt=1627228956628',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Videos/kiddo-gesture_x3u5OGVvLo.mp4?updatedAt=1627228956628',
    title: 'Kiddo: gesture drawing process',
    isLiked: false,
    tags: [Tags.FanArt],
    type: 'video'
  },
  {
    id: 13,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/Manga/Thumbnails/12-thumb_rimg8ckzag.jpg?updatedAt=1627250645363',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Manga/High-resolution/12-high_3rz7OxCJf.jpg?updatedAt=1627250630464',
    title: 'Wash away those bad feelings',
    isLiked: false,
    tags: [Tags.Manga],
    type: 'image'
  },
  {
    id: 14,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/thumbnails/ivern-thumb_S8U3uSI1t.jpg?updatedAt=1627234032357',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Illustrations/ivern-high_ARmCkazI0.jpg?updatedAt=1627233997315',
    title: 'The green father',
    isLiked: false,
    tags: [Tags.FanArt],
    type: 'image'
  },
  {
    id: 15,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/Manga/Thumbnails/09-thumb_QCNeFqLOb.jpg?updatedAt=1627250644821',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Manga/High-resolution/09-high_y_DekmhvX5t.jpg?updatedAt=1627250630787',
    title: 'Discomfort',
    isliked: false,
    tags: [Tags.Manga],
    type: 'image'
  },
  {
    id: 16,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/Videos/kitana-gesture_uZbDJD--K.mp4?updatedAt=1627228958183',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Videos/kitana-gesture_uZbDJD--K.mp4?updatedAt=1627228958183',
    title: 'Kitana: gesture drawing process',
    isLiked: false,
    tags: [Tags.FanArt],
    type: 'video'
  },
  {
    id: 17,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/Manga/Thumbnails/07-thumb_In1i27Rwg.jpg?updatedAt=1627250644198',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Manga/High-resolution/07-high_A3Xvxeg6Dn.jpg?updatedAt=1627250630394',
    title: "Lira's daily life",
    isliked: false,
    tags: [Tags.Manga],
    type: 'image'
  },
  {
    id: 18,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/thumbnails/kitana-thumb_ieSLU1zenn.jpg?updatedAt=1627234033540',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Illustrations/kitana-high_TrCaWaIHH.jpg?updatedAt=1627233996261',
    title: 'Kitana gesture drawing',
    isLiked: false,
    tags: [Tags.FanArt],
    type: 'image'
  },
  {
    id: 19,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/thumbnails/brook-thumb_Qgw5Nc0Au.jpg?updatedAt=1627234031635',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Illustrations/brook-high_6NteCo-VRw.jpg?updatedAt=1627233995571',
    title: 'Fancy bones',
    isLiked: false,
    tags: [Tags.FanArt],
    type: 'image'
  },
  {
    id: 20,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/thumbnails/jujutsu-thumb_GxqQGT3Q7.jpg?updatedAt=1627234032632',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Illustrations/jujutsu-high_6rAFImcIRq.jpg?updatedAt=1627233996255',
    title: 'Sukuna - Jujutsu Kaisen',
    isLiked: false,
    tags: [Tags.FanArt],
    type: 'image'
  },
  {
    id: 21,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/Videos/chunli-gesture_oyXhUf4Ub.mp4?updatedAt=1627228835413',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Videos/chunli-gesture_oyXhUf4Ub.mp4?updatedAt=1627228835413',
    title: 'Chun-li: gesture drawing process',
    isLiked: false,
    tags: [Tags.FanArt],
    type: 'video'
  },
  {
    id: 22,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/Manga/Thumbnails/08-thumb_DfPnMnOaKB.jpg?updatedAt=1627250644466',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Manga/High-resolution/08-high_tV3TXfNQxr.jpg?updatedAt=1627250630894',
    title: 'Lunch break',
    isliked: false,
    tags: [Tags.Manga],
    type: 'image'
  },
  {
    id: 23,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/thumbnails/pandas-thumb_sjmaViQPW.jpg?updatedAt=1627234033436',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Illustrations/pandas-high_b96jKP02gZ.jpg?updatedAt=1627233996948',
    title: 'Crypto pandas',
    isLiked: false,
    tags: [Tags.Original],
    type: 'image'
  },
  {
    id: 24,
    thumbnailSource:
      'https://ik.imagekit.io/z9fjicafx6e/Manga/Thumbnails/06-thumb_vxilR4T8-.jpg?updatedAt=1627250643195',
    highResolutionSource:
      'https://ik.imagekit.io/z9fjicafx6e/Manga/High-resolution/06-high_9c96UFUSsK.jpg?updatedAt=1627250630469',
    title: 'Young love',
    isliked: false,
    tags: [Tags.Manga],
    type: 'image'
  }
]

const tagFilter = (tag) => (image) => {
  return image.tags.includes(tag)
}

const toggleLike = (images, id) => {
  const updatedImages = [...images]
  const index = updatedImages.findIndex((image) => image.id === id)

  if (index === -1) throw new Error('Image id was not found')

  updatedImages[index] = {
    ...updatedImages[index],
    isLiked: !updatedImages[index].isLiked
  }
  return updatedImages
}

const fetchImages = async () => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => resolve(IMAGES), Math.random() * 1000)
  })
}

export { tagFilter, toggleLike, fetchImages }
