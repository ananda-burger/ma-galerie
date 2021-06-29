import ImagesList from '../components/images/ImagesList.js'

const PICTURES = [
  {
    id: 1,
    image: 'http://ae01.alicdn.com/kf/H2e9cbf4dbdb44e7abbb20fd3d1bf6053m.jpg',
    title: 'A nice sofa'
  },
  {
    id: 2,
    image:
      'https://previews.123rf.com/images/olechkaolia/olechkaolia2002/olechkaolia200200042/140103429-simple-black-and-white-minimalist-pattern-design-abstract-square-background-with-different-geometric.jpg',
    title: 'Quadrados legais'
  }
]

const AllPicturesPage = () => {
  return <ImagesList images={PICTURES} />
}

export default AllPicturesPage
