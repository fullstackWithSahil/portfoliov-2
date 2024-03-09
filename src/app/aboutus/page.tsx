import React from "react"
import Content from "./content";
import Para from "@/components/Para";
import Heading from "@/components/Heading";
import Header from "./Header";

export default function SparklesPreview() {
  return (
    <main>
      <Header/>
      <Content>
        <Para content="Hello, I'm Sahil Nayak, a full-stack web developer currently pursuing my engineering degree at Sinhgad Institute of Technologies. I specialize in crafting exceptional websites featuring stunning designs and seamless animations. Our websites are fully responsive on mobile devices, optimized for search engines, and come with a secure backend, complete database integration, and hosting. We're dedicated to providing an outstanding user experience and ensuring your satisfaction through our exceptional UI and UX design." />
        <br />
        <Para
          content="It ensures to understand the need and necessity of our client and end
        users of the websites It gives an wide and more creative and adding
        inovative features and functionality as per your will ."
        />
        <Heading content="My Journey" />
        <Para
          content="My journey into the world of programming began with curiosity and a
        determination to understand the intricate workings of the digital
        universe. As a full-stack web developer, I have had the opportunity to
        delve into both front-end and back-end technologies, crafting seamless
        and visually appealing websites and applications. Each project I
        undertake is not just a piece of code; it's a creative endeavor where I
        blend functionality with aesthetics to deliver impactful solutions."
        />
      </Content>
        <Heading content="Why I Code" />
        <Para
          content="
          For me, coding is more than just lines of text; it's a way to express my
          creativity and solve real-world problems. I am captivated by the endless
          possibilities that programming offers, from building interactive web
          interfaces to optimizing algorithms for efficiency. The ability to bring
            ideas to life through code is what drives my passion for computer
            science."
            />
        <Heading content="Skills and Expertise" />
        <Para
          content="I possess a diverse skill set that includes proficiency in languages
          such as HTML, CSS, JavaScript, and backend frameworks like Node.js. My
          toolkit also includes experience with databases, version control
          systems, and web development libraries. With a keen eye for detail and a
          commitment to continuous learning, I am always striving to enhance my
          skills and stay updated with the latest industry trends."
          />
        <Heading content="Beyond Coding" />
        <Para
          content="While coding is my primary focus, I am also a firm believer in the
          importance of teamwork, communication, and problem-solving. I actively
          engage in collaborative projects, hackathons, and coding competitions,
          honing not only my technical skills but also my ability to work
          effectively in a team-oriented environment. I find inspiration in the
          collaborative spirit of the tech community, and I am eager to contribute
          meaningfully to the field."
        />

        <Heading content="Let's connect" />
        <Para
          content="I am thrilled to be on this journey of growth and innovation, and I am
            always open to new opportunities, challenges, and collaborations. If you
            share my passion for technology or have an exciting project in mind, I
            would love to hear from you. Let's connect and explore the endless
            possibilities that the world of web development has to offer. Thank you
            for visiting my portfolio. I look forward to connecting with you and
            creating something extraordinary together!."
        />
    </main>
  );
}
