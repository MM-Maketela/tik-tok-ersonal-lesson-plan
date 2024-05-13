import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import classes from "./Footer.module.css"

export const Footer = () => {
  const size = 25
  return (
    <div className={classes.footer}>
      <ul className={classes.socialMediaIcons}>
        <li  className={classes.socialMediaIcon}>
          <FaWhatsapp  size={size}/>
              </li>
        
        <li  className={classes.socialMediaIcon}>
        <TiSocialTwitterCircular  size={size}/>

        </li>
        <li  className={classes.socialMediaIcon}>
        <CiLinkedin  size={size}/>

        </li>
        <li  className={classes.socialMediaIcon}>
        <CiFacebook  size={size}/>

        </li>
        
      </ul>

      <p style={{margin:"0px"}}>All rights reserved.</p>
    </div>
  )
}
