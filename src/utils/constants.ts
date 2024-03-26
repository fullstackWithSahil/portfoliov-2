import html from "@/assets/html-css-js.png";
import mongodb from "@/assets/mongodb.png";
import react from "@/assets/react.png";
import redux from "@/assets/redux.png";
import tailwind from "@/assets/tailwind.png";
import typescript from "@/assets/typescript.png";
import express from "@/assets/express.png";
import node from "@/assets/node.png";
import LinkedIn from "@/assets/linkedIn.png";
import Instagram from "@/assets/instagram.jpg";
import Gmail from "@/assets/gmail.png";
import Github from "@/assets/github.png";
import mysql from "@/assets/mysql.png";
import postgres from "@/assets/postgres.png";

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
    title: "HTML, CSS, JavaScript",
    img: html,
    description:
      "These are the building blocks of your website. HTML structures the content, CSS styles make it look beautiful, and JavaScript adds interactive features to engage your visitors.",
  },
  {
    id: 2,
    title: "React",
    img: react,
    description:
      "React is a modern technology that creates user-friendly and interactive experiences on your website. It ensures your site is engaging and easy to navigate.",
  },
  {
    id: 3,
    title: "TypeScript",
    img: typescript,
    description:
      "TypeScript ensures a smoother website experience by minimizing errors and enhancing performance. It guarantees a reliable and efficient website for your business.",
  },
  {
    id: 4,
    title: "Tailwind CSS",
    img: tailwind,
    description:
      "Tailwind CSS is a powerful tool that ensures your website is visually appealing and user-friendly. It provides a seamless design experience for your visitors.",
  },
  {
    id: 5,
    title: "Redux",
    img: redux,
    description:
      "Redux keeps your website organized and efficient by managing data effectively. It ensures a seamless experience for your visitors, making your website easy to navigate.",
  },
  {
    id: 6,
    title: "Node.js",
    img: node,
    description:
      "Node.js powers your website with speed and scalability, ensuring a seamless experience for your visitors. It guarantees reliability and performance for your business.",
  },
  {
    id: 7,
    title: "Express.js",
    img: express,
    description:
      "Express.js simplifies website development by providing a robust framework. It ensures quick and efficient delivery of your website, meeting your business needs effectively.",
  },
  {
    id: 8,
    title: "MongoDB",
    img: mongodb,
    description:
      "MongoDB offers a reliable and efficient way to manage data for your website. It ensures seamless access to information, enhancing user experience and satisfaction.",
  },
  {
    id: 9,
    title: "GitHub",
    img: Github,
    description:
      "GitHub streamlines collaboration and version control for your website development. It ensures smooth project management and timely delivery of your website.",
  },
  {
    id: 10,
    title: "MySQL",
    img: mysql,
    description:
      "MySQL is a popular database system that ensures your website can efficiently store and manage data. It provides a reliable foundation for your website's backend.",
  },
  {
    id: 11,
    title: "PostgreSQL",
    img: postgres,
    description:
      "PostgreSQL is a powerful database system that ensures your website's data is secure, scalable, and reliable. It offers advanced features for managing complex data structures.",
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

export const FooterLinks = [
  {
    name: "instagram",
    image: Instagram,
    link: "https://instagram.com/fullstackwithsahil?igshid=YTQwZjQ0NmI0OA==",
  },
  {
    name: "email",
    image: Gmail,
    link: "mailto:fullstackwithsahil@gmail.com",
  },
  {
    name: "linkedIn",
    image: LinkedIn,
    link: "https://www.linkedin.com/in/sahil-nayak-a0bb80296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "github",
    image: Github,
    link: "https://github.com/fullstackWithSahil",
  },
];
