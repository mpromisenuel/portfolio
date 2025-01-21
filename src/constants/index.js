import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1/2 years of hands-on experience, I have honed my skills in front-end technologies like React,Vue.js,Nuxt.js and as well as mobile-app technologies like react-native. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front end developer with a passion for creating efficient and user-friendly web applications. With 1/2 years of professional experience, I have worked with a variety of technologies, including React, Nuxt.js, React-Native and Vue.js. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Frontend Developer", 
    company: "SendAfrika.LMT",
    description: `Designed and developed user interfaces for mobile applications using React-Native. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Tailwind"]
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React"],
    link:"https://protek-ecomm.netlify.app"
  },
  {
    title: "Expense-Tracker",
    image: project2,
    description:"The Expense Tracker Website is a comprehensive web application designed to help users manage their personal finances effectively. The application allows users to record, categorize, and analyze their daily expenses, providing a clear overview of their financial habits and aiding in better budgeting and financial planning.",
    technologies: ["HTML", "CSS", "Vue","Taliwind"],
    link:"https://protek-tracker.netlify.app"
  },
  {
    title: "Job-Listings-Site",
    image: project4,
    description:"The Job Listing Website is a dynamic platform designed to connect job seekers with potential employers. It offers a user-friendly interface for browsing job opportunities, applying for positions, and managing job postings, facilitating the recruitment process for both job seekers and employers.",
    technologies: ["HTML", "CSS", "Vue.js", "tailwind"],
    link:"https://protek-joblisting.netlify.app"
  },
];

export const CONTACT = {
  phoneNo: "+234 509 416 403",
  email: "mpromisenuel@gmail.com",
};
