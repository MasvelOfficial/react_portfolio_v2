import { motion } from 'framer-motion'

const Contacts = () => {
  return(
    <motion.div
      className="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: .5, duration: .25 }}
    >
      <div className="text-wrapper mb-30">
        <h1>Contacts</h1>
      </div>
      <div className="text-wrapper primary-color mb-20">
        <h5><i>Contact me!</i></h5>
      </div>
      <div className="text-wrapper">
        <p className="mb-15">If you are interested in me and my work experience, I will be glad to consider your vacancy for collaboration and development. Write to me by email or call the phone number listed below.</p>
        <p>Phone: <a href="tel:+380633734047">+380633734047</a></p>
        <p>Email: <a href="mailto:masvel17@gmail.com">masvel17@gmail.com</a></p>
      </div>
    </motion.div>
  )
}

export default Contacts