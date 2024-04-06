import {
    backend,
    web,
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
    python,
    java,
    mysql,
    blog,
    java1,
    python2,
    pmv,
    self,
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
      title: "Full Stack Web Developer",
      icon: web,
    },
  
    {
      title: "Backend Developer",
      icon: backend,
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
        name: "MySQL DB",
        icon: mysql,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },

  ];
  
  const experiences = [
    {
      title: "Civil Site Engineer",
      company_name: "PMV Construction",
      icon: pmv,
      iconBg: "#383E56",
      date: "Nov 2018 - May 2023",
      points: [
        "As a dedicated Civil Engineer with over 4 years of experience as a Site Engineer, I bring a proven track record of success in managing and coordinating all site activities to ensure project implementation within schedule and quality standards.",
        "With a keen eye for detail and a commitment to excellence, I excel in continuously monitoring projects, solving problems, and providing technical advice to meet project specifications effectively.",
        "My ability to prepare detailed reports, estimates, and sketches, coupled with my strong supervisory and communication skills, allows me to successfully collaborate with contractors and stakeholders to achieve project goals.",
      ],
    },

    {
      title: "Transitioning to Full Stack Development",
      company_name: "Fresher",
      icon: self,
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
      points: [
      "Completed comprehensive self-study and hands-on projects to transition from a Civil Site Engineer to a Full Stack Developer.",
      "Acquired proficiency in technologies such as React.js and related frameworks through dedicated learning and practical application.",
      "Engaged in collaborative projects and online communities to gain practical experience and exposure to industry best practices.",
      "Actively sought feedback from peers and online resources to continuously improve coding skills and understanding of software development principles.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Dynamic Blog Website",
      description:
        "Designed and implemented a dynamic blog website using HTML, Tailwind CSS, MongoDB, Express, React, and Node.js (MERN stack). This project demonstrates proficiency in both frontend and backend technologies, offering a modern and interactive platform for content creation, publication, and management. The integration of frontend and backend components ensures a seamless user experience and efficient data handling.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "yellow-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        
      ],
      image: blog,
      source_code_link: "https://github.com/Ragullura/mern-stack-blog",
    },
    {
      name: "Harvesting Innovation",
      description:
        "Engineered an innovative application using Java and Windows Builder GUI, integrated with XAMPP database management system. This platform facilitates seamless data management and user interaction, providing a robust solution for harvesting and analyzing data in various industries.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Windows Builder GUI",
          color: "green-text-gradient",
        },
        {
          name: "XAMPP Data Base",
          color: "pink-text-gradient",
        },
      ],
      image: java1,
      source_code_link: "https://github.com/",
    },
    {
      name: "Python",
      description:
        " Developed a user-friendly web application utilizing Python, MySQL, and GUI (Tkinter) to calculate concrete volume and pricing for construction projects. This tool streamlines the process of estimating material quantities and costs, enhancing efficiency and accuracy in project planning and management.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "GUI (Tkinter)",
          color: "pink-text-gradient",
        },
      ],
      image: python2,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  