import gym from '../Assets/gym.png'
import todo from '../Assets/todo.png'
import restaurant from '../Assets/restaurant.png'
import dice from '../Assets/dice.png'
import gymVideo from '../Assets/gym.mp4'
import diceVideo from '../Assets/dice.mp4'
import restaurantVideo from '../Assets/restaurant.mp4'
import react_icon from '../Assets/React.png'
import map from '../Assets/map.png'
import emailjs from '../Assets/emailjs.png'


export const react = [
    {
        id:"1",
        image:gym,
        name:"Gym Website",
        description:"Dive into the world of fitness with Sport Club, an animated frontend website built with ReactJS. Discover a plethora of training programs, explore our subscription models, and seamlessly join our community with just a few clicks.",
        linkedin:"https://www.linkedin.com/posts/poojan-dhebariya-8b862123b_reactjs-frontenddevelopment-fitnesswebsite-activity-7184950626177466368-ZOnm?utm_source=share&utm_medium=member_desktop",
        github:"https://github.com/poojandhebariya/Gym_website",
        video:gymVideo,
        details: (
            <div>
                Excited to present my latest creation, the Sport Club website, a dynamic hub for fitness enthusiasts! <br/>
                🌟🏋️‍♂️ Overview:<br/>
                Dive into the world of fitness with Sport Club, an animated frontend website built with ReactJS. Discover a plethora of training programs, explore our subscription models, and seamlessly join our community with just a few clicks.<br/>
                🌟 Key Features:<br/>
                Training Programs: Explore a diverse range of training programs tailored to suit various fitness goals.<br/>
                Subscription Model: Choose from flexible subscription plans designed to meet individual needs and preferences.<br/>
                Join Us: Easily become a part of our community by providing your email, facilitated by the seamless integration of the emailJs library.
            </div>
        ),
        s1:react_icon,
        s2:emailjs,
    },
    {
        id:"2",
        image:dice,
        name:"Dice Game",
        description:"In this interactive game, users engage by guessing a number before rolling the dice. If their guess matches the rolled number, they earn points; otherwise, points are deducted.",
        linkedin:"https://www.linkedin.com/posts/poojan-dhebariya-8b862123b_reactjs-gamedevelopment-frontenddevelopment-activity-7176911414664568833-XUfd?utm_source=share&utm_medium=member_desktop",
        github:"https://github.com/poojandhebariya/dice_game",
        video:diceVideo,
        details:(
            <div>
                🔍 Overview:<br/>
                In this interactive game, users engage by guessing a number before rolling the dice. If their guess matches the rolled number, they earn points; otherwise, points are deducted.<br/>
                💡 Key Features:<br/>
                Guess & Roll: Users make a guess, then roll the dice to reveal the outcome.<br/>
                Scoring System: Earn points for correct guesses, face deductions for incorrect ones.<br/>
                User Interaction: Simple and intuitive interface for seamless gaming experience.<br/>
            </div>
        ),
        s1:react_icon,
        
    },
    {
        id:"3",
        image:restaurant,
        name:"Restaurant Website",
        description:"Step into the world of gastronomy with the Green Leaf Restaurant website, where culinary delights meet elegant design. 🌟 Explore our menu offerings, read customer reviews, and find your way with our interactive map.",
        linkedin:"https://www.linkedin.com/posts/poojan-dhebariya-8b862123b_webdevelopment-restaurantwebsite-htmlcss-activity-7180903871353896963-MvTK?utm_source=share&utm_medium=member_desktop",
        github:"https://github.com/poojandhebariya/restaurant",
        video:restaurantVideo,
        details:(
            <div>
                🍴 Overview:<br/>
                Step into the world of gastronomy with the Green Leaf Restaurant website, where culinary delights meet elegant design. <br/>🌟 Explore our menu offerings, read customer reviews, and find your way with our interactive map.<br/>
                🍽️ Key Features:<br/>
                Menu Showcase: Delight your senses with our array of delectable dishes, beautifully presented.<br/>
                Customer Reviews: Hear what our patrons have to say about their dining experiences, fostering trust and engagement.<br/>
                Interactive Map: Seamlessly locate us and plan your visit with our integrated map feature.
            </div>
        ),
        s1:react_icon,
        s2:map,
    },
    {
        id:"4",
        image:todo,
        name:"ToDO Website",
        description:"To-Do application using ReactJS that allows users to add, view, and delete tasks.",
        github:"https://github.com/poojandhebariya/Todo",
        s1:react_icon,
    }
    
];