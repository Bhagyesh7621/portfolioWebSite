import React from 'react'
import './portfolio.css'
import chartoom from '../../assets/cr.png'
import todo from '../../assets/todo.jpeg'
import dordo from '../../assets/dordo.png'
import lms from '../../assets/lms.jpeg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work </h5>
      <h2> Projects </h2>
      <div className="container portfolio__container ">
        <article className='portfolio__item'>
          <div className="portfolio__itm-image">
            <img src={chartoom} alt="" / >
          </div>
          <h3>Chatroom - Chat-App </h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Bhagyesh7621/Chatroom" className='btn' target='
          ' >GitHub</a>
          <a href="https://mychatroom85.000webhostapp.com/login.php" className='btn btn-primary' target='_blank'>LiveDemo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__itm-image">
            <img src={todo} alt="" / >
          </div>
          <h3>Digi notes - ToDo</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Bhagyesh7621/Digi-Notes/tree/master" className='btn' target='
          '>GitHub</a>
          {/* <a href="" className='btn btn-primary' target='_blank'>LiveDemo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__itm-image">
            <img src={dordo} alt="" / >
          </div>
          <h3>Ecommerce - Medico</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Bhagyesh7621/Dordo" className='btn' target='
          ' >GitHub</a>
          {/* <a href="" className='btn btn-primary' target='_blank'>LiveDemo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__itm-image">
            <img src={lms} alt="" / >
          </div>
          <h3>Library Management System</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Bhagyesh7621/Library-Management-Systrm" className='btn' target='
          ' >GitHub</a>
          {/* <a href="" className='btn btn-primary' target='_blank'>LiveDemo</a> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio