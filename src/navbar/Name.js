import React from 'react'
import './Name.css'
import { FaDownload } from "react-icons/fa";

export default function Name() {
    const handleDownloadResume = () => {
        const pdfUrl = 'https://raw.githubusercontent.com/kbhargavi333/bhargavi/main/KanugulaBhargaviRes.pdf';
    
        const link = document.createElement('a');
    
        link.href = pdfUrl;
    
        link.download = 'Bhargavi_Kanugula_Resume.pdf';
    
        document.body.appendChild(link);
    
        link.click();
    
        document.body.removeChild(link);
      };
  return (
    <div className='name'>
      <p className='namee'>Hello!,</p>
      <p className='namee'>I'm Bhargavi Kanugula</p>
      <p className='namee'>Student of Velagapudi Ramakrishna<br/>Siddhartha Engineering College,</p>
      <p className='namee'>B.Tech, Information Technology</p>
      <p className='namee'>Graduation : 2024 , CGPA : 9.30</p>
      <div className="titlecontainer">
              <button className="download" onClick={handleDownloadResume}>
                My Resume &nbsp;
                <FaDownload   className='iconbutton'/>
              </button>
       </div>
    </div>
  )
}
