import { motion } from 'framer-motion'
import './work.scss'
import { SlGraduation, SlBriefcase, SlCalender } from 'react-icons/sl'

const Work = () => {
  const workList = [
    {icon: <SlGraduation />, profession: 'Computer engineer', place: 'College - Kyiv', years: '2010 - 2014'},
    {icon: <SlGraduation />, profession: 'Computer networks and systems', place: 'University - Kyiv', years: '2014 - 2015'},
    {icon: <SlBriefcase />, profession: 'Content-manager (html layout)', place: 'MEDIA-PRO - Kyiv', years: '2016 - 2018'},
    {icon: <SlGraduation />, profession: 'Front-end development', place: 'Courses - Kyiv', years: '2018 - 2018 (6 months)'},
    {icon: <SlBriefcase />, profession: 'Front-end developer', place: 'LP - Kyiv', years: '2018 - until today'},
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
        <h1>Qualification</h1>
      </div>
      <div className="text-wrapper primary-color mb-20">
        <h5><i>My personal journey</i></h5>
      </div>
      <div className="text-wrapper mb-50">
        <p>I have a degree in computer engineering. Began to be interested in the direction of web development since school from computer science lessons, when they taught the base on HTML. Basicly studied the direction at the university. After graduating from the university, I began to be more specifically interested in layout and web design, and began to study JS. I got a job as a content manager, where I needed knowledge of HTML layout and basic CSS for layout of emails and publishing news on a site that worked on Drupal 7. At the same time, I took courses in front-end development, while studying on YouTube. I began to practice developing one-page sites, writing elementary functions. Then I got a job in a company as a front-end developer, where I still work, where I developed my skills to a strong middle level. I do not stop there and try in every possible way to develop and learn further.</p>
      </div>
      <div className="qualification-list">
        {workList.map(({ icon, profession, place, years }) => 
          <div className="item" key={profession}>
            <div className="icon-wrapper">
              {icon}
            </div>
            <div className="text-wrapper ">
              <h4 className="mb-10">{profession}</h4>
              <p className="mb-10">{place}</p>
              <div className="d-flex align-items-center years">
                <div className="icon-wrapper">
                  <SlCalender />
                </div>
                <div className="text-wrapper">
                  <p>{years}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Work