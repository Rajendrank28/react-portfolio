import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate front-end developer with strong expertise in building dynamic and responsive web applications using React.js. While I have experience working on full-stack MERN projects, my primary focus is crafting seamless user interfaces and optimizing front-end performance. With a deep understanding of modern web technologies, I strive to create engaging, scalable, and visually appealing applications that enhance user experience.`;

export const ABOUT_TEXT = `I am a dedicated and enthusiastic front-end developer with a strong foundation in building dynamic and responsive web applications using React.js. While I have worked on full-stack MERN projects, my expertise lies in front-end development, crafting seamless user experiences with modern web technologies. I recently worked as a front-end developer at Infotoz Technologies and am currently pursuing my MCA at CMR Institute of Technology, Bangalore. Passionate about technology, I constantly explore new tools, contribute to projects, and stay updated with industry trends. As a tech enthusiast, I thrive on solving complex challenges and building innovative solutions.`;

// ✅ FIXED EXPERIENCES
export const EXPERIENCES = [
  {
    year: "Feb 2026 - Mar 2026",
    role: "Quality Analyst Intern",
    company: "Skypoint",
    description: `Performed manual testing of web applications to identify functional and usability issues. Designed and executed test cases based on business requirements. Logged, tracked, and verified defects using bug tracking tools. Conducted regression testing after bug fixes and feature updates. Performed API testing using Postman and validated database records using SQL. Collaborated with developers and QA team in an Agile/Scrum environment to ensure product quality.`,
    technologies: ["Manual Testing", "Postman", "SQL", "DBeaver", "Agile"],
  },
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
      "A real-time collaborative code editor that allows multiple users to write and edit HTML, CSS, and JavaScript simultaneously with instant synchronization. Includes live preview, collaborative cursors, and an active users list.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io", "Redis"],
  },
  {
    title: "Vehiql",
    image: project2,
    description:
      "An AI-powered automotive marketplace for buying and selling vehicles. Features advanced search, comparisons, favorites, and test drive booking with a clean UI.",
    technologies: ["Next.js", "React.js", "Node.js", "ShadCN", "Prisma", "Supabase", "Gemini"],
  },
  {
    title: "JobBoard",
    image: project3,
    description:
      "A full-stack job portal where employers post jobs and candidates apply and track applications in real time. Includes authentication, role-based access, and resume uploads.",
    technologies: ["React.js", "MongoDB", "TypeScript", "Node.js", "Express", "Kanban"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Framer Motion", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Bangalore, Karnataka",
  phoneNo: "+91 6362124201",
  email: "rajendragn.in@gmail.com",
};