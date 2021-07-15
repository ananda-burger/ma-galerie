import MainNavigation from './components/layout/MainNavigation.js'
import { Route, Switch, useLocation } from 'react-router-dom'
import { useState } from 'react'

import AllPicturesPage from './pages/AllPictures.js'
import ContactPage from './pages/Contact.js'
import AboutPage from './pages/About.js'
import ImageModal from './components/modal/ImageModal.js'

const PICTURES = [
  {
    id: 1,
    image: 'https://wallpapercave.com/wp/wp4302820.jpg',
    title: 'A nice pink square',
    likes: false,
    boards: ['pink']
  },
  // {
  //   id: 2,
  //   image: 'https://i.redd.it/y69ercliqi551.png',
  //   title: 'Game dude',
  //   likes: false,
  //   boards: ['black']
  // },
  {
    id: 3,
    image:
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/10/1761.Desert_Tree_Day-375w-812h@3xiphone.png',
    title: 'One single tree',
    likes: false,
    boards: ['blue']
  },
  {
    id: 4,
    image:
      'https://abduzeedo.com/sites/default/files/styles/square_1x1/public/originals/abdz_infrared_arashiyama_mockup_0.jpg?itok=D_-Tf7rE',
    title: 'Lovely pink trees',
    likes: false,
    boards: ['pink', 'blue']
  },
  {
    id: 5,
    image:
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/10/1751.Desert_Peak_Day-375w-812h@3xiphone.png?resize=2048,2048',
    title: 'Nice calm mountain',
    likes: false,
    boards: ['blue']
  },
  // {
  //   id: 6,
  //   image:
  //     'https://i.pinimg.com/originals/a4/f8/f9/a4f8f91b31d2c63a015ed34ae8c13bbd.jpg',
  //   title: 'Moon and tree',
  //   likes: false,
  //   boards: ['black', 'blue']
  // },
  // {
  //   id: 7,
  //   image:
  //     'https://www.showmetech.com.br/wp-content/uploads//2017/01/outrun_wallpaper__10_-2017-01-25-0516.jpg',
  //   title: 'Turning torso',
  //   likes: false,
  //   boards: ['pink', 'black', 'blue']
  // },
  {
    id: 8,
    image:
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/10/1791.Lake_The_Cliff_Day-375w-812h@3xiphone.png',
    title: 'A ride on the mountain',
    likes: false,
    boards: ['pink', 'blue', 'black']
  },
  // {
  //   id: 9,
  //   image: 'https://psxbrasil.com.br/wp-content/uploads/2020/09/TLOU-2-4K.jpg',
  //   title: 'Last of us',
  //   likes: false,
  //   boards: ['black']
  // },
  {
    id: 10,
    image:
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/10/1811.Lake_The_Desert_Day-375w-812h@3xiphone.png',
    title: 'Nice desert day',
    likes: false,
    boards: ['pink', 'blue']
  },
  {
    id: 11,
    image:
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/10/1821.Lake_The_Beach_Day-375w-812h@3xiphone.png',
    title: 'Lost on shore',
    likes: false,
    boards: ['black', 'blue']
  }
]

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedBoardFilter, setSelectedBoardFilter] = useState([])
  const [images, setImages] = useState(PICTURES)

  const location = useLocation()
  const prevLocation = location.state && location.state.prevLocation

  return (
    <div>
      <MainNavigation />
      <Switch location={prevLocation || location}>
        <Route path="/" exact>
          <AllPicturesPage
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            selectedBoardFilter={selectedBoardFilter}
            setSelectedBoardFilter={setSelectedBoardFilter}
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
