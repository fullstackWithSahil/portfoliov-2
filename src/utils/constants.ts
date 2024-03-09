import html from"@/assets/html-css-js.png";
import mongodb from "@/assets/mongodb.png";
import react from "@/assets/react.png"
import redux from "@/assets/redux.png"
import tailwind from "@/assets/tailwind.png"
import typescript from "@/assets/typescript.png"
import express from "@/assets/express.png"
import node from "@/assets/node.png"
import Github from "@/assets/github.png"

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
  },
];

export const Technologies = [
  {
    id: 1,
    title: "html css javascript",
    img: html,
    description: " These three title form the foundational building blocks of web development. HTML (Hypertext Markup Language) structures content, CSS (Cascading Style Sheets) styles and formats the content, and JavaScript adds interactivity and dynamic behavior to web pages.",
},
{
    id: 2,
    title: "react",
    img: react,
    description: " React is a popular JavaScript library for building user interfaces. It allows for the creation of interactive and dynamic web applications with reusable UI components.",
},
{
    id: 3,
    title: "typescript",
    img: typescript,
    description: " TypeScript is a superset of JavaScript that adds static typing to the language. It enhances code quality and makes it easier to maintain and scale complex web projects.",
},
{
    id: 4,
    title: "tailwind",
    img: tailwind,
    description: " Tailwind CSS is a utility-first CSS framework that helps you build beautiful, accessible, and fast websites with minimal effort.",
},
{
    id: 5,
    title: "redux",
    img: redux,
    description: " Redux is an open source JavaScript library that lets you manage state in your application. It lets you manage data, actions, and side effects in your application.",
},
{
    id: 6,
    title: "node",
    img: node,
    description: " Node.js is an open source, cross-platform, JavaScript runtime environment that makes it easy to build fast, scalable, and reliable applications. It is a JavaScript runtime environment that runs on the V8 JavaScript engine.",
},
{
    id: 7,
    title: "express",
    img: express,
    description: " Express.js is a Node.js web application framework that makes it easy to create web applications that run on the Node.js platform.",
},
{
    id: 8,
    title: "mongodb",
    img: mongodb,
    description: " MongoDB is an open source, document-oriented database that stores and manages data in JSON format.",
},
{
    id: 9,
    title: "github",
    img: Github,
    description: " GitHub is an open source web application for version control and open source contribution",
},
];
