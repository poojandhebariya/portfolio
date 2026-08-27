import gym from "../Assets/gym.png";
import todo from "../Assets/todo.png";
import restaurant from "../Assets/restaurant.png";
import dice from "../Assets/dice.png";
import gymVideo from "../Assets/gym.mp4";
import diceVideo from "../Assets/dice.mp4";
import restaurantVideo from "../Assets/restaurant.mp4";
import react_icon from "../Assets/React.png";
import map from "../Assets/map.png";
import emailjs from "../Assets/emailjs.png";
import tailwind from "../Assets/tailwind.webp";
import rollup from "../Assets/rollup.png";
import springBoot from "../Assets/spring_boot.png";
import postgre from "../Assets/postgresql.webp";
import grokAi from "../Assets/grok-ai.jpg";

export const react = [
  {
    id: "1",
    name: "React Snackify",
    description:
      "A lightweight and customizable React library for displaying snackbar notifications with minimal setup. It supports multiple animations, visual themes, flexible positions, icons, actions, async updates, progress bars, and priority handling.",
    github: "https://www.npmjs.com/package/react-snackify",
    linkedin: "https://lnkd.in/d2CBMiNf",
    video: null,
    details: (
      <div>
        React Snackify is a lightweight React notification library designed to
        make snackbar notifications simple and highly customizable.
        <br />
        <br />
        Key Features:
        <br />
        Easy setup with SnackbarProvider.
        <br />
        Multiple animation types and style variants.
        <br />
        Flexible snackbar positioning.
        <br />
        Six visual themes including neon-glow, holographic, and glassmorphism.
        <br />
        Async updates, auto morphing, progress bars, and priority handling.
        <br />
        Lightweight and dependency-free.
      </div>
    ),
    s1: react_icon,
    s2: tailwind,
    s3: rollup,
  },
  {
    id: "2",
    name: "TreVault",
    description:
      "A travel memory, destination discovery, and AI trip planning platform that helps travellers preserve their journeys, discover new places, and create personalized travel experiences.",
    github: "https://trevault.in",
    linkedin: "https://trevault.in",
    video: null,
    details: (
      <div>
        TreVault is a travel platform built around memories, destination
        discovery, and AI-powered trip planning.
        <br />
        <br />
        Key Features:
        <br />
        Create shareable travel vaults.
        <br />
        Save memories with photos, places, moods, and stories.
        <br />
        Explore destinations and nearby places.
        <br />
        Discover public travel experiences.
        <br />
        Build a personal travel profile.
        <br />
        Save bucket-list destinations.
        <br />
        Generate AI-powered trip itineraries.
      </div>
    ),
    s1: react_icon,
    s2: tailwind,
    s3: springBoot,
    s4: postgre,
    s5: grokAi,
  },
  {
    id: "3",
    name: "StudyNotion",
    description:
      "A full-stack ed-tech platform built with the MERN stack that enables students to discover and consume educational content while allowing instructors to create and showcase their courses.",
    github: "https://trevault.in",
    linkedin: "https://trevault.in",
    details: (
      <div>
        StudyNotion is a versatile ed-tech platform designed to provide an
        immersive learning experience for students and a platform for
        instructors to showcase their expertise.
        <br />
        <br />
        Key Features:
        <br />
        Course creation and management.
        <br />
        Educational content consumption.
        <br />
        Course rating and feedback.
        <br />
        Student and instructor experiences.
        <br />
        Full-stack MERN architecture.
      </div>
    ),
    s1: react_icon,
  },
  {
    id: "4",
    name: "Hospital Management System",
    description:
      "A healthcare platform featuring appointment booking, video conferencing, medical science awareness, and an integrated chatbot to improve accessibility and user interaction.",
    linkedin: "https://trevault.in",
    details: (
      <div>
        A healthcare platform focused on improving the digital experience for
        patients and users.
        <br />
        <br />
        Key Features:
        <br />
        Appointment booking.
        <br />
        Video conferencing.
        <br />
        Medical science awareness.
        <br />
        Integrated chatbot.
        <br />
        Frontend development and chatbot development.
        <br />
        <br />
        Technologies:
        <br />
        Python, Streamlit, Decision Tree, Joblib, PHP, WebRTC, HTML, CSS, and
        JavaScript.
      </div>
    ),
  },
  {
    id: "5",
    image: gym,
    name: "Gym Website",
    description:
      "Dive into the world of fitness with Sport Club, an animated frontend website built with ReactJS. Discover a plethora of training programs, explore our subscription models, and seamlessly join our community with just a few clicks.",
    linkedin:
      "https://www.linkedin.com/posts/poojan-dhebariya-8b862123b_reactjs-frontenddevelopment-fitnesswebsite-activity-7184950626177466368-ZOnm?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/poojandhebariya/Gym_website",
    video: gymVideo,
    details: (
      <div>
        Excited to present my latest creation, the Sport Club website, a dynamic
        hub for fitness enthusiasts! <br />
        🌟🏋️‍♂️ Overview:
        <br />
        Dive into the world of fitness with Sport Club, an animated frontend
        website built with ReactJS. Discover a plethora of training programs,
        explore our subscription models, and seamlessly join our community with
        just a few clicks.
        <br />
        🌟 Key Features:
        <br />
        Training Programs: Explore a diverse range of training programs tailored
        to suit various fitness goals.
        <br />
        Subscription Model: Choose from flexible subscription plans designed to
        meet individual needs and preferences.
        <br />
        Join Us: Easily become a part of our community by providing your email,
        facilitated by the seamless integration of the emailJs library.
      </div>
    ),
    s1: react_icon,
    s2: emailjs,
  },
  {
    id: "6",
    image: dice,
    name: "Dice Game",
    description:
      "In this interactive game, users engage by guessing a number before rolling the dice. If their guess matches the rolled number, they earn points; otherwise, points are deducted.",
    linkedin:
      "https://www.linkedin.com/posts/poojan-dhebariya-8b862123b_reactjs-gamedevelopment-frontenddevelopment-activity-7176911414664568833-XUfd?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/poojandhebariya/dice_game",
    video: diceVideo,
    details: (
      <div>
        🔍 Overview:
        <br />
        In this interactive game, users engage by guessing a number before
        rolling the dice. If their guess matches the rolled number, they earn
        points; otherwise, points are deducted.
        <br />
        💡 Key Features:
        <br />
        Guess & Roll: Users make a guess, then roll the dice to reveal the
        outcome.
        <br />
        Scoring System: Earn points for correct guesses, face deductions for
        incorrect ones.
        <br />
        User Interaction: Simple and intuitive interface for seamless gaming
        experience.
        <br />
      </div>
    ),
    s1: react_icon,
  },
  {
    id: "7",
    image: restaurant,
    name: "Restaurant Website",
    description:
      "Step into the world of gastronomy with the Green Leaf Restaurant website, where culinary delights meet elegant design. 🌟 Explore our menu offerings, read customer reviews, and find your way with our interactive map.",
    linkedin:
      "https://www.linkedin.com/posts/poojan-dhebariya-8b862123b_webdevelopment-restaurantwebsite-htmlcss-activity-7180903871353896963-MvTK?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/poojandhebariya/restaurant",
    video: restaurantVideo,
    details: (
      <div>
        🍴 Overview:
        <br />
        Step into the world of gastronomy with the Green Leaf Restaurant
        website, where culinary delights meet elegant design. <br />
        🌟 Explore our menu offerings, read customer reviews, and find your way
        with our interactive map.
        <br />
        🍽️ Key Features:
        <br />
        Menu Showcase: Delight your senses with our array of delectable dishes,
        beautifully presented.
        <br />
        Customer Reviews: Hear what our patrons have to say about their dining
        experiences, fostering trust and engagement.
        <br />
        Interactive Map: Seamlessly locate us and plan your visit with our
        integrated map feature.
      </div>
    ),
    s1: react_icon,
    s2: map,
  },
  {
    id: "8",
    image: todo,
    name: "ToDO Website",
    description:
      "To-Do application using ReactJS that allows users to add, view, and delete tasks.",
    github: "https://github.com/poojandhebariya/Todo",
    s1: react_icon,
  },
];
