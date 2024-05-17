import React,{useState,useRef} from 'react'
import './Contact.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import insta from '../Assets/insta.png'
import linkedin from '../Assets/linkedin.png'
import github from '../Assets/github.png'
import x from '../Assets/x.png'

import emailjs from '@emailjs/browser';

const Contact = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const form = useRef();

    
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_spxk5qr",
        "template_lrtjoyb",
        form.current,
        "lZkUZmHhVItsG663d"
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };



  return (
    <>
      <div class="container">
        <div class="content">
          <div class="left-side">
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
              <FaPhone size={30}/>
              <div class="topic">Phone</div>
              <div class="text-one">+91 9023447966</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
              <MdEmail size={30}/>
              <div class="topic">Email</div>
              <div class="text-one">poojandhebariya06@gmail.com</div>
            </div>
            <div className="logos">
              <div className="logo"><img src={insta}/></div>
              <div className="logo"><img src={linkedin}/></div>
              <div className="logo"><img src={github}/></div>
              <div className="logo"><img src={x}/></div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Send us a message</div>
            <p>If you have any work from me or any types of quries related to my project, you can send me message from here. It's my pleasure to help you.</p>
          <form ref={form}  onSubmit={sendEmail}>
            <div class="input-box">
              <input type="text" name='user_name' placeholder="Enter your name"/>
            </div>
            <div class="input-box">
              <input type="text" name='user_email' placeholder="Enter your email"/>
            </div>
            <div class="input-box message-box">
              <textarea name='message' placeholder='Enter Message' className='text'></textarea>
            </div>
            <div class="button">
              <button className='contact-btn' disabled={isSubmitting} >Send Now</button>
              <div>
                {stateMessage && <div>{alert(stateMessage)}</div>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
