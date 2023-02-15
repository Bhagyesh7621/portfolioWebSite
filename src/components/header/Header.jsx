import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/bhagyesh.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    // <div>Header</div>
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1> Bhagyesh Gohel </h1>
        {/* <ul className="dynamic__text">
          <li><samp><h1>Bhagyesh Gohel</h1></samp></li>
          <li><samp><h1>Software Developer</h1></samp></li>
          <li><samp><h1>Backend Developer</h1></samp></li>
        </ul> */}

        <h5 className="text-light"> Software Developer </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'> Scroll Down </a>
      </div>
    </header>
  )
}

export default header