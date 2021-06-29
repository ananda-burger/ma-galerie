// import Layout from './components/layout/Layout.js'
// import Header from './components/Header.js'
import MainNavigation from './components/layout/MainNavigation.js'
import {Route} from 'react-router-dom'

import Intro from './components/layout/Intro.s'
import AllPicturesPage from './pages/AllPictures.js'
import ContactPage from './pages/Contact.js'
import FavoritesPage from './pages/Favorites.js'
import NewPicturePage from './pages/NewPicture.js'

const App = () => {
  return (
    <div>
      <Intro/>
      <MainNavigation />
      <Route path='/' exact>
        <AllPicturesPage />
      </Route>
      <Route path='/favorites'>
        <FavoritesPage />
      </Route>
      <Route path='/contact'>
        <ContactPage />
      </Route>
      <Route path='/new-picture'>
        <NewPicturePage />
      </Route>
    </div>
  )
}

export default App;
