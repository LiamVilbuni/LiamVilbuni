import React from "react";
import "@/styles/about.css";

const About = () => {
    return (
        <div className="about" id="about">
            <h1 className="about__heading">About Me</h1>
            <p className="about__description">
                I am a Full Stack Developer with a passion for building web applications and solving complex problems.
                I have experience in various technologies and frameworks, and I love to learn new things.
            </p>
            <p className="about__description">
                In my free time, I enjoy competitive coding, exploring cryptography, and music mixing.
                I play <a href="https://chess.com/member/InviBull" id='chess-link'>chess</a>. I also love to play other video games.
            </p>
            <div className="about__blank"></div>
        </div>
    );
}

export default About;
