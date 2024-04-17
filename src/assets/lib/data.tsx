// import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import pythonicon from "../../assets/icons/pythonicon.svg" ;
// import cssicon from "../../assets/icons/cssicon.svg";
// import javascripticon from "../../assets/icons/javascripticon.svg";
// import typescripticon from "../../assets/icons/typescripticon.svg";
// import reacticon from "../../assets/icons/reacticon.svg";
// import nextjsicon from "../../assets/icons/nextjsicon.svg";
// import nodejsicon from "../../assets/icons/nodejsicon.svg";
// import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
// import mongodbicon from "../../assets/icons/mongoicon.svg";
// import vuejsicon from "../../assets/icons/vueicon.svg";
// import expressicon from "../../assets/icons/expressicon.svg";
// import sassscssicon from "../../assets/icons/sassicon.svg";
// import trelloicon from "../../assets/icons/trelloicon.svg";
// import apiicon from "../../assets/icons/apiicon.svg";
// import axiosicon from "../../assets/icons/axiosicon.svg";
// import spotifyicon from "../../assets/icons/spotifyicon.svg";
// import netlifyicon from "../../assets/icons/netlifyicon.svg";
// import rendericon from "../../assets/icons/rendericon.svg";
// import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
// import tastyMockup from "../../assets/img/tasty_mockup.webp";
// import instorMockup from "../../assets/img/instor_mockup.webp";
// import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me.png";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
// import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
// import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";


import cppicon from "../../assets/icons/cppicon.svg";
import javaicon from "../../assets/icons/javaicon.svg" ;
import githubicon from "../../assets/icons/githubicon.svg" ;
import numpyicon from "../../assets/icons/numpyicon.svg" ;
import djangoicon from "../../assets/icons/djangoicon.svg" ;
import linuxicon from "../../assets/icons/linuxicon.svg" ;
import cnnicon from "../../assets/icons/cnnicon.svg";
import opencvicon from "../../assets/icons/opencvicon.svg" ;
import tensorflowicon from "../../assets/icons/tensorflowicon.svg" ;
import photoshopicon from "../../assets/icons/photoshopicon.svg" ;

export const headerIntroData = {
  title: {
    de: "Hi, ich bin Alpay",
    en: "Hi, I'm Shravan",
  },
  subtitle: "AI/ML Engineer",
  description: {
    de: "Ich bin Alpay, ein Fullstack-Entwickler mit dem Ziel, meine Karriere voranzutreiben und an inspirierenden Projekten teilzunehmen. Hier präsentiere ich meine Arbeiten und meine Leidenschaft für die Webentwicklung. Lassen Sie uns gemeinsam digitale Lösungen gestalten und die Zukunft formen!",
    en: "I'm Shravan, Seeking an AI Engineer position to leverage strong technical skills and experience in building and deploying computer vision and deep learning models.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Kontaktiere mich",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Meine Projekte",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "GUI-Based Human Detection and Tracking Using - Deep Learning",
    description:
      "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN:
      "In this project we have developed a Model that count Human and make report of that.",
      githuburl: "https://github.com/Shravan1028/GUI-Based-Human-Detection-and-Tracking-Using-SSD",
      githubicon: FiGithub,
      deploymenticon: FiLink,
      colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
        projectcolor: "#70B9BE",
      },
      // technologies: [
    //   // { name: "Python", icon: pythonicon },
    //   { name: "CSS", icon: cssicon },
    //   { name: "JavaScript", icon: javascripticon },
    //   { name: "REST Api", icon: apiicon },
    //   { name: "React", icon: reacticon },
    //   { name: "Figma", icon: figmaicon },
    //   { name: "Canva", icon: canvaicon },
    //   { name: "Netlify", icon: netlifyicon },
    //   { name: "Trello", icon: trelloicon },
    // ],
    // image: tastyMockup,
    // deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    
  },

  {
    title: "Traffic Signal Violation Detection",
    description: "Implemented a system that detects and counts cars and bikes that violate traffic signals. Used YOLO (You Only Look Once) algorithm and MobileNet architecture for real-time detection. Provided results as counts of vehicles violating specific rules. Utilized various libraries like NumPy, Pandas, and Matplotlib for data analysis and visualization.",
    description_EN: "Developed a system to detect and count vehicles violating traffic signals using YOLO and MobileNet.",
    githuburl: "https://github.com/YourUsername/Traffic-Signal-Violation-Detection",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#YourColorCode",
    },
  },
  {
    title: "Emotion Detection using Face Recognition",
    description: "Built a system that recognizes facial expressions (happy, sad, neutral) from images and videos. Used OpenCV library for face detection and a Convolutional Neural Network (CNN) for emotion classification. Achieved promising accuracy in identifying basic emotions.",
    description_EN: "Developed a system for facial emotion detection using OpenCV and CNN.",
    githuburl: "https://github.com/YourUsername/Emotion-Detection",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#YourColorCode",
    },
  },
  {
    title: "EDA TOOL",
    description: "In this project , i had made a tool that is used in Exploratory data analysis using plotly and pygwalker. It also provide the dashboard creation of the dataset. To design this i had used streamlit",
    description_EN: "In this project , i had made a tool that is used in Exploratory data analysis using plotly and pygwalker. It also provide the dashboard creation of the dataset. To design this i had used streamlit",
    githuburl: "https://github.com/Shravan1028/EDA_Tool",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#YourColorCode",
    },
  },
  // {
  //   title: "Silentmoon",
  //   description:
  //     "Eine Yoga und Meditations App, die wir als Team mit React, MongoDB, Express und Node.js gebaut haben. Meine Aufgabe als Gitmaster und Backend Entwickler bestand darin, das Backend mit Anbindung anhand einer Restful API zu programmieren und die Datenbank in MongoDB zu modellieren.",
  //   description_EN:
  //     "A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.",
  //   // technologies: [
  //   //   // { name: "Html", icon: htmlicon },
  //   //   { name: "CSS", icon: cssicon },
  //   //   { name: "JavaScript", icon: javascripticon },
  //   //   { name: "Spotify Api", icon: spotifyicon },
  //   //   { name: "React", icon: reacticon },
  //   //   { name: "JWT & Bcrypt", icon: jwticon },
  //   //   { name: "Axios", icon: axiosicon },
  //   //   { name: "MongoDB", icon: mongodbicon },
  //   //   { name: "Express", icon: expressiconwhite },
  //   //   { name: "Node.js", icon: nodejsicon },
  //   //   { name: "Figma", icon: figmaicon },
  //   //   { name: "Render", icon: rendericon },
  //   // ],
  //   image: silentmoonMockup,
  //   deploymenturl: "https://silentmoon-grpw.onrender.com/",
  //   githuburl:
  //     "https://github.com/AlpayC/Fullstack_Abschlussprojekt_SilentMoon",
  //   githubicon: FiGithub,
  //   deploymenticon: FiLink,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#FFD5BD",
  //   },
  // },
  // {
  //   title: "Furniture Organizer",
  //   description:
  //     "Eine Möbel-Organizer App, die wir als Duo-Team mit React, MongoDB, Express und Node.js programmiert haben. Als Gitmaster habe ich die Verknüpfung des Frontends mit dem Backend und die Datenbankmodellierung übernommen. Die App ist responsive und mobile-optimiert.",
  //   description_EN:
  //     "A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.",
  //   technologies: [
  //     // { name: "Html", icon: htmlicon },
  //     { name: "CSS", icon: cssicon },
  //     { name: "JavaScript", icon: javascripticon },
  //     { name: "React", icon: reacticon },
  //     { name: "JWT & Bcrypt", icon: jwticon },
  //     { name: "Axios", icon: axiosicon },
  //     { name: "MongoDB", icon: mongodbicon },
  //     { name: "Express", icon: expressiconwhite },
  //     { name: "Node.js", icon: nodejsicon },
  //     { name: "Figma", icon: figmaicon },
  //     { name: "Render", icon: rendericon },
  //     { name: "Trello", icon: trelloicon },
  //   ],
  //   image: instorMockup,
  //   deploymenturl: "https://mern-haushaltsbuch.onrender.com/",
  //   githuburl: "https://github.com/AlpayC/Furniture_MERN",
  //   githubicon: FiGithub,
  //   deploymenticon: FiLink,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#E3964A",
  //   },
  
] as const;

export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Machine Learning",
    skills: [
      {
        title: "Python",
        hash: "#python",
        icon: pythonicon,
        color: "#FFFF00",
      },
      {
        title: "CPP",
        hash: "#cpp",
        icon: cppicon,
        color: "#1572B6",
      },
      {
        title: "Java",
        hash: "#java",
        icon: javaicon ,
        color: "#F7DF1E",
      },
      {
        title: "GitHub",
        hash: "#github",
        icon: githubicon,
        color: "#000000", 
      },
      {
        title: "NumPy",
        hash: "#numpy",
        icon: numpyicon,
        color: "#0000FF",
      },
      {
        title: "Django",
        hash: "#django",
        icon: djangoicon,
        color: "#023020",
      },
      {
        title: "Linux",
        hash: "#linux",
        icon: linuxicon,
        color: "#000000",
      },
      {
        title: "Convolutional Neural Networks",
        hash: "#cnn",
        icon: cnnicon,
        color: "#FF5733",
      },
      {
        title: "TensorFlow",
        hash: "#tensorflow",
        icon: tensorflowicon,
        color: "#FF6F61",
      },
      {
        title: "OpenCV",
        hash: "#opencv",
        icon: opencvicon,
        color: "#5C3EE8",
      },
      // {
      //   title: "Express",
      //   hash: "#Express",
      //   icon: [expressicon, expressiconwhite],
      //   color: ["#000000", "#FFFFFF"],
      // },
      // {
      //   title: "SASS/SCSS",
      //   hash: "#SASS/SCSS",
      //   icon: sassscssicon,
      //   color: "#CC6699",
      // },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe Photoshop",
        hash: "#adobePhotoshop",
        icon: photoshopicon,
        color: "#00008B",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:shravansingh80001@gmail.com",
  text: "shravansingh80001@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/shravan-singh-b011b9209/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/Shravan1028",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:shravansingh80001@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Maschinelles Lernen ist die Linse, durch die wir die Welt neu fokussieren können." - Pedro Domingos',
    en: '"Machine learning is the lens through which we can refocus our view of the world." - Pedro Domingos',
    author: "Pedro Domingos",
  },
  {
    de: '"Wahre KI erkennt nicht nur Muster, sondern versteht sie auch auf einem fundamentalen Niveau." - Judea Pearl',
    en: '"True AI not only recognizes patterns, but also understands them at a fundamental level." - Judea Pearl',
    author: "Judea Pearl",
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "About me",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Die Welt der Algorithmen",
      description:
        "Wenn ich nicht in der digitalen Welt unterwegs bin, durchstreife ich die faszinierende Welt der Algorithmen und Machine Learning. Algorithmen sind für mich wie Puzzleteile eines komplexen Systems.",
      icon: hardwareicon,
    },
    {
      title: "Auf der Überholspur des Fortschritts",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Der Fortschritt in der KI ist rasant, und ich möchte mit dabei sein, um die Welt zu einem besseren Ort zu machen.",
      icon: caricon,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als AI/ML-Engineer ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Technologien und Möglichkeiten ist meine Form der kreativen Inspiration.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The World of Algorithms",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of algorithms and machine learning. Algorithms are like puzzle pieces to me in a complex system.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Progress",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. The progress in AI is rapid, and I want to be a part of it to make the world a better place.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as an AI/ML engineer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new technologies and possibilities is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Alpay meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Shravan may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: " ",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
