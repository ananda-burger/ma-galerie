import classes from './Contact.module.css'
import LinkedIn from '../components/icons/LinkedIn.js'
import Facebook from '../components/icons/Facebook.js'
import Instagram from '../components/icons/Instagram.js'
import Email from '../components/icons/Email.js'

const ContactPage = () => {
  return (
    <div>
      <h2 className={classes.call}>Get in touch to know more about me :)</h2>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Email />
          <p className={classes.text}>aburger.ananda@gmail.com</p>
        </li>
        <li className={classes.item}>
          <Instagram />
          <a href="https://www.instagram.com/" className={classes.link}>
            Instagram
          </a>
        </li>
        <li className={classes.item}>
          <LinkedIn />
          <a href="https://www.linkedin.com/" className={classes.link}>
            LinkedIn
          </a>
        </li>
        <li className={classes.item}>
          <Facebook />
          <a href="https://www.facebook.com/" className={classes.link}>
            Facebook
          </a>
        </li>
      </ul>
      <img
        src="https://live.staticflickr.com/65535/51315197802_831b74ee0b_c.jpg"
        alt="Self Portrait"
        className={classes.portrait}
      />
    </div>
  )
}

export default ContactPage
