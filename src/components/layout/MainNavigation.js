import { Link } from 'react-router-dom'
import Select from 'react-select'

import classes from './MainNavigation.module.css'

const MainNavigation = (props) => {
  const selectHandler = (option) => {
    props.setSelectedFilter(option.value)
  }

  const boardHandler = (options) => {
    props.setSelectedBoardFilter(options)
  }

  const sliderHandler = (event) => {
    props.setImagesDisplayed(parseInt(event.target.value))
  }

  return (
    <header className={classes.head}>
      <div className={classes.title}>
        <Link to="/">Ma Galerie</Link>
      </div>
      <div>
        <input
          id="image-number"
          type="range"
          min="1"
          max="10"
          defaultValue="2"
          step="1"
          className={classes.slider}
          onChange={sliderHandler}
        />
        {/* <label htmlFor="image-number">Images</label> */}
      </div>
      <Select
        className={classes.select}
        placeholder="Filter by..."
        isSearchable={false}
        defaultValue={props.selectedFilter}
        options={[
          { value: 'all', label: 'All' },
          { value: 'liked', label: 'Liked' },
          { value: 'not-liked', label: 'Not liked' }
        ]}
        onChange={selectHandler}
      />
      <Select
        className={classes.multiselect}
        placeholder="Boards"
        isMulti
        options={[
          { value: 'pink', label: 'Pink' },
          { value: 'blue', label: 'Blue' },
          { value: 'black', label: 'Black' }
        ]}
        onChange={boardHandler}
      />
      {/* <Link to="/new-picture" className={classes.nav}> */}
      {/*   Add */}
      {/* </Link> */}
      {/* <Link to="/favorites" className={classes.nav}> */}
      {/*   Favs */}
      {/* </Link> */}
      {/* <Link to="/contact" className={classes.nav}> */}
      {/*   Contact */}
      {/* </Link> */}
    </header>
  )
}

export default MainNavigation
