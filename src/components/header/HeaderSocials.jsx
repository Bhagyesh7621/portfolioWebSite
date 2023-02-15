import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/bhagyesh-gohel-0906041a7/" target="_blank" >
            <BsLinkedin /></a>
        <a href="https://github.com/Bhagyesh7621" target="_blank" >
            <BsGithub /></a>
        <a href="https://leetcode.com/Bhagyesh_Gohel/" target="_blank" >
            <SiLeetcode /></a>

    </div>
  )
}

export default HeaderSocials