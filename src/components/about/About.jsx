import React from 'react'
import './About.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'> 
    <h5> Get To Know </h5>
    <h2> About Me </h2>
    <div className='container about__container'>
      <div className='about__me' >
        <img src={ME} alt="About Image" />
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward class="about__icon" />
            <h5> Experience-Internship </h5>
            <small>3+ year experience</small>
          </article>

          {/* <article className='about__card'>
            <FaAward class="about__icon" />
            <h5> Experience-Internship </h5>
          </article> */}

          <article className='about__card'>
            <AiFillFolderOpen class="about__icon" />
            <h5> 10+ completed </h5>
          </article>
        </div>
        <p>
        A Problem Solving student with a keen interest in the field of Engineering. I am seeking an internship to gain experience and develop the skills required to complete my career. An enthusiastic learner with a can-do attitude who wants to excel in his career. Able to think through a problem coupled with the confidence to make ideas heard.
I have a deep interest in development. I know PHP, python-Django, REST API, MySQL, MongoDB, Java, JSP, swing
        </p>
        <a href="#contact" className='btn btn-primary' >Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About