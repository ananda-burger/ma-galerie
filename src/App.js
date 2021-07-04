// import Layout from './components/layout/Layout.js'
// import Header from './components/Header.js'
import MainNavigation from './components/layout/MainNavigation.js'
import { Route } from 'react-router-dom'
import { useState } from 'react'

import Intro from './components/layout/Intro.js'
import AllPicturesPage from './pages/AllPictures.js'
import ContactPage from './pages/Contact.js'
import FavoritesPage from './pages/Favorites.js'
import NewPicturePage from './pages/NewPicture.js'

const PICTURES = [
  {
    id: 1,
    image: 'https://wallpapercave.com/wp/wp4302820.jpg',
    title: 'A nice pink background',
    likes: false,
    boards: ['pink']
  },
  {
    id: 2,
    image: 'https://wallpaperaccess.com/full/1138983.jpg',
    title: 'A tron inspired image',
    likes: false,
    boards: ['black']
  },
  {
    id: 3,
    image:
      'https://uhdwallpapers.org/uploads/converted/19/08/03/huawei-mediapad-m6-stock-wallpaper-1024x1024_666874-mm-90.jpg',
    title: 'Another tron inspired image',
    likes: false,
    boards: ['pink', 'blue']
  },
  {
    id: 4,
    image: 'https://cdn.wallpapersafari.com/21/87/qjJXvV.jpg',
    title: 'A nice geometric image',
    likes: false,
    boards: ['pink', 'black', 'blue']
  }
]

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedBoardFilter, setSelectedBoardFilter] = useState([])
  const [images, setImages] = useState(PICTURES)

  return (
    <div>
      <Intro />
      <MainNavigation
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        selectedBoardFilter={selectedBoardFilter}
        setSelectedBoardFilter={setSelectedBoardFilter}
      />
      <Route path="/" exact>
        <AllPicturesPage
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          setImages={setImages}
          images={images}
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
