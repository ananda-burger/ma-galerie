import Select from 'react-select'

import ImageModal from '../components/modal/ImageModal.js'
import FullHeart from '../components/icons/FullHeart.js'
import HollowHeart from '../components/icons/HollowHeart.js'
import Expand from '../components/icons/Expand.js'
import classes from './AllPictures.module.css'
import * as imageDomain from '../domain/image.js'

const AllPicturesPage = (props) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'hotpink' : 'black'
      // backgroundColor: state.isSelected ? 'black' : 'white'
    }),
    control: (provided, _state) => ({
      ...provided,
      border: 'none',
      // none of react-select's styles are passed to <Control />
      backgroundColor: 'black'
    }),
    singleValue: (provided, _state) => ({
      ...provided,
      color: 'white'
      // const opacity = state.isDisabled ? 0.5 : 1
      // const transition = 'opacity 300ms'

      // return { ...provided, opacity, transition }
    })
  }

  const filteredImages = props.images
    .filter(imageDomain.likeFilter(props.selectedFilter))
    .filter(
      imageDomain.boardFilter(props.selectedBoardFilter.map((b) => b.value))
    )

  const toggleLike = (id) => {
    props.setImages(imageDomain.toggleLike(props.images, id))
  }

  const expandHandler = (id) => {
    props.setImageIsOpen(id)
  }

  const selectHandler = (option) => {
    props.setSelectedFilter(option.value)
  }

  const boardHandler = (options) => {
    props.setSelectedBoardFilter(options)
  }
  console.log('rendering allpictures')
  return (
    <div>
      <ul className={classes.cols}>
        {filteredImages.map((img) => {
          return (
            <li key={img.id} className={classes.item}>
              <button
                className={classes.expand}
                onClick={() => expandHandler(img.id)}
              >
                <Expand className="icon-medium" />
              </button>
              <div className={classes.imghoverzoom}>
                <img
                  onClick={() => expandHandler(img.id)}
                  src={img.image}
                  alt={img.title}
                  className={classes.image}
                />
              </div>
              <div className={classes.info}>
                <div className={classes.imgtitle}>{img.title}</div>
                <button
                  onClick={() => toggleLike(img.id)}
                  className={classes.likes}
                >
                  {img.likes ? (
                    <FullHeart className="icon-small" />
                  ) : (
                    <HollowHeart className="icon-small" />
                  )}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
      {props.imageIsOpen && (
        <ImageModal
          setImageIsOpen={props.setImageIsOpen}
          images={props.images}
          imageId={props.imageIsOpen}
        />
      )}
      <div className={classes.filters}>
        <Select
          styles={customStyles}
          className={classes.select}
          placeholder="Filter by..."
          isSearchable={false}
          defaultValue={props.selectedFilter}
          options={[
            { value: 'all', label: 'All' },
            { value: 'liked', label: 'Liked' },
            { value: 'not-liked', label: 'Not liked' }
          ]}
          theme={(theme) => ({
            ...theme,
            borderRadius: '10px 0 0 10px',
            colors: {
              ...theme.colors,
              primary25: 'hotpink',
              primary: 'gray'
            }
          })}
          menuPlacement="top"
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
          theme={(theme) => ({
            ...theme,
            borderRadius: '0 10px 10px 0',
            backgroundColor: 'black',
            border: 'none',
            colors: {
              ...theme.colors,
              primary25: 'hotpink',
              primary: 'gray'
            }
          })}
          menuPlacement="top"
          onChange={boardHandler}
        />
      </div>
    </div>
  )
}

export default AllPicturesPage
