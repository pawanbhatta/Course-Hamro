import {
  BusinessIcon,
  Database,
  Design1,
  Design2,
  Design3,
  Design4,
  Design5,
  Design6,
  DevIcon,
  MarketingIcon,
  MusicIcon,
  Pen,
  PhotoIcon,
  ProDevIcon,
  User,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "course",
    title: "Course",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const courseTopics = [
  { index: 0, title: "Design", selected: false },
  { index: 1, title: "Development", selected: true },
  { index: 2, title: "Machine Learning", selected: false },
  { index: 3, title: "Blockchain", selected: false },
  { index: 4, title: "React Native", selected: false },
];

export const courses = [
  {
    title: "Full Stack Development with MERN and Web Socket",
    tag: "Development",
    image: Design1,
    noOfLessons: 10,
    userImage: User,
    userName: "Pawan Bhatta",
    userTitle: "Full-Stack Developer",
    noOfStudents: 50,
    rating: 4,
  },
  {
    title: "Build Location Tracking Mobile App with React Native",
    tag: "Development",
    image: Design2,
    noOfLessons: 10,
    userImage: User,
    userName: "Ashish Bhattarai",
    userTitle: "Full-Stack Developer",
    noOfStudents: 30,
    rating: 4,
  },
  {
    title: "Build a Crypto Wallet using Blockchain Technology",
    tag: "Development",
    image: Design3,
    noOfLessons: 10,
    userImage: User,
    userName: "Pawan Bhatta",
    userTitle: "Blockchain Developer",
    noOfStudents: 60,
    rating: 4,
  },
  {
    title: "Design an interactive UI/UX to fit your resume",
    tag: "Development",
    image: Design4,
    noOfLessons: 10,
    userImage: User,
    userName: "Kushal Adhikari",
    userTitle: "Graphics Designer",
    noOfStudents: 20,
    rating: 4,
  },
  {
    title: "Machine Learning for Financial Analysis and Algorithmic Trading",
    tag: "Development",
    image: Design5,
    noOfLessons: 10,
    userImage: User,
    userName: "Sulav Karki",
    userTitle: "Machine Learning Expert",
    noOfStudents: 40,
    rating: 4,
  },
  {
    title: "Machine Learning for Financial Analysis and Algorithmic Trading",
    tag: "Development",
    image: Design6,
    noOfLessons: 10,
    userImage: User,
    userName: "Mahendra Paudel",
    userTitle: "Business Expert",
    noOfStudents: 45,
    rating: 4,
  },
];

export const categories = [
  { name: "Development", icon: DevIcon },
  { name: "Professional Dev.", icon: ProDevIcon },
  { name: "Design", icon: Pen },
  { name: "Photography", icon: PhotoIcon },
  { name: "Data Science", icon: Database },
  { name: "Business", icon: BusinessIcon },
  { name: "Marketing", icon: MarketingIcon },
  { name: "Music", icon: MusicIcon },
];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

// export { services, technologies, experiences, testimonials, projects };
