import MainNavigation from './components/layout/MainNavigation.js'
import { Route } from 'react-router-dom'
import { useState } from 'react'

import AllPicturesPage from './pages/AllPictures.js'
import ContactPage from './pages/Contact.js'
import FavoritesPage from './pages/Favorites.js'
import NewPicturePage from './pages/NewPicture.js'

const PICTURES = [
  {
    id: 1,
    image: 'https://wallpapercave.com/wp/wp4302820.jpg',
    title: 'A nice pink square',
    likes: false,
    boards: ['pink']
  },
  {
    id: 2,
    image: 'https://wallpaperaccess.com/full/1138983.jpg',
    title: 'Psychodelic future',
    likes: false,
    boards: ['black']
  },
  {
    id: 3,
    image:
      'https://uhdwallpapers.org/uploads/converted/19/08/03/huawei-mediapad-m6-stock-wallpaper-1024x1024_666874-mm-90.jpg',
    title: 'I love TRON',
    likes: false,
    boards: ['pink', 'blue']
  },
  {
    id: 4,
    image: 'https://cdn.wallpapersafari.com/21/87/qjJXvV.jpg',
    title: 'Space dude',
    likes: false,
    boards: ['pink', 'black', 'blue']
  },
  {
    id: 5,
    image:
      'https://hdwallpaperim.com/wp-content/uploads/2017/08/25/462707-universe-galaxy-space-stars-748x748.jpg',
    title: 'Deep Space',
    likes: false,
    boards: ['black', 'blue']
  },
  {
    id: 6,
    image:
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/10/1761.Desert_Tree_Day-375w-812h@3xiphone.png',
    title: 'One single tree',
    likes: false,
    boards: ['blue']
  },
  {
    id: 7,
    image:
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/10/1791.Lake_The_Cliff_Day-375w-812h@3xiphone.png',
    title: 'A ride on the mountain',
    likes: false,
    boards: ['pink', 'blue', 'black']
  },
  {
    id: 8,
    image:
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/10/1751.Desert_Peak_Day-375w-812h@3xiphone.png?resize=2048,2048',
    title: 'Nice calm mountain',
    likes: false,
    boards: ['blue']
  },
  {
    id: 9,
    image:
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/10/1811.Lake_The_Desert_Day-375w-812h@3xiphone.png',
    title: 'Nice desert day',
    likes: false,
    boards: ['pink', 'blue']
  },
  {
    id: 10,
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
  const [imagesDisplayed, setImagesDisplayed] = useState(2)

  return (
    <div>
      <MainNavigation
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        selectedBoardFilter={selectedBoardFilter}
        setSelectedBoardFilter={setSelectedBoardFilter}
        imagesDisplayed={imagesDisplayed}
        setImagesDisplayed={setImagesDisplayed}
      />
      <Route path="/" exact>
        <AllPicturesPage
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          selectedBoardFilter={selectedBoardFilter}
          setSelectedBoardFilter={setSelectedBoardFilter}
          images={images}
          setImages={setImages}
          imagesDisplayed={imagesDisplayed}
          setImagesDisplayed={setImagesDisplayed}
        />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
      <Route path="/new-picture">
        <NewPicturePage />
      </Route>
    </div>
  )
}

export default App
