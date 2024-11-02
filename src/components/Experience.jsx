import React from 'react'
import experienceData from "../ExperienceData";
const Experience = () => {
  return (
    <section className='h-[50vh] overflow-scroll pt-5 sm:overflow-visible'>
    <h2 className='text-3xl pb-8 text-white'>Experience</h2>
    <div>
      {experienceData.map((experience) => (
        <div className='text-white' key={experience.id} style={{ marginBottom: '20px' }}>
          <h3>{experience.title}</h3>
          <p><strong>{experience.company}</strong> | {experience.duration}</p>
          <ul>
            {experience.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p><strong>Technologies:</strong> {experience.technologies.join(', ')}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Experience