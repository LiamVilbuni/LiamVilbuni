import React from "react";
import Image from "next/image";
import assets from "@/assets/assets";
import "@/styles/contact.css"

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h1>Contact Me</h1>
            <p>If you have any questions, feel free to reach out!</p>
            <ul>
                <li>
                    <a href="https://discord.com/users/1384808751197978655" target="_blank" rel="noopener noreferrer"><Image src={assets.discord} alt="Discord" width={48} height={48} /></a>
                </li>
                <li>
                    <a href="https://github.com/LiamVilbuni" target="_blank" rel="noopener noreferrer"><Image src={assets.github} alt="GitHub" width={48} height={48} /></a>
                </li>
                <li>
                    <a href="mailto:LiamVilbuni@gmail.com"><Image src={assets.email} alt="Email" width={48} height={48} /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><Image src={assets.linkedin} alt="LinkedIn" width={48} height={48} /></a>
                </li>
                <li>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><Image src={assets.twitter} alt="Twitter" width={48} height={48} /></a>
                </li>
            </ul>

        </div>
    );
};

export default Contact;
