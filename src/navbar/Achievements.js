import React from 'react'
import './Achievements.css'
export default function Achievements() {
  return (
    <div>
      <h2>Internships</h2>
      <div className='contactdiv'>
        <div className='intern1'>
            <h3>Codegnan IT solutions,Vijayawada : Mern stack developer may 2023 - July 2023</h3>
            <p className='intern'>Developed a React-based interactive frontend to store memories and images  
            for a full stack application deployed on Amazon Web Services. Implemented a 
            user-friendly user interface, a MongoDB backend for data storage, and Cloudinary 
            for efficient image management, creating a seamless experience for preserving personal memories. </p>
            <a href="https://github.com/kbhargavi333/galleryfrontend" target='_blank'><button className='websitebutton'>Frontend</button></a>
            <a href="https://github.com/kbhargavi333/gallerybackend" target='_blank'><button className='websitebutton'>Backend</button></a>
            <p><h3>Technologies used : MangoDB ,ReactJS ,ExpressJS ,NodeJS .</h3></p><br></br>
        </div>
        <div className='intern1'>
          <h3>CyberSIN: Web application Developer	sep 2022 - oct 2022</h3>
          <p className='intern'>Implemented real-time Google Maps feature using Firebase Database, showcasing users’
          current location. Con- tributed to responsive and interactive application, enhancing location tracking and 
          display functionality for users and interactive Netflix Web page. </p>
          Map Location Tracker : <a href="https://map-location-eight.vercel.app/" target='_blank'><button className='websitebutton'>Open Website</button></a>
          <a href="https://github.com/kbhargavi333/map-location" target='_blank'><button className='websitebutton'>Github link</button></a><br/><br/>
          Netflix Interface Page : <a href="https://netflix-black-seven.vercel.app/" target='_blank'><button className='websitebutton'>Open Website</button></a>
          <a href="https://github.com/kbhargavi333/netflix" target='_blank'><button className='websitebutton'>Github link</button></a>
          <p><h3>Technologies used : Firebase ,Javascript ,HTML ,CSS .</h3></p><br></br>
        </div>
        <h2>Technical Achievements and Non-Technical Achievements</h2>
        <div className='intern1'>
          <li>Solved 221 problems in leetcode platform.</li>
          <li>Branch 1st during my 3rd semester with 9.62 SGPA.</li>
          <li>1st prize in inter-college throw ball competitions.</li>
          <li>1st prize in Yumi group dance at Neonite in VRSEC.</li>
          <li>2nd prize in Quiz competition at Samiksha in Andhra Loyola College.</li>
        </div>
    </div>
    </div>
  )
}
