import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import pdf from './resume.pdf';
import footpic from './pics/Picture1.png';
import React, { useState, useEffect } from 'react';
import { Modal, Fade } from '@mui/material';
import bg from './pics/stacked-waves-haikei (3).png';

function App() {
  const [menuStaggered, setMenuStaggered] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const filterBlurDimBG = { filter: modalVisible ? "blur(5px) brightness(50%)" : "none" };

  function toggleMenu() {
    setMenuStaggered(!menuStaggered);
  };        

  return (
    <div className="App">
      <div id="wrapper">
        
        <nav>
          <div id="nav-logo-section" class="nav-section">
            <img src={require('./pics/logo2.png')} style={{ height: '80%' }} alt="logo" class="logo"/>
          </div>
          <div id="nav-social-section" class="nav-section">
            <a href="https://soundcloud.com/jameti" className="soundcloud">
              <FontAwesomeIcon icon={faSoundcloud}/>
            </a>
            <a href="https://github.com/jameswbaker" className="github">
              <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href="https://www.linkedin.com/in/james-baker-4694b7206/" className="linkedin">
              <FontAwesomeIcon icon={faLinkedinIn}/>
            </a>
            <div style={{width:"30px"}}>

            </div>
          </div>
          <div id="nav-menu-section" class="nav-section">
            <a className="menu">
              <FontAwesomeIcon icon={faBars} style={{ display: menuStaggered ? 'none' : 'flex'}} onMouseEnter={toggleMenu}/>
              <FontAwesomeIcon icon={faBarsStaggered} style={{ display: !menuStaggered ? 'none' : 'flex'}} onMouseLeave={toggleMenu} onClick={(e) => setModalVisible(!modalVisible)}/>
              {/* add transition when clicked */}
            </a>
          </div>

          <Modal
            container={() => document.getElementById('wrapper')} 
            open={modalVisible} 
            style={{ zIndex: "0", position: "sticky" }}
          >
            <Fade in={modalVisible} easing={"0.1s"}>
              <div id="modal-menu">
                <div id="modal-menu-items">
                  <a onClick={(e) => setModalVisible(false)}>BACK</a>
                  <a href="#home" onClick={(e) => setModalVisible(false)} class="menu-item">HOME</a>
                  <a href="#about" onClick={(e) => setModalVisible(false)}  class="menu-item">ABOUT</a>
                  <a href="#projects" onClick={(e) => setModalVisible(false)}  class="menu-item">PROJECTS</a>
                  <a href="#resume" onClick={(e) => setModalVisible(false)}  class="menu-item">RESUME</a>
                </div>
                <div id="menu-background-pattern">

                </div>
              </div>
            </Fade>
          </Modal>
        </nav>

        <div id="home" class="anchor" style={{ position: "relative", top: "-500px"}}></div>

        <div class="titles" style={{ filter: modalVisible ? "blur(5px)" : "none" }}>
          <h1 class="title">James Baker</h1>
          <h2 class="subtitle">cooking up amazing things</h2>
        </div>

        <div id="menu-background-pattern" style={{ visibility: modalVisible ? "hidden" : "visible"}}/>
        
        <header>
          <img src={require('./pics/blurred2.jpeg')} alt="BackBackBackground" class="backbackbackground"/>
          <img src={require('./pics/background-removed/rmbg.png')} alt="BackBackground" class="backbackground" style={filterBlurDimBG}/>
          <img src={require('./pics/background-removed/background_rm.png')} alt="Background" class="background" style={filterBlurDimBG}/>
          <img src={require('./pics/background-removed/belevedere-PhotoRoom.png-PhotoRoom.png')} alt="Foreground" class="foreground" style={filterBlurDimBG}/>
          <img src={require('./pics/background-removed/belevedere_front.png')} alt="ForeForeground" class="foreforeground" style={filterBlurDimBG}/>
        </header>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <section className="cover1" style={filterBlurDimBG}>
          <div id="about" class="anchor"></div>
          <div style={{ height: '170px'}}></div>
          
          <div className="About" class="body-section">
            <div id="about-section">
              <div>
                <h3>About</h3>
                <div id="about-subtext">
                  <p>
                    I'm a rising third year at the University of Pennsylvania.
                  </p>
                  <p>
                    I'm still figuring out exactly what I want to do and pursuing all things that interest me!
                  </p>
                  <p>
                    Right now, I'm interested in math, software development, data science, and UI/UX.
                    I'm open to new software engineering / startup / other interesting opportunities.
                  </p>
                </div>
              </div>
              
              <img src={require("./pics/pfp1.jpg")} id="pfp"></img>

            </div>
          </div>
          <div style={{ height: '70px'}}></div>
          <div id="projects" class="anchor"></div>
          <div style={{ height: '80px'}}></div>
          <img src={bg} style={{width: "100%", position: "absolute", left: "0", top: "25%", zIndex: "-1", height: "10%"}}></img>

          <div className="Projects" class="body-section">
            <h3>Projects</h3>

            <div style={{ height: '20px'}}></div>

            <div className="project_panes">
              <div className="project_pane">
                <h4>Merck QE Library</h4>
                
                <div className="project_description">
                Designed and developed a user-friendly library tool, employing a React frontend and 
                leveraging AWS cloud resources (API Gateway, Lambda, DynamoDB) for centralized storage of widely 
                used code snippets categorized by topic and title. Also created a user-centric Confluence landing page in close collaboration with stakeholders.
                </div>
              </div>
              <div className="project_pane">
                <h4>FindMeFood</h4>

                <a href="https://github.com/PennSpark/sp23-blue-FindMeFood">CLICK 4 GITHUB</a>
                
                <div className="project_description">
                Led a 5-member software team in creating a mobile app for reviewing Food Trucks, featuring 
                15 local Philadelphia trucks. Incorporated React Native, Maps support, Axios, REST API endpoints, and Django database. 
                The project won Best Division Project of the semester. 
                </div>
              </div>
              <div className="project_pane">
                <h4>ArXiv Dataset Analysis</h4>

                <a href="https://github.com/jameswbaker/ArXivDatasetAnalysis">CLICK 4 GITHUB</a>
                
                <div className="project_description">
                  <p>
                    Analyzed a vast dataset of 500,000+ academic papers with preprocessing, EDA, and modeling. 
                    Utilized Apache Spark's distributed BFS algorithm on a constructed graph to study connections 
                    between collaborating authors, discovering distinct subgraphs and cliques.
                  </p>
                </div>
              </div>
              <div className="project_pane">
                <h4>FT Tuner</h4>

                <a href="https://github.com/jameswbaker/FT-Tuner">CLICK 4 GITHUB</a>
                
                <div className="project_description">
                  description
                </div>
              </div>
            </div>

            <div style={{ height: '20px'}}></div>

            <div id="btns_container" class="anchor">
              <button>L</button>
              <button>R</button>
            </div>
          </div>

          <div style={{ height: '75px'}}></div>
          <div id="resume"></div>
          <div style={{ height: '75px'}}></div>

          <div className="Resume" class="body-section">
            <h3>Resume</h3>

            <div>
              <iframe src={pdf+"#zoom=90%"} width="764px" height="1024px"/>
            </div>
          </div>

          <p style={{position: "absolute", bottom: "3%", fontSize:"20px", right: "10%" }}>
            photo credits @ isola2000.com
          </p>
          <p style={{position: "absolute", bottom: "2%", fontSize:"20px", right: "10%" }}>
            website designed and developed by james baker
          </p>
          

          <footer>
            <img src={footpic} style={{ width: "125%" }}></img>
          </footer>
        </section>
        
      </div>
    </div>
  );
}

export default App;
