import { conntog, aiopenapps } from "../assets/images";
import {
  ai,
  firebase,
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  react,
  notes,
  tailwindcss,
  leetcode,
  typescript,
  chat,
  cart,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: firebase,
    name: "Firebase",
    type: "Database",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Conntog",
    icon: conntog,
    iconBg: "#383E56",
    date: "Nov 2022 - Jun 2023",
    points: [
      "Developed frontend features at Conntog, collaborating with a team of three",
      "Ensured responsive design for optimal user experiences on various devices.",
      "Actively participated in code reviews, providing constructive feedback.",
      "Contributed to a dynamic team, enhancing web applications with HTML, CSS, JavaScript and other modern frameworks.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "AiOpenApps",
    icon: aiopenapps,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Nov 2023",
    points: [
      "Full-stack developer at AiOpenApps, proficiently utilizing Sanity CMS, Firebase database, and Firebase authentication for seamless application development.",
      "Developed and maintained end-to-end features, showcasing versatility in full-stack development.",
      "Leveraged Sanity CMS for efficient content management, ensuring a streamlined workflow.",
      "Integrated Firebase database and authentication, enhancing the overall functionality and security of web applications.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Akxai",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/akshay-aileni-938991224",
  },
];

export const projects = [
  {
    iconUrl: ai,
    theme: "btn-back-red",
    name: "AiOpenApps",
    description:
      "Developed AiOpenApps — your one-stop AI hub! Powered by Firebase, Sanity, and React, it's where AI marvels converge for a sleek and snappy experience.",
    link: "https://github.com/Akxai/aiopenapps",
  },
  {
    iconUrl: notes,
    theme: "btn-back-green",
    name: "ECE Notes",
    description:
      "Constructed an ECE notes app — developed with Node.js and MongoDB, offering centralized access to study materials. Implemented Twilio for user queries and owner notifications.",
    link: "https://github.com/Akxai/notesTwilio",
  },
  {
    iconUrl: leetcode,
    theme: "btn-back-blue",
    name: "Leetcode Clone",
    description:
      "Developed a LeetCode clone — an engaging platform for honing coding skills through algorithmic challenges. Dive in, solve, and conquer the coding arena!",
    link: "https://github.com/Akxai/leetcode-clone",
  },
  {
    iconUrl: chat,
    theme: "btn-back-pink",
    name: "React Chat Application",
    description:
      "Created a real-time chat app with React and Firebase for seamless communication, incorporating secure authentication and efficient NoSQL data storage.",
    link: "https://github.com/Akxai/react-chat-app",
  },
  {
    iconUrl: cart,
    theme: "btn-back-yellow",
    name: "Add to Cart Application",
    description:
      " Developed an add to cart app using plain HTML, CSS, and JavaScript, with Firebase integration for real-time data updates and easy cart management, allowing users to add and delete items for a seamless shopping experience.",
    link: "https://github.com/Akxai/CartApp",
  },
];
