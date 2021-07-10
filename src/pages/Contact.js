import classes from './Contact.module.css'
import LinkedIn from '../components/icons/LinkedIn.js'
import Facebook from '../components/icons/Facebook.js'
import Instagram from '../components/icons/Instagram.js'

const ContactPage = () => {
  return (
    <div>
      <div>
        <h2 className={classes.call}>Get in touch to know more about me</h2>
        <ul className={classes.list}>
          <li className={classes.item}>
            <Instagram />
            <a href="https://www.instagram.com/" className={classes.black}>
              Instagram
            </a>
          </li>
          <li className={classes.item}>
            <LinkedIn />
            <a href="https://www.linkedin.com/" className={classes.black}>
              LinkedIn
            </a>
          </li>
          <li className={classes.item}>
            <Facebook />
            <a href="https://www.facebook.com/" className={classes.black}>
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactPage
