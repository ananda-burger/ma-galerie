import Image from 'next/image'

import classes from './about.module.css'
import Layout from '../components/Layout.js'

export default function AboutPage() {
  return (
    <Layout>
      <div className={classes.flex}>
        <div className={classes.info}>
          <p className={classes.title}>A little bit about me</p>
          <p className={classes.text}>
            My name is <b>Ananda Burger</b> and I am a software developer who
            loves to draw! I make traditional art as well as digital art and
            focus on lanscape and figure drawing. Since young I have loved
            animes and japanese art, it definetly has modelled my art style.
          </p>
          <p className={classes.text}>
            I sell my art and make custom illustrations of various matters and
            if you want to talk about a custom order or discuss any idea you may
            have it will be super awesome talking to you!
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="https://ik.imagekit.io/z9fjicafx6e/Pages/about_drhvwSzdK.jpg?updatedAt=1627234946676"
            alt="Self Portrait"
            height={400}
            width={366.8}
          />
        </div>
      </div>
    </Layout>
  )
}
