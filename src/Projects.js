import React from 'react';

import ProjectCard from './ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFigma, faChrome } from "@fortawesome/free-brands-svg-icons";

import squishModelVideo from './videos/SquishModel2.mp4';
import miniMinecraft from './videos/MiniMinecraft2.mp4';
import merck from './videos/merck.mp4';
import arxivDataset from './videos/arxiv_demo.mov';
import findMeFood from './videos/findmefood_demo.mp4';
import designCaseStudy from './videos/design.mp4';
import compiler from './videos/compiler.mp4';
import digitalTuner from './videos/tuner.mp4';
import ml from "./videos/ml.mp4";

import './Projects.css';

function Projects() {

    return (
        <div>
            <h3>Projects</h3>
            <div className="projects_array">

                <ProjectCard 
                    name="SquishModel" 
                    image={squishModelVideo} 
                    title="SquishModel: Images to 3D" 
                    role="Project Lead, Lead Developer" 
                    description="3D Photogrammetry pipeline. Led designers and developers in bi-weekly work sessions. Technologies used: React. React Three Fiber for 3D model manipulation. AWS S3 and Postgres database for model storage. Swift backend for API operations and interaction with Apple Object Capture API." 
                    duration="January 2024 - April 2024" 
                    icons={
                        <div className="icons">
                            <a href="https://github.com/PennSpark/sp24-3d-pipeline.git" className="github" target="_blank">
                                <FontAwesomeIcon icon={faGithub} style={{ color: "black" }} />
                            </a>
                            <a href="https://www.figma.com/design/Ca8BWfHXWMBvdRc1UBJqBi/SquishModel-UI%2FUX-Design?node-id=12%3A3&t=O9mTOqF8ALgSeuTt-1" className="figma" target="_blank">
                                <FontAwesomeIcon icon={faFigma} style={{ color: "black" }} />
                            </a>
                        </div>
                    }
                    playable={true}
                />
                <ProjectCard
                    name="Mini Minecraft"
                    image={miniMinecraft}
                    title="Mini Minecraft"
                    role="Developer (Procedural Terrain, Texturing, Weather)"
                    description="Created Minecraft in C++ with collaborators Kashyap Chatervedula and Sumanth Kadiyala. I implemented noise functions to procedurally generate biomes, created a datastructure to store mappings from blocks to textures, loaded vertex buffers to GPU, coded shaders on GPU, and procedural weather."
                    duration="November 2023 - December 2023"
                    icons={
                        <div className="icons">
                            <a href="https://github.com/CIS4600-Fall-2023/mini-minecraft-hill-yellow-lounge" className="github" target="_blank">
                                <FontAwesomeIcon icon={faGithub} style={{ color: "black" }} />
                            </a>
                        </div>
                    }
                    playable={true}
                />
                <ProjectCard
                    name="Oat Language Compiler"
                    image={compiler}
                    title="Oat Language Compiler"
                    role="Student Developer"
                    description="Coded compiler in OCaml: compilation of Oat language to x86Lite. Implemented lexer, parser, type checker, frontend, x86Lite backend. Support Structs, Function Pointers, Built-in Functions, Null References. Wrote Kempe's graph coloring dataflow algorithm for dataflow analyses: dead code elimination, liveness, register allocation. Collaborator: Paul Loh."
                    duration="January 2024 - April 2024"
                    icons={
                        <div className="icons">
                            <a href="https://github.com/upenn-cis3410/hw6-optimizations-spork.git" className="github" target="_blank">
                                <FontAwesomeIcon icon={faGithub} style={{ color: "black" }} />
                            </a>
                        </div>
                    }
                    playable={false}
                />
                <ProjectCard
                    name="Merck Quality Engineering Library"
                    image={merck}
                    title="Merck Quality Engineering Library"
                    role="Full-Stack Developer"
                    description="Developed user-friendly library tool for centralized storage of widely used code snippets keyed by topic and title with admin support for efficient data management. Created design on Figma. Implemented React frontend. Implemented Axios API calls. Made AWS API Gateway and DynamoDB table."
                    duration="June 2023 - August 2023"
                    icons={
                        <div className="icons">
                            No Links Due To Company Policy. <br/>
                            For more info, contact Jeff Kovaleski or William Mantz
                        </div>
                    }
                    playable={false}
                />
                <ProjectCard
                    name="ArXiv Dataset Analysis"
                    image={arxivDataset}
                    title="ArXiv Dataset Analysis"
                    role="Developer (Distributed BFS, Sentiment Analysis)"
                    description="Preprocessing, EDA, modeling on 500,000+ scholarly articles. Built graph (nodes: authors, edges: if they have authored on the same article). Made Apache Spark distributed BFS algorithm to analyze connectivity and degrees of separation between collaborating authors. Discovered subgraphs and cliques."
                    duration="March 2023 - May 2023"
                    icons={
                        <div className="icons">
                            <a href="https://github.com/jameswbaker/ArXivDatasetAnalysis.git" className="github" target="_blank">
                                <FontAwesomeIcon icon={faGithub} style={{ color: "black" }} />
                            </a>
                        </div>
                    }
                    playable={true}
                />
                <ProjectCard
                    name="User Productivity Design & Case Study"
                    image={designCaseStudy}
                    title="User Productivity Design & Case Study"
                    role="Designer"
                    description="Scheduling and journaling gets messy; wanted to have all planning resources in one place. Conducted user research: interviewed three students. Synthesized into user insights. Created wireframes, typography, color scheme based on insights. Created hi-fi version 1. User validation testing by a survey of 10+ users and 3 more user interviews. Implemented insights in final hi-fi."
                    duration="October 2023 - December 2023"
                    icons={
                        <div className="icons">
                            <a href="https://www.figma.com/proto/ZZyKqVtzIRqjm1eI8mgUrU/James-Baker---Design?page-id=387%3A2404&type=design&node-id=549-104&viewport=334%2C572%2C0.39&t=tUKo5ZevsuDZg9pn-1&scaling=scale-down" className="figma" target="_blank">
                                <FontAwesomeIcon icon={faFigma} style={{ color: "black" }} />
                            </a>
                        </div>
                    }
                    playable={false}
                />
                <ProjectCard
                    name="Amazon Food Review ML Analysis"
                    image={ml}
                    title="Amazon Food Review ML Analysis"
                    role="Developer (Logistic Regression, Neural Network)"
                    description="Used models to predict sentiment of food reviews to 90% accuracy. Applied Logistic regression models measured by accuracy, F1 Score (based on precision and recall). Varyied regularization levels, text analyzation methods (text vectorization, TF-IDF, n-grams. Collaborators: Vikram Singh, Taha Boty. Full paper included via Chrome button."
                    duration="March 2023 - April 2023"
                    icons={
                        <div className="icons">
                            <a href="https://github.com/Tbot101/CIS-5190-Project" className="github" target="_blank">
                                <FontAwesomeIcon icon={faGithub} style={{ color: "black" }} />
                            </a>
                            <a href="https://drive.google.com/file/d/13cKGA6bAUgHcJ_fSEqVJzKcSZHgkkC8C/view?usp=sharing"
                             className="pdf" target="_blank">
                                <FontAwesomeIcon icon={faChrome} style={{ color: "black" }} />
                             </a>
                        </div>
                    }
                    playable={false}
                />
                <ProjectCard
                    name="Find Me Food"
                    image={findMeFood}
                    title="Find Me Food"
                    role="Lead Developer"
                    description="Led 5-member software team to build mobile Food Truck review application with scalable functionality for 4+ local Philadelphia food trucks, earning Best Division Project of semester. Technologies: React Native with Apple Maps support, Axios, Django REST API."
                    duration="January 2023 - April 2023"
                    icons={
                        <div className="icons">
                            <a href="https://github.com/PennSpark/sp23-blue-FindMeFood.git" className="github" target="_blank">
                                <FontAwesomeIcon icon={faGithub} style={{ color: "black" }} />
                            </a>
                        </div>
                    }
                    playable={true}
                />
                <ProjectCard
                    name="Digital Tuner"
                    image={digitalTuner}
                    title="Digital Tuner"
                    role="Developer"
                    description="Digital tuner to read the pitch of an input sound using the Discrete Fourier Transform and Fast Fourier Transform. Analysis on accuracy and runtime on different sounds. With collaborator Gabe Smith. Technologies: Python, NumPy, Matplotlib."
                    duration="March 2023 - April 2023"
                    icons={
                        <div className="icons">
                            <a href="https://github.com/jameswbaker/FT-Tuner.git" className="github" target="_blank">
                                <FontAwesomeIcon icon={faGithub} style={{ color: "black" }} />
                            </a>
                        </div>
                    }
                    playable={false}
                />
            </div>
        </div>
    );
}

export default Projects;
