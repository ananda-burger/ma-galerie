import MainNavigation from './components/layout/MainNavigation.js'
import { Route, Switch, useLocation } from 'react-router-dom'
import { useState } from 'react'

import AllPicturesPage from './pages/AllPictures.js'
import ContactPage from './pages/Contact.js'
import AboutPage from './pages/About.js'
import ImageModal from './components/modal/ImageModal.js'
import { Tags } from './domain/constants.js'

const PICTURES = [
  {
    id: 1,
    source: 'https://live.staticflickr.com/65535/51315444616_dcd1002c18_c.jpg',
    title: 'We meet again',
    likes: false,
    tags: [Tags.Original],
    type: 'image'
  },
  // {
  //   id: 2,
  //   image: 'https://i.redd.it/y69ercliqi551.png',
  //   title: 'Game dude',
  //   likes: false,
  // tags: [Tags.Original]
  // },
  {
    id: 3,
    source: 'https://live.staticflickr.com/65535/51316191649_a842dd5848_k.jpg',
    title: 'An odd encounter',
    likes: false,
    tags: [Tags.Original],
    type: 'image'
  },
  {
    id: 4,
    source:
      'https://abduzeedo.com/sites/default/files/styles/square_1x1/public/originals/abdz_infrared_arashiyama_mockup_0.jpg?itok=D_-Tf7rE',
    title: 'Lovely pink trees',
    likes: false,
    tags: [Tags.FanArt],
    type: 'image'
  },
  {
    id: 5,
    source:
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/10/1751.Desert_Peak_Day-375w-812h@3xiphone.png?resize=2048,2048',
    title: 'Nice calm mountain Manga',
    likes: false,
    tags: [Tags.Original, Tags.Manga],
    type: 'image'
  },
  // {
  //   id: 6,
  //   source:
  //     'https://i.pinimg.com/originals/a4/f8/f9/a4f8f91b31d2c63a015ed34ae8c13bbd.jpg',
  //   title: 'Moon and tree',
  //   likes: false,
  // tags: [Tags.Original],
  // type: 'image'
  // },
  // {
  //   id: 7,
  //   source:
  //     'https://www.showmetech.com.br/wp-content/uploads//2017/01/outrun_wallpaper__10_-2017-01-25-0516.jpg',
  //   title: 'Turning torso',
  //   likes: false,
  // tags: [Tags.Original],
  // type: 'image'
  // },
  {
    id: 8,
    source:
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/10/1791.Lake_The_Cliff_Day-375w-812h@3xiphone.png',
    title: 'A ride on the mountain',
    likes: false,
    tags: [Tags.Original]
  },
  {
    id: 9,
    source:
      'https://live.staticflickr.com/video/51314819872/9b95baee92/1080p.mp4?s=eyJpIjo1MTMxNDgxOTg3MiwiZSI6MTYyNjQ4MDYzMywicyI6IjkyYWRiZGJiOGY3ZDJlNzJjNDI0NmU2MmFiNTVmZmVhZWFjNTZiNjgiLCJ2IjoxfQ',
    title: 'Chun-li: gesture drawing',
    likes: false,
    tags: [Tags.FanArt],
    type: 'video'
  },
  {
    id: 10,
    source:
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/10/1811.Lake_The_Desert_Day-375w-812h@3xiphone.png',
    title: 'Nice desert day',
    likes: false,
    tags: [Tags.Original],
    type: 'image'
  },
  {
    id: 11,
    source:
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/10/1821.Lake_The_Beach_Day-375w-812h@3xiphone.png',
    title: 'Lost on shore',
    likes: false,
    tags: [Tags.FanArt],
    type: 'image'
  }
]

const App = () => {
  const [selectedTag, setSelectedTag] = useState()
  const [images, setImages] = useState(PICTURES)

  const location = useLocation()
  const prevLocation = location.state && location.state.prevLocation

  return (
    <div>
      <MainNavigation />
      <Switch location={prevLocation || location}>
        <Route path="/" exact>
          <AllPicturesPage
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            images={images}
            setImages={setImages}
          />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/images/:id">
          <ImageModal images={images} />
        </Route>
      </Switch>

      {prevLocation && (
        <Route path="/images/:id">
          <ImageModal images={images} />
        </Route>
      )}
    </div>
  )
}

export default App
