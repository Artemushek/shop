import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        AM SHOP | All rights reserved. 2023
      </p>
      <p className="icons">
        <a href="https://instagram.com/artem_melnyk_com" target="_blank"><AiFillInstagram /></a>
        <a href="https://twitter.com/MelnykArtem" target="_blank"><AiOutlineTwitter /></a>
        <a href="https://facebook.com/artemushek" target="_blank"><AiFillFacebook /></a>
      </p>
    </div>
  )
}

export default Footer