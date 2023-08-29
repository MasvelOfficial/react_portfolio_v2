import { motion } from 'framer-motion'
import './portfolio.scss'
import { SlLink } from 'react-icons/sl'
import tmpl_1 from '../../assets/template_1.jpg'
import tmpl_2 from '../../assets/template_2.jpg'

const Portfolio = () => {
  const templates = [
    {link: 'https://masvelofficial.github.io/template_1', img: tmpl_1},
    {link: 'https://masvelofficial.github.io/template_2', img: tmpl_2}
  ]

  return(
    <motion.div
      className="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: .5, duration: .25 }}
    >
      <div className="text-wrapper mb-30">
        <h1>Portfolio</h1>
      </div>
      <div className="text-wrapper primary-color mb-20">
        <h5><i>Examples of my work</i></h5>
      </div>
      <div className="text-wrapper mb-50">
        <p>I work for a company that doesn't allow direct showing of our projects, so I just pulled out a few of my more or less recent work and tweaked it a bit to give a general idea of ​​what I'm working with. Large projects are soaked in the backend and cannot be simply taken out to show, so the elementary is shown here. In addition, there are projects on the reactor, but they are not developed and do not carry anything super-technological. There are also large projects made in php or twig, but these are similar sites with examples, there are just more pages.</p>
      </div>
      <div className="websites d-grid two-columns">
        {templates.map(({link, img}) =>
          <div className="item" key={img}>
            <a href={link} target="_blank" rel="noreferrer">
              <div className="img-wrapper">
                <img src={img} alt="" />
              </div>
              <div className="icon-wrapper">
                <SlLink />
              </div>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Portfolio