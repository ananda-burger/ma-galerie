import ImagesList from '../components/images/ImagesList.js'

const PICTURES = [
  {
    id: 1,
    image: 'https://wallpapercave.com/wp/wp4302820.jpg',
    title: 'A nice pink background',
    likes: false
  },
  {
    id: 2,
    image: 'https://wallpaperaccess.com/full/1138983.jpg',
    title: 'A tron inspired image',
    likes: false
  },
  {
    id: 3,
    image:
      'https://uhdwallpapers.org/uploads/converted/19/08/03/huawei-mediapad-m6-stock-wallpaper-1024x1024_666874-mm-90.jpg',
    title: 'Another tron inspired image',
    likes: false
  },
  {
    id: 4,
    image: 'https://cdn.wallpapersafari.com/21/87/qjJXvV.jpg',
    title: 'A nice geometric image',
    likes: false
  }
]

const AllPicturesPage = () => {
  return <ImagesList images={PICTURES} />
}

export default AllPicturesPage
