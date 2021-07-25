import { useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { useState } from 'react'

import MainNavigation from './components/MainNavigation.js'
import AllPicturesPage from './pages/AllPictures.js'
import ContactPage from './pages/Contact.js'
import AboutPage from './pages/About.js'
import ImageModal from './components/ImageModal.js'
import NotFound from './pages/NotFound.js'
import * as imageDomain from './domain/image.js'

const App = () => {
  const [selectedTag, setSelectedTag] = useState()
  const [images, setImages] = useState([])
  const [thumbnails, setThumbnails] = useState([])

  const location = useLocation()
  const prevLocation = location.state && location.state.prevLocation

  useEffect(() => {
    imageDomain.fetchImages().then((i) => setImages(i))
  }, [])

  useEffect(() => {
    imageDomain.fetchThumbnails().then((i) => setThumbnails(i))
  }, [])

  return (
    <div>
      <MainNavigation />
      <Switch location={prevLocation || location}>
        <Route path="/" exact>
          <AllPicturesPage
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            thumbnails={thumbnails}
            setThumbnails={setThumbnails}
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
        <Route>
          <NotFound />
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
