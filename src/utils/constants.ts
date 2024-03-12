import html from "@/assets/html-css-js.png";
import mongodb from "@/assets/mongodb.png";
import react from "@/assets/react.png";
import redux from "@/assets/redux.png";
import tailwind from "@/assets/tailwind.png";
import typescript from "@/assets/typescript.png";
import express from "@/assets/express.png";
import node from "@/assets/node.png";
import Github from "@/assets/github.png";

export const homeNavLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/aboutus",
  },
  {
    name: "Contact-us",
    path: "/contactus",
  },{
    name:"Register",
    path: "/register"
  },{
    name:"Login",
    path: "/login"
  }
];

export const Technologies = [
  {
    id: 1,
    title: "html css javascript",
    img: html,
    description:
      " These three title form the foundational building blocks of web development. HTML (Hypertext Markup Language) structures content, CSS (Cascading Style Sheets) styles and formats the content, and JavaScript adds interactivity and dynamic behavior to web pages.",
  },
  {
    id: 2,
    title: "react",
    img: react,
    description:
      " React is a popular JavaScript library for building user interfaces. It allows for the creation of interactive and dynamic web applications with reusable UI components.",
  },
  {
    id: 3,
    title: "typescript",
    img: typescript,
    description:
      " TypeScript is a superset of JavaScript that adds static typing to the language. It enhances code quality and makes it easier to maintain and scale complex web projects.",
  },
  {
    id: 4,
    title: "tailwind",
    img: tailwind,
    description:
      " Tailwind CSS is a utility-first CSS framework that helps you build beautiful, accessible, and fast websites with minimal effort.",
  },
  {
    id: 5,
    title: "redux",
    img: redux,
    description:
      " Redux is an open source JavaScript library that lets you manage state in your application. It lets you manage data, actions, and side effects in your application.",
  },
  {
    id: 6,
    title: "node",
    img: node,
    description:
      " Node.js is an open source, cross-platform, JavaScript runtime environment that makes it easy to build fast, scalable, and reliable applications. It is a JavaScript runtime environment that runs on the V8 JavaScript engine.",
  },
  {
    id: 7,
    title: "express",
    img: express,
    description:
      " Express.js is a Node.js web application framework that makes it easy to create web applications that run on the Node.js platform.",
  },
  {
    id: 8,
    title: "mongodb",
    img: mongodb,
    description:
      " MongoDB is an open source, document-oriented database that stores and manages data in JSON format.",
  },
  {
    id: 9,
    title: "github",
    img: Github,
    description:
      " GitHub is an open source web application for version control and open source contribution",
  },
];

export const websites = [
  {
    id: 1,
    title: "A personal website",
    desc: "A simple static website for personal use with hosting and deployment",
    cost: 1000,
    image: mongodb,
    longdesc:"Our simple static website package is perfect for individuals or small businesses looking to establish an online presence and rank well on search engines. For just 1000 rupees, you'll receive a professionally designed website tailored to your needs. This package includes hosting and deployment, ensuring that your website is not only live but also optimized for search engine visibility. With clean and user-friendly design, fast loading times, and basic SEO practices, our static website package offers an affordable and effective solution to boost your online visibility.",
    list:[
      "Professionally designed static website",
      "Tailored to your personal or business needs",
      "Hosting and deployment included",
      "Clean and user-friendly design",
      "Fast loading times for optimal user experience",
      "Basic SEO practices for improved search engine visibility"
    ]
  },
  {
    id: 2,
    title: "An ecommerce website",
    desc: "An ecommerce website with database integration,payment system,hosting and deployment",
    cost: 2000,
    image: mongodb,
    longdesc:"Take your online business to the next level with our ecommerce website package, designed to maximize your visibility on search engines. For just 2000 rupees, you'll get a fully functional online store equipped with database integration and a secure payment system. Showcase your products, manage inventory, and accept payments seamlessly while leveraging advanced SEO techniques to attract more customers. With our user-friendly ecommerce platform and comprehensive SEO features, you'll be ready to dominate the search engine rankings and grow your business online.",
    list:[
      "Fully functional ecommerce website",
      "Database integration for product management",
      "Secure payment system for hassle-free transactions",
      "Hosting and deployment included",
      "Customizable design to reflect your brand identity",
      "Advanced SEO techniques for improved search engine visibility",
    ]
  },
  {
    id: 3,
    title: "A personal website",
    desc: "A simple static website for personal use with hosting and deployment",
    cost: 2500,
    image: mongodb,
    longdesc:"Looking for a more advanced static website solution with enhanced SEO capabilities? Our premium package offers all the features of our basic static website package, plus additional customization options to boost your search engine rankings. For just 2500 rupees, you'll receive a tailored website designed to attract more visitors and convert them into customers. With hosting and deployment included, you can launch your new website quickly and start climbing the search engine rankings. Invest in your online presence with our premium static website package and watch your website soar to the top of search engine results.",
    list:[
      "All features of our basic static website package",
      "Additional customization options",
      "Tailored to your specific requirements",
      "Hosting and deployment included",
      "Responsive design for optimal viewing on all devices",
      "Enhanced SEO capabilities for improved search engine visibility"
    ]
  },
];
