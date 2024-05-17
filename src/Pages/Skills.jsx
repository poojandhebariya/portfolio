import React, { useState, useEffect } from 'react';
import Loader from '../Components/Loader';

import ProgressBar from 'react-bootstrap/ProgressBar';
import './Skills.css'; 
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Skillcard } from '../Data/Skillcard';


const Skills = () => {
  // const html = 99;
  // const css = 80;
  // const js = 80;
  // const reactjs = 75;
  // const backend = 70;
  // const planning = 95;
  // const adaptability = 90;
  // const office = 80;
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
    <div className='skill'>
      {isLoading ? <Loader/> : 
      

      <div className="skill-container">
        {
          Skillcard.map((item,index) => (
            <div className="skill-box">
              <img src={item.image} alt={index} className='skill-img' />
            </div>
          ))
        }
      </div>
}
    </div>
      
  );
}

export default Skills;
