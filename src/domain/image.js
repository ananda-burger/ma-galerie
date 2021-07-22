import { Tags } from '../domain/constants.js'

const IMAGES = [
  {
    id: 1,
    source: 'https://live.staticflickr.com/65535/51315444616_dcd1002c18_c.jpg',
    title: 'We meet again',
    isLiked: false,
    tags: [Tags.Original],
    type: 'image'
  },
  // {
  //   id: 2,
  //   image: 'https://i.redd.it/y69ercliqi551.png',
  //   title: 'Game dude',
  //   isLiked: false,
  // tags: [Tags.Original]
  // },
  {
    id: 3,
    source: 'https://live.staticflickr.com/65535/51316191649_a842dd5848_k.jpg',
    title: 'An odd encounter',
    isLiked: false,
    tags: [Tags.Original],
    type: 'image'
  },
  {
    id: 4,
    source:
      'https://abduzeedo.com/sites/default/files/styles/square_1x1/public/originals/abdz_infrared_arashiyama_mockup_0.jpg?itok=D_-Tf7rE',
    title: 'Lovely pink trees',
    isLiked: false,
    tags: [Tags.FanArt],
    type: 'image'
  },
  {
    id: 5,
    source:
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/10/1751.Desert_Peak_Day-375w-812h@3xiphone.png?resize=2048,2048',
    title: 'Nice calm mountain Manga',
    isLiked: false,
    tags: [Tags.Original, Tags.Manga],
    type: 'image'
  },
  // {
  //   id: 6,
  //   source:
  //     'https://i.pinimg.com/originals/a4/f8/f9/a4f8f91b31d2c63a015ed34ae8c13bbd.jpg',
  //   title: 'Moon and tree',
  //   isLiked: false,
  // tags: [Tags.Original],
  // type: 'image'
  // },
  // {
  //   id: 7,
  //   source:
  //     'https://www.showmetech.com.br/wp-content/uploads//2017/01/outrun_wallpaper__10_-2017-01-25-0516.jpg',
  //   title: 'Turning torso',
  //   isLiked: false,
  // tags: [Tags.Original],
  // type: 'image'
  // },
  {
    id: 8,
    source:
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/10/1791.Lake_The_Cliff_Day-375w-812h@3xiphone.png',
    title: 'A ride on the mountain',
    isLiked: false,
    tags: [Tags.Original]
  },
  {
    id: 9,
    source:
      'https://live.staticflickr.com/video/51314819872/9b95baee92/1080p.mp4?s=eyJpIjo1MTMxNDgxOTg3MiwiZSI6MTYyNjQ4MDYzMywicyI6IjkyYWRiZGJiOGY3ZDJlNzJjNDI0NmU2MmFiNTVmZmVhZWFjNTZiNjgiLCJ2IjoxfQ',
    title: 'Chun-li: gesture drawing',
    isLiked: false,
    tags: [Tags.FanArt],
    type: 'video'
  },
  {
    id: 10,
    source:
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/10/1811.Lake_The_Desert_Day-375w-812h@3xiphone.png',
    title: 'Nice desert day',
    isLiked: false,
    tags: [Tags.Original],
    type: 'image'
  },
  {
    id: 11,
    source:
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/10/1821.Lake_The_Beach_Day-375w-812h@3xiphone.png',
    title: 'Lost on shore',
    isLiked: false,
    tags: [Tags.FanArt],
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
    setTimeout(() => resolve(IMAGES), 1000)
  })
}

export { tagFilter, toggleLike, fetchImages }
