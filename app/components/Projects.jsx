import React from "react";
import "@/styles/projects.css";

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects__blank" id="projects"></div>
            <h1 className="projects__heading">My Projects</h1>
            <ul className="projects__list">
                <li className="projects__item">
                    <h2 className="projects__item-title"><a href="https://github.com/LiamVilbuni/chemistrai" target="_blank" rel="noopener noreferrer">ChemistrAI</a></h2>
                    <p className="projects__item-description">
                        An AI trained to predict the outputs of chemical reactions to increase efficiency and reduce wastage and environmental pollution.
                    </p>
                </li>
                <li className="projects__item">
                    <h2 className="projects__item-title"><a href="https://github.com/LiamVilbuni/snippstack" target="_blank" rel="noopener noreferrer">SnippStack</a></h2>
                    <p className="projects__item-description">
                        A Python application that allows users to store, manage and use snippets efficiently.
                    </p>
                </li>
                <li className="projects__item">
                    <h2 className="projects__item-title"><a href="https://github.com/LiamVilbuni/chessme" target="_blank" rel="noopener noreferrer">ChessMe</a></h2>
                    <p className="projects__item-description">
                        A pygame application that allows 2 users to play chess against each other with a simple and intuitive interface.
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default Projects;