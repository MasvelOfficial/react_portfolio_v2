import { motion } from 'framer-motion'

const Home = () => {
  return(
    <motion.div
      className="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: .5, duration: .25 }}
    >
      <div className="text-wrapper mb-30">
        <h1>Hello!</h1>
      </div>
      <div className="text-wrapper primary-color mb-20">
        <h5><i>Hello there!</i></h5>
      </div>
      <div className="text-wrapper">
        <p className="mb-15">My name is <strong>Kopan Alexander</strong> and I am a front-end developer. I am 29 years old and have been doing commercial web development for <strong>over 5 years</strong>. I live in Kyiv, Ukraine. I can create beautiful, user-friendly and functional websites and applications for various purposes. At the moment I work in the company, but I am ready to consider interesting offers, ready for new challenges in web development. If you have any questions or projects that you would like to discuss, please contact me via the <a href="mailto:masvel17@gmail.com">email</a>.</p>
        <p className="mb-15">Click on the menu to find out more information about me.</p>
        <p>This site is made as an example in order to roughly show your level and development skills. It didn’t take much time to develop; everything was done as simply as possible, slowly, in free time.</p>
      </div>
    </motion.div>
  )
}

export default Home