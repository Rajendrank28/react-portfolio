import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate front-end developer with strong expertise in building dynamic and responsive web applications using React.js. While I have experience working on full-stack MERN projects, my primary focus is crafting seamless user interfaces and optimizing front-end performance. With a deep understanding of modern web technologies, I strive to create engaging, scalable, and visually appealing applications that enhance user experience.`;

export const ABOUT_TEXT = `I am a dedicated and enthusiastic front-end developer with a strong foundation in building dynamic and responsive web applications using React.js. While I have worked on full-stack MERN projects, my expertise lies in front-end development, crafting seamless user experiences with modern web technologies. I recently worked as a front-end developer at Infotoz Technologies and am currently pursuing my MCA at CMR Institute of Technology, Bangalore. Passionate about technology, I constantly explore new tools, contribute to projects, and stay updated with industry trends. As a tech enthusiast, I thrive on solving complex challenges and building innovative solutions.`;

export const EXPERIENCES = [
  {
    year: "Dec 2024 - Jan 2025",
    role: "Frontend Developer Intern",
    company: "Infotoz Technologies",
    description: `Worked on developing and optimizing frontend components for web applications using React.js and Tailwind CSS. Assisted in building responsive user interfaces and improving website performance. Collaborated with the development team to implement interactive UI features and enhance the overall user experience.`,
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
  }  
];

export const PROJECTS = [
  {
    title: "CodePen",
    image: project1,
    description:
      "This project is a Real-Time Collaborative Code Editor that allows multiple users to write and edit HTML, CSS, and JavaScript simultaneously with instant synchronization. It features live preview, collaborative cursors, and an active users list, enabling a smooth real-time coding experience similar to modern online editors.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Google Maps API", "Socket.io","Redis,"],
  },
  {
    title: "Vehiql",
    image: project2,
    description:
      "Vehiql is an AI-powered automotive car marketplace designed to simplify the process of buying and selling vehicles.The platform enables users to search, filter, compare cars, save favorites, and book test drives through a clean, intuitive web interface.AI-driven features enhance search accuracy and assist sellers by generating structured, reliable vehicle listings from images.Built with modern full-stack technologies, the system ensures secure authentication, efficient admin management, and a seamless user experience across devices.  ",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "JobBoard",
    image: project3,
    description:
      "JobBoard is a full-stack job portal application built using React, TypeScript, Node.js, Express, and MongoDB.It enables employers to post and manage job listings while allowing candidates to search, apply, and track applications in real time.The platform includes secure JWT-based authentication, role-based access control, and resume uploads using Cloudinary.The application is fully deployed with a React frontend on Vercel and a Node.js backend on Render.",
    technologies: ["HTML", "CSS", "React.js", "MongoDB",""],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "TailwindCSS"],
  },
    
];

export const CONTACT = {
  address: "Bangalore,Karnataka ",
  phoneNo: "+91 6362124201 ",
  email: "rajendragn.in@gmail.com",
};