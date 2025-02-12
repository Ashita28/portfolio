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
    youtube,
    dashboard,
    metaverse,
    youtubepro,
    metaversepro,
    dashboardpro,
    portfoliopro,
    tab,
    notes,
    pocketNotes
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
      title: "Link Shortner",
      icon: youtube,
      iconBg: "#383E56",
      points: [
          `Developed a robust URL Shortener application with a mobile-first, responsive frontend using React.js,
enabling users to efficiently shorten URLs, copy links, and monitor performance with real-time analytics.`,
          "Implemented secure user authentication using JWT, ensuring protected access to application features.",
          `Designed and integrated scalable RESTful APIs with Express.js and MongoDB to enable seamless link
management and backend communication, ensuring high availability and performance.`
      ],
    },
      {
      title: "Job Listings",
      icon: youtube,
      iconBg: "#383E56",
      points: [
          "Developed a full-stack job listing platform with JWT-based authentication.",
          "Enabled recruiters to manage job postings and job seekers to apply.",
          "Implemented structured validation for job creation, editing, and deletion.",
          "Secured protected routes to restrict modifications to authorized users."
      ],
    },
      {
      title: "Pocket Notes",
      icon: notes,
      iconBg: "#383E56",
      points: [
          `Developed a Pocket Notes application using React.js, local Storage for data persistence, React Router for
seamless navigation, Redux Toolkit for state management, and features like a color picker, modals, and
dynamic note organization.`
      ],
    },
    {
      title: "Youtube clone",
      icon: youtube,
      iconBg: "#383E56",
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
      points: [
        "It is an Admin dashboard (developed using MERN stack).",
        "Developed using MERN Stack (MongoDB, Express, React, Node.js), Redux Toolkit Query, Tailwind css.",
        "Displays different stats related to products, user etc.",
        "This is a fully responsive Admin Dashboard which displays data in forms of tables, pie charts and graphs."
      ],
    },
  ];
  
  
  const projects = [
      {
      name: "Link Shortner",
      description:
        "A link shortner web application.",
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
      source_code_link: "https://github.com/Ashita28/linkShortner_frontend",
      source_code_link: "https://github.com/Ashita28/linkShortner_server",
      deployed_link: "https://link-shortner-frontend-green.vercel.app/"
    },
      {
      name: "Job Listings",
      description:
        "A post, search job listing web application.",
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
      source_code_link: "https://github.com/Ashita28/jobListing_frontend",
      source_code_link: "https://github.com/Ashita28/jobListing_backend",
      deployed_link: "https://job-listing-frontend-kappa.vercel.app/"
    },
      {
      name: "Pocket Notes",
      description:
        "A minimalist notes web application.",
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
      image: pocketNotes,
      source_code_link: "https://github.com/Ashita28/pocketNotes",
      deployed_link: "https://pocket-notes-b1d8.vercel.app/"
    },  
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
    }
  ];
  
  export { services, technologies, experiences, projects };
