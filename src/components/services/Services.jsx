import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5> Industry Experience </h5>
      <h2> Internship </h2>
      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
          <h3> Maxgen Technologies Pvt. Ltd. </h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <b> Backend Web Development Intern </b> </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
              <p> Task: Build Backend of Web Application</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
              <p>Technology <b>Python-Django</b></p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
              <p>Location: Ahmedabad</p>
            </li><li>
            <BiCheck className='service__list-icon'/>
              <p> Duration: 2 month(June-2022 to July-2022 Summer Internship) </p>
            </li>
            <a href="https://drive.google.com/drive/folders/1rTlxILyobS7VptwsV3kVMreww4UaW-YS?usp=sharing"  target='_blank'> Certificate </a>
          </ul>

        </article>
        <article className='service'>
          <div className='service__head'>
          <h3> Necesario Innovation Pvt. Ltd </h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <b> Software Development Intern </b> </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
              <p>  Work on product <b> Snapper </b></p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
              <p> Snapper-wireless photobooth camera for EVERYONE</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
              <p> Technology: <b> Python </b> (backend)</p>
            </li><li>
            <BiCheck className='service__list-icon'/>
              <p>Duration: 6 Month(Jan-2023 to May-2023)</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services