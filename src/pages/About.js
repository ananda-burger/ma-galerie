import classes from './About.module.css'

const AboutPage = () => {
  return (
    <div className={classes.flex}>
      <div className={classes.info}>
        <p className={classes.title}>A little bit about me</p>
        <p className={classes.text}>
          My name is <b>Ananda Burger</b> and I am a software developer who
          loves to draw! I make traditional art as well as digital art and focus
          on lanscape and figure drawing. Since young I have loved animes and
          japanese art, it definetly has modelled my art style.
        </p>
        <p className={classes.text}>
          I sell my art and make custom illustrations of various matters and if
          you want to talk about a custom order or discuss any idea you may have
          it will be super awesome talking to you!
        </p>
      </div>
      <img
        src="https://live.staticflickr.com/65535/51315952961_f63a78065e_k.jpg"
        alt="Self Portrait"
        className={classes.portrait}
      />
    </div>
  )
}

export default AboutPage
