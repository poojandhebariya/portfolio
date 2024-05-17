import { BsAmd } from "react-icons/bs";
import { MdOutlineWebhook } from "react-icons/md";
import backend from '../Assets/backend.png'
import { FaCode } from "react-icons/fa";


export const Services = [
    {
        id: 1,
        title:"Web Designer",
        icon:<BsAmd color="blue" size={30}/>,
        desc:"As a seasoned web designer, I bring creativity and innovation to every project. With a keen eye for detail and a passion for user-centric design, I specialize in crafting visually stunning and intuitive websites that captivate audiences."
    },

    {
        id: 1,
        title:"Frontend Development",
        icon:<MdOutlineWebhook color="purple" size={50}/>,
        desc:"As a frontend developer, I specialize in crafting intuitive user interfaces that seamlessly blend functionality with aesthetics. My expertise lies in HTML, CSS, and JavaScript, and proficiency in frontend frameworks like React.js. "
    },

    {
        id: 1,
        title:"Backend Development",
        icon:<FaCode  color="green" size={50}/>,
        desc:"As a backend developer, I specialize in crafting robust and scalable solutions for web applications. I design and implement efficient server-side logic, adeptly handle data management, authentication, and API development."
    }
]