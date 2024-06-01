import React from 'react';

import ProjectCard from './ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";

import squishModelVideo from './videos/SquishModel2.mp4';
import miniMinecraft from './videos/MiniMinecraft2.mp4';
import merck from './videos/merck.mp4';
import arxivDataset from './videos/arxiv_demo.mov';
import findMeFood from './videos/findmefood_demo.mp4';
import designCaseStudy from './videos/design.mp4';

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
            </div>
        </div>
    );
}

export default Projects;