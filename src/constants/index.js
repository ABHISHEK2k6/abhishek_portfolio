import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  zmodeler,
  tailwind,
  python,
  mysql,
  cpp,
  git,
  figma,
  mulearn,
  mediacon,
  blender,
  samp,
  youtube,
  mulearn_ucek,
  mediacon_news,
  threejs,
  college_site,
  portfolio,
  linkedin,
  instagram,
  githubsvg,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Tech Stack",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "gallery",
    title: "Gallery",
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
    title: "React Native Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "3D Modeler",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C",
    icon: cpp,
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
    name: "Figma",
    icon: figma,
  },
  {
    name: "Zmodeler",
    icon: zmodeler,
  },
  {
    name: "MySQL",
    icon: mysql,
  }
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Mulearn UCEK",
    icon: mulearn,
    iconBg: "#383E56",
    date: "Dec 2024 - Present",
    points: [
      "Developing and maintaining the Mulearn club's website, ensuring it is up-to-date and responsive.",
      "Collaborating with club members to implement new features and improvements.",
      "Participating in discussions and contributing ideas for improving the club's online presence."
    ],
  },
  {
    title: "Web Developer",
    company_name: "MediaCon",
    icon: mediacon,
    iconBg: "#383E56",
    date: "March 2025 - May 2025",
    points: [
      "Developed a dynamic and responsive news website for the MediaCon event.",
      "Ensured smooth user experience across devices and browsers.",
      "Collaborated with the design team to align the website with the event's branding."
    ],
  },
  {
    title: "3D Artist & Blender Specialist",
    company_name: "Freelancer",
    icon: blender,
    iconBg: "white",
    date: "2021 - Present",
    points: [
      "Created and rendered custom 3D models and animations using Blender for various personal and freelance projects.",
      "Specialized in creating realistic 3D assets and custom textures for game mods and animations.",
      "Developed 3D scenes, product, optimizing models for rendering efficiency and performance.",
      "Showcased my work on Instagram (@_abhi2k6_), where I gained recognition for my unique designs and creative 3D concepts."
    ],
  },

  {
    title: "3D Modeler & Livery Creator",
    company_name: "Mallu Samp Servers",
    icon: samp,
    iconBg: "black",
    date: "2021 - Present",
    points: [
      "Created custom 3D liveries and mod vehicles for Mallu Samp servers.",
      "Worked with the team to integrate custom mapping into the server’s gameplay environment.",
      "Collaborated with the community to gather feedback and iterate on vehicle and livery designs.",
      "Ensured that all 3D models and vehicles were optimized for performance and visual appeal."
    ],
  }
];

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

const projects = [
  {
    name: "YouTube Clone",
    description:
      "A static clone of YouTube's homepage created using only HTML and CSS. This project helped me understand web layouts, flexbox, and positioning in CSS while replicating a familiar UI from scratch.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: youtube, // Replace with actual image import or path
    github_link: "https://github.com/ABHISHEK2k6/Yoututbe-Clone-UI.git",
    source_code_link: "https://yoututbe-clone-ui.vercel.app",
  },
  {
    name: "MuLearn Website Update",
    description:
      "Contributed to updating our college's MuLearn club website by implementing improvements using React, TypeScript, and CSS. The update involved refining the UI and improving the responsiveness of various components.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mulearn_ucek, // Replace with actual image import or path
    github_link: "https://github.com/ABHISHEK2k6/Mulearn-ucek.git",
    source_code_link: "https://mulearn-ucek.netlify.app",
  },
  {
    name: "MediaCon News Website",
    description:
      "Developed a dynamic news website for MediaCon, Kerala’s first media relations and entertainment conference. Built with Next.js, TypeScript, and CSS, the site featured responsive design, dynamic routing.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mediacon_news, // Replace with actual image import or path
    github_link: "https://github.com/ABHISHEK2k6/mediacon-news-next.git",
    source_code_link: "https://mediacon-news-next-omega.vercel.app",
  },
  {
    name: "College Website Enhancement",
    description:
      "Led a major enhancement of our college website, adding sections like clubs, facilities, and an event gallery. The site was made fully responsive and multiple routing bugs were fixed. Technologies used included Next.js, JavaScript, TypeScript, Markdown, and Tailwind CSS.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "markdown",
        color: "orange-text-gradient",
      },
    ],
    image: college_site, // Replace with actual image import or path
    github_link: "https://github.com/ABHISHEK2k6/ucek.git",
    source_code_link: "https://uck.ac.in",
  },
  {
    name: "3D Portfolio Website",
    description:
      "Built a fully customized portfolio website showcasing my skills and work. Integrated 3D models using Blender and Three.js, animated interactions with Framer Motion, and styled the interface with Tailwind CSS. This project reflects both my frontend skills and creative approach.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "blender",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "purple-text-gradient",
      },
    ],
    image: portfolio, // Replace with actual image import or path
    github_link: "https://github.com/ABHISHEK2k6/abhishek_portfolio.git",
    source_code_link: "https://abhishekpdev.netlify.app",
  },
];


  const Socials = [
    {
      name: "Linkedin",
      src: linkedin,
      link : "https://www.linkedin.com/in/abhishek-p-a2a89a32b/",
    },
    {
      name: "Instagram",
      src: instagram,
      link : "https://www.instagram.com/_abhi2k6_",
    },
    {
      name: "Github",
      src: githubsvg,
      link : "https://github.com/ABHISHEK2k6",
    },
  ];

const Bio = {
  name: "Abhishek P",
  email: "abhishekp9a@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhishek-p-a2a89a32b/",
  githubsvg: "https://github.com/ABHISHEK2k6",
  insta: "https://www.instagram.com/_abhi2k6_",
};


export { services, Bio, technologies, Socials, experiences, projects };