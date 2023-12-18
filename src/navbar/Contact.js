import React from 'react'
import './Contact.css'
import { CgMail } from "react-icons/cg";
import { MdWifiCalling } from "react-icons/md";

export default function Contact() {
  return (
    <div className='contactdiv'>
        <h2>Contact</h2>
          <li>Gmail &nbsp; : bhargavi.kanugula333@gmail.com &nbsp; <CgMail className='icon' /></li>
          <li>Mobile Number &nbsp;: +91 9110567413&nbsp; <MdWifiCalling className='icon'/> </li>
    </div>
  )
}
