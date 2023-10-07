import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "DSA",
      icon: web,
    },
    {
      title: "Web Development",
      icon: mobile,
    },
    {
      title: "DBMS",
      icon: backend,
    },
    {
      title: "Operating System",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Web Development Course",
      company_name: "Internshala",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2022",
      points: [
        "Accomplished a challenging Full Stack Web Development certification program that encompassed front-end, back-end, and database technologies. Acquired comprehensive expertise in a range of technologies, including HTML, CSS, JavaScript, React, PHP, and more.",
        "Showcased practical abilities through the creation of a fully operational web application during the program. Developed an interactive and user-friendly project that demonstrated proficiency in implementing dynamic features and handling data interactions.",
        "Participated in a cooperative learning atmosphere alongside seasoned industry instructors and fellow learners who shared similar interests..",
        "Accumulated valuable experience in recognizing and overcoming obstacles throughout the development journey..",
      ],
    },
    
    {
      title: "DSA Course",
      company_name: "Coding Blocks",
      icon: shopify,
      
      date: "March 2023 - August 2023",
      points: [
        "In-depth coursework encompassing fundamental data structures and algorithms.",
"Engagement in hands-on projects with practical real-world applications.",
"Challenges aligned with industry standards to sharpen problem-solving skills.",
"Guidance from experienced instructors and collaboration with peers for effective learning." ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "We thought it was impossible to make a website as beautiful as our product, but Charu proved us wrong.",
      name: "Internshala",
      designation: "Team",
      company: "Internshala",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Charu's exceptional performance in the DSA course at CB is truly commendable. Throughout the course, she exhibited a remarkable dedication to learning and problem-solving.",
      name: "Karthik Mathur",
      designation: "Mentor",
      company: "Coding Blocks",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
   
  ];
  
  const projects = [
    {
      name: "Expense Ease",
      description:
        "Built an app that empowers users to effortlessly manage their finances by simply performing transactions, enhancing accessibility and convenience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "JS",
          color: "green-text-gradient",
        },
       
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Amazon Clone",
      description:
        "Beginner-level project replicating an e-commerce website's features.Created a basic UI for hands-on front-end development experience.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Travel Advisor",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Google API",
          color: "green-text-gradient",
        },
        {
          name: "Weather API",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };