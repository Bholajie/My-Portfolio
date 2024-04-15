import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/victor-johnson-69679a225/" target='_blank'><AiFillLinkedin /> </a>
      <a href="https://github.com/Bholaji/" target='_blank'><FaGithub /></a>
      {/* <a href="https://dribble.com" target='_blank'><FiDribbble /> </a> */}
    </div>
  )
}

export default HeaderSocials