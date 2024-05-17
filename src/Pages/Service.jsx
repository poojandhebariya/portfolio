import React from 'react'
import './Service.css'
import { Services } from '../Data/Services'


const Service = () => {
  return (
    <div className='service'>
      <div className="service-title">
        My Service
      </div>
      <div className="service-box">
        {
          Services.map((item,index) => (
            <div className='service-container'>
              <div className="icon">
                {item.icon}
              </div>
              
              <div className="desc">
              <div className="title">
                {item.title}
              </div><br></br>
                {item.desc}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Service
