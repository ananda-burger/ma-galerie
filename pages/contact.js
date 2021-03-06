import Image from 'next/image'

import classes from './contact.module.css'
import LinkedIn from '../components/icons/LinkedIn.js'
import Facebook from '../components/icons/Facebook.js'
import Instagram from '../components/icons/Instagram.js'
import Email from '../components/icons/Email.js'
import Layout from '../components/Layout.js'

export default function ContactPage() {
  return (
    <Layout>
      <div>
        <h2 className={classes.call}>Get in touch to know more about me :)</h2>
        <ul className={classes.list}>
          <li className={classes.item}>
            <Email />
            <p className={classes.text}>aburger.ananda@gmail.com</p>
          </li>
          <li className={classes.item}>
            <Instagram className={classes.icon} />
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className={classes.link}
            >
              Instagram
            </a>
          </li>
          <li className={classes.item}>
            <LinkedIn />
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className={classes.link}
            >
              LinkedIn
            </a>
          </li>
          <li className={classes.item}>
            <Facebook />
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className={classes.link}
            >
              Facebook
            </a>
          </li>
        </ul>
        <div className={classes.imageContainer}>
          <Image
            src="https://ik.imagekit.io/z9fjicafx6e/Pages/contact_QBRGeLwav.jpg?updatedAt=1627234946678"
            alt="Self Portrait"
            height={400}
            width={310.4}
          />
        </div>
      </div>
    </Layout>
  )
}
