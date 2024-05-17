import React, { useState, useEffect } from 'react';
import Loader from '../Components/Loader';

import Typewriter from "typewriter-effect";
import './Main.css'
import photo_bg from '../Assets/photo-bg.png'
import photo from '../Assets/photo.png'

import samplePDF1 from '../Assets/poojan_resume_CU.pdf'

const Main = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('../Data/Skillcard.jsx')
      .then(data => {
        setData(data);
      setIsLoading(false);

      });
  }, []);


  return (
    <div className='Main'>
      

      <div className="left">
        <div className="first">
          <p>Hello, it's Me</p>
        </div>

        <div className="second">
          <p>Poojan Dhebariya</p>
        </div>

        <div className="third">
          <p>And i'm a </p>
          <Typewriter loop={10} style={{ fontSize: '3rem' }} 
                  onInit={(typewriter) => {
                      typewriter
                          
                          .typeString('<span>Frontend Developer</span>')
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString('<span>Backend Developer</span>')
                          .start();
                  }}
              />
        </div>

        <button className='cv-btn'> <a href={samplePDF1} target="_blank">Resume</a></button>

      </div>
      {isLoading ? <Loader/> : 
      <div className="right">
          <img className='photo-bg' src={photo_bg} />
            <img className='photo' src={photo} />
          <div className="photo-div"></div>
      </div>
      }
    </div>
  )
}

export default Main
