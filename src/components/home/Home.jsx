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
        <p>My name is <strong>Kopan Alexander</strong> and I am a front-end developer. I am 29 years old and have been doing commercial web development for <strong>over 5 years</strong>. I live in Kyiv, Ukraine. I can create beautiful, user-friendly and functional websites and applications for various purposes. At the moment I work in the company, but I am ready to consider interesting offers, ready for new challenges in web development. If you have any questions or projects that you would like to discuss, please contact me via the <a href="/">contact form</a> or <a href="mailto:masvel17@gmail.com">email</a>.</p>
      </div>
      {/* <hr className="mb-50" />
      <div className="text-wrapper mb-30">
        <h2>What am I looking for?</h2>
      </div>
      <div className="text-wrapper">
        <p>I am looking for an interesting company for cooperation and development of both myself and the company. I am interested in both React and JavaScript projects, but I would like to delve more into React development, because I think this is now a more demanding and more promising direction. Interested in both project work and full-time work.</p>
      </div> */}
      <br />
      <div className="text-wrapper">
        <p className='mb-15'>Тыкай в меню, чтобы узнать больше иеформации обо мне</p>
        <p>Этот сайт сделан как пример, для того, чтобы примерно показать свой уровень и навыки разработки. На разработку не затрачивалось много времени, делалось все максимально просто, не спеша, в свободное время.</p>
      </div>
    </motion.div>
  )
}

export default Home