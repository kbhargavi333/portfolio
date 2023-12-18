import React from 'react'
import './Projects.css'
export default function Projects() {
  return (
    <div>
      <h2>projects</h2>
      <div className="pcard">
        <div className="pcontainer">
          <h3>Brain Tumor Segmentation</h3>
          <p>Developed a deep learning-powered medical imaging system using the BRATS 2020 dataset for automated brain tumor
          segmentation. Implemented data preprocessing, CNN and U-Net 3D models ,incorporating evaluation techniques
          including precision ,F1-score , Dice Coefficient ,and Mean IoU ,contributing to advanced medical imaging analysis.</p>
          <a href="https://github.com/kbhargavi333/braintumorseg/blob/main/brats2020vr%20(6).ipynb " target='_blank'><button className='websitebutton'>Brain Tumor Segmentation</button></a>
        </div>
        <div className="pcontainer">
          <h3>Speech Emotion Recognition with librosa</h3>
          <p>Implemented a Speech Emotion Recognition system using the RAVDESS dataset , featuring Python for feature ex- traction and an 
            Multi Layer Perceptron Classifier. Attained accurate emotion classification 
            ’calm’ , ’happy’ , ’fearful’ , ’disgust’ with notable performance.</p>
          <a href="https://github.com/kbhargavi333/speechemotion " target='_blank'><button className='websitebutton'>Speech Emotion Recognition</button></a>
        </div>
        <div className="pcontainer">
          <h3>TurboTyper Pro</h3>
          <p>The Speed Typer Game is an engaging and thrilling word typing game designed to test and enhance your typing skills. In this fast-paced challenge,
             players are presented with a series of words that they must type accurately within a specified time limit. The game tracks the number of
              correct words typed, adding an element of competition and self-improvement..</p>
          <a href="https://typing-game-omega-nine.vercel.app/" target='_blank'><button className='websitebutton'>Open Website</button></a>
          <a href="https://github.com/kbhargavi333/typing " target='_blank'><button className='websitebutton'>Github Link</button></a>
        </div>
        <div className="pcontainer">
          <h3>TaskTracker Using Mern</h3>
          <p>Developed a Task Management Application using React, featuring components for task listing, adding, and editing.
             Implemented React Router for seamless navigation, utilized local storage for persistent data, and ensured a responsive design. 
             Additionally, incorporated testing with Jest and optional features like task sorting and pagination for an enriched user experience.</p>
          <a href="https://aulacube-five.vercel.app/" target='_blank'><button className='websitebutton'>Open Website</button></a>
          <a href="https://github.com/kbhargavi333/aulacube" target='_blank'><button className='websitebutton'>Github Link</button></a>       
          </div>
          <div className="pcontainer">
          <h3>Cinematic Watch Wonders</h3>
          <p>Designed and developed a dynamic Movie App from scratch, offering users an immersive platform to explore and discover movies. 
            Implemented a search feature for efficient navigation, providing detailed movie information and ratings. The user-friendly interface 
            and intuitive design contribute to an enhanced movie browsing experience.</p>
          <a href="https://movie-app-gamma-sage.vercel.app/" target='_blank'><button className='websitebutton'>Open Website</button></a>
          <a href="https://github.com/kbhargavi333/movie-app" target='_blank'><button className='websitebutton'>Github Link</button></a>       
          </div>
          <div className="pcontainer">
          <h3>Menu Vista</h3>
          <p>Developed an interactive Menu Card application that showcases a diverse range of dishes with detailed information,
             including dish name, add-ons, and pricing. Implemented user-friendly filters allowing easy categorization by meal types such as 
             breakfast, lunch, shakes, and dinner, enhancing the user's browsing experience for a seamless and efficient menu exploration.</p>
          <a href="https://menucard-opal.vercel.app/" target='_blank'><button className='websitebutton'>Open Website</button></a>
          <a href="https://github.com/kbhargavi333/menucard" target='_blank'><button className='websitebutton'>Github Link</button></a>       
          </div>
          <div className="pcontainer">
          <h3>Digitalized Bus Pass Generation</h3>
          <p>The Online Bus Pass Generation Project is a web-based platform enabling users to apply for bus pass and renew bus passe online.
            It utilizes HTML, CSS, and JavaScript for the frontend and PHP with MySQL for backend data retrieval.<br/><br/>
             Technologies used : PHP, MySQL, Javascript, HTML, CSS.</p>
          <a href="https://github.com/kbhargavi333/buspassgeneration" target='_blank'><button className='websitebutton'>Github Link</button></a>
          </div>
          <div className="pcontainer">
          <h3>Job Portal Application</h3>
          <p>The Job Portal Application is a dynamic and feature-rich platform designed to streamline the job-seeking process for users and empower 
            employers with efficient recruitment tools. Leveraging cutting-edge technologies, the application offers a user-friendly interface,
             allowing job seekers to explore diverse employment opportunities and apply seamlessly.</p>
          <a href="https://isproject-xlms.onrender.com/" target='_blank'><button className='websitebutton'>Open Website</button></a><br/>
          <a href="https://github.com/kbhargavi333/ISfrontend" target='_blank'><button className='websitebutton'>Frontend</button></a>   
          <a href="https://github.com/kbhargavi333/ISbackend" target='_blank'><button className='websitebutton'>Backend</button></a>       
    
          </div> 
      </div>
    </div>
  )
}
