import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> Bhagyesh Gohel </a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Internship</a></li>
        <li><a href="#portfolio">Project</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__social">
        <a href="https://www.linkedin.com/in/bhagyesh-gohel-0906041a7/" target='_blank'> <BsLinkedin/> </a>
        <a href="https://www.instagram.com/bhagyesh_gohel_/" target='_blank'> <BsInstagram/> </a>
        <a href="https://twitter.com/bgohel7" target='_blank'> <BsTwitter/> </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Bhagyesh Gohel. All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer