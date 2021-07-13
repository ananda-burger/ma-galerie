import Select from 'react-select'

import ImageModal from '../components/modal/ImageModal.js'
import FullHeart from '../components/icons/FullHeart.js'
import HollowHeart from '../components/icons/HollowHeart.js'
import Expand from '../components/icons/Expand.js'
import classes from './AllPictures.module.css'
import * as imageDomain from '../domain/image.js'

const AllPicturesPage = (props) => {
  const customStyles = {
    container: (provided, _state) => ({
      ...provided,
      cursor: 'pointer'
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'hotpink' : 'black'
    }),
    menu: (provided, _state) => ({
      ...provided,
      borderRadius: 'none'
    }),
    clearIndicator: (provided, _state) => ({
      ...provided,
      color: 'white'
    }),
    indicatorSeparator: (provided, _state) => ({
      ...provided,
      backgroundColor: 'white'
    }),
    multiValue: (provided, _state) => ({
      ...provided,
      backgroundColor: 'black'
    }),
    multiValueLabel: (provided, _state) => ({
      ...provided,
      color: 'white'
    }),
    multiValueRemove: (provided, _state) => ({
      ...provided,
      color: 'hotpink',
      backgroundColor: 'black'
    }),
    dropdownIndicator: (provided, _state) => ({
      ...provided,
      color: 'white'
    }),
    control: (provided, _state) => ({
      ...provided,
      // border: '3px solid black',
      border: 'none',
      backgroundColor: 'black',
      cursor: 'pointer'
    }),
    singleValue: (provided, _state) => ({
      ...provided,
      color: 'white'
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
          placeholder="Boards"
          isMulti
          options={[
            { value: 'pink', label: 'Pink' },
            { value: 'blue', label: 'Blue' },
            { value: 'black', label: 'Black' }
          ]}
          theme={(theme) => ({
            ...theme,
            borderRadius: '10px 0 0 10px',
            backgroundColor: 'black',
            border: 'none',
            colors: {
              ...theme.colors,
              primary25: 'hotpink',
              primary: 'black'
            }
          })}
          menuPlacement="top"
          onChange={boardHandler}
        />
        <Select
          styles={customStyles}
          className={classes.multiselect}
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
            border: 'none',
            borderRadius: '0 10px 10px 0',
            colors: {
              ...theme.colors,
              primary25: 'hotpink',
              primary: 'black'
            }
          })}
          menuPlacement="top"
          onChange={selectHandler}
        />
      </div>
    </div>
  )
}

export default AllPicturesPage
