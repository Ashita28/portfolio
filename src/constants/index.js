import {
    frontend,
    backend,
    web,
    fullstack,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    youtube,
    dashboard,
    metaverse,
    youtubepro,
    metaversepro,
    dashboardpro,
    portfoliopro,
    tab
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Fullstack Developer",
      icon: fullstack,
    }
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Youtube clone",
      icon: youtube,
      iconBg: "#383E56",
      date: "March 2020 - April 2020",
      points: [
        "Developed web applications using React.js, Material UI and RapidAPI.",
        "It is a fully responsive youtube web application.",
        "You can surf through different channels and videos.",
        "You can also play, pause the video and use other features of a media player.",
      ],
    },
    {
      title: "Metaverse",
      icon: metaverse,
      iconBg: "#383E56",
      date: "Jan 2021 - Feb 2021",
      points: [
        "A Beautiful NEXT.js landing page.",
        "Developed using React, Next.js, Framer Motion, Figma & Tailwind CSS.",
        "A UI/UX landing page with different animations."
      ],
    },
    {
      title: "Admin-BOARD",
      icon: dashboard,
      iconBg: "#383E56",
      date: "July 2022 - September 2022",
      points: [
        "It is an Admin dashboard (developed using MERN stack).",
        "Developed using MERN Stack (MongoDB, Express, React, Node.js), Redux Toolkit Query, Tailwind css.",
        "Displays different stats related to products, user etc.",
        "This is a fully responsive Admin Dashboard which displays data in forms of tables, pie charts and graphs."
      ],
    },
    {
      title: "Portfolio",
      icon: tab,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "It is a 3D Portfolio web application.",
        "Developed using React, Vite, Three.js, Framer Motion, React Three Fiber, Tailwind css."
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Youtube clone",
      description:
        "A fully responsive Youtube clone.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "material_ui",
          color: "pink-text-gradient",
        },
      ],
      image: youtubepro,
      source_code_link: "https://github.com/Ashita28/youtube",
      deployed_link: "https://stirring-praline-434409.netlify.app/"
    },
    {
      name: "Metaverse",
      description:
        "A beautiful UI/UX landing page.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next_js",
          color: "green-text-gradient",
        },
        {
          name: "framer_motion",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: metaversepro,
      source_code_link: "https://github.com/Ashita28/metaworld",
      deployed_link:"https://metaworld-fawn.vercel.app/"
    },
    {
      name: "Admin-BOARD",
      description:
        "An admin dashboard made using MERN stack.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "node_js",
          color: "blue-text-gradient",
        },
        {
          name: "redux_toolkit_query",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        
      ],
      image: dashboardpro,
      source_code_link: "https://github.com/Ashita28/admin_board",
      deployed_link:"https://admin-board-0344.onrender.com"
    },
    {
      name: "Portfolio",
      description:
        "It is a 3D Portfolio web application.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three_js",
          color: "green-text-gradient",
        },
        {
          name: "react_three_fiber",
          color: "pink-text-gradient",
        },
        {
          name: "framer_motion",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        
      ],
      image: portfoliopro,
      source_code_link: "https://github.com/Ashita28/portfolio",
      deployed_link:"https://portfolio-nine-umber-96.vercel.app/"
    },
  ];
  
  export { services, technologies, experiences, projects };