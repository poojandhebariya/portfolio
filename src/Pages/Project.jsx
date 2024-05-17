import React, { useState, useEffect ,component} from 'react';
import Loader from '../Components/Loader';

import { react } from '../Data/ReactProjects'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Project.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { NavLink } from 'react-router-dom'

import gymVideo from '../Assets/gym.mp4'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import 'video-react/dist/video-react.css';
import { Player } from 'video-react';

import { IoMdCloseCircle } from "react-icons/io";


const Project = () => {

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
  


  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };


  const linkedin = (link) => () => {
    window.open(link, '_blank');
  };

  const github = (link) => () => {
    window.open(link, '_blank');
  };


  const style = {
    
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1100,
    height: 500,
    bgcolor: 'background.paper',
    border: '3px solid #424242',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'row',
    gap: '15px'
  };

  const [id,setId] = useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = (id) => 
  {
    setId(id);
    setOpen(true);
  }


  
  const handleClose = () => setOpen(false);


  return (
    <div>
      {isLoading ? <Loader/> : 
      <div className="reactProjects">
          <div className='react-heading'>
            <h1>ReactJs Frontend Projects</h1>
          </div>
          <div className='slider'>
            <Slider {...settings}>
              {react.map((item, index) => (
                <div key={index} className='slide-box'>
                  <div className='slide'>
                    <div><img className='project-img' src={item.image} onClick={() => handleOpen(item.id)}/></div>
                    <div><h3>{item.name}</h3></div> 
                    <div className='project-desc'><p>{item.description}</p></div> 
                    <div className='icons'>
                      <FaGithub size={25} className="github-img"  onClick={github(item.github)}/>
                      <FaLinkedin size={25} className='linkedin-img'  onClick={linkedin(item.linkedin)}/>
                    </div>
                    
                  </div>
                </div>
              ))}
            </Slider>
          </div>

    

      </div>
      }
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="close" onClick={handleClose}>
              <IoMdCloseCircle size={30} color='red' />
        </div>
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {
                id?
              <h3>{react[id-1].name}</h3> :
              <></>
              }
            </Typography>
            <Typography id="modal-modal-video" sx={{ mt: 2 }}>
              <Player>
                {
                  id?
                <source src={react[id-1].video} />:<></>
                }
              </Player>
            </Typography>
            <div className='tech-stack'>
              <h4>Tech Stack :</h4>
              <div>
                {react[id - 1]?.s1 && <img className='tech-logo' alt='s1' src={react[id - 1].s1} />}
                {react[id - 1]?.s2 && <img className='tech-logo' alt='s2' src={react[id - 1].s2} />}
              </div>
            </div>

          </div>
          <div className='modal-modal-details'>
            {
              id?
            (react[id-1].details):<></>
            }
          </div>
        </Box>
      </Modal>
    </div>

    </div>
  )
}

export default Project
