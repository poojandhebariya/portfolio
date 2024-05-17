import React, { useState, useEffect } from 'react';
import Loader from '../Components/Loader';

import './About.css'
import photo from '../Assets/photo1.png'


const About = () => {
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
    <div className='about'>
      {isLoading ? <Loader/> : 
      <div className="left-about">
        <div className="about-img-bg">        </div>
        <img src={photo} />
      </div>
      }
      <div className="right-about">
        <p>
I am a skilled web designer. My passion lies in creating captivating website designs and implementing them through frontend development. I take pride in staying up-to-date with current design trends and leveraging my creativity to produce visually appealing and user-friendly websites. Throughout my career, I have developed a deep understanding of user experience (UX) and user interface (UI) principles. By putting myself in the shoes of the end-users, I strive to create intuitive and seamless browsing experiences. I believe that a well-designed website should not only look visually appealing but also provide a smooth and enjoyable interaction for visitors. When starting a new project, I thoroughly research and analyze the target audience and the client's specific requirements. This enables me to tailor my designs to meet their expectations and deliver a unique online presence that aligns with their brand identity.
        </p>
      </div>
    </div>
  )
}

export default About
