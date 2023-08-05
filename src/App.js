import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { faGit, faGithub, faLinkedinIn, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import pdf from './resume.pdf';
import footpic from './pics/Picture1.png';
import React, { useState, useEffect } from 'react';
import { Modal, Fade } from '@mui/material';
import bg from './pics/stacked-waves-haikei (3).png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function App() {
  const [menuStaggered, setMenuStaggered] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const filterBlurDimBG = { filter: modalVisible ? "blur(5px) brightness(50%)" : "none" };

  function toggleMenu() {
    setMenuStaggered(!menuStaggered);
  };

  const initLeft = 74+25;

  const [leftPosition, setLeftPosition] = useState(initLeft);

  const moveLeft = () => {
    if (leftPosition < initLeft) {
      setLeftPosition((prevLeft) => prevLeft+49);
    }
  }

  const moveRight = () => {
    if (leftPosition > initLeft-49*(4)) {
      setLeftPosition((prevLeft) => prevLeft-49)
    }
  }

  const activateMenu = () => {
    toggleMenu();
    setModalVisible(true);
  }

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
              <FontAwesomeIcon icon={faBars} style={{ display: menuStaggered ? 'none' : 'flex'}} onMouseEnter={activateMenu}/>
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

        <div id="home" className="anchor" style={{ position: "relative", top: "-500px"}}></div>

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

          {/*
          <img id="glimmer1" src={require("./gifs/frame_02_delay-0.03s.gif")}></img>
          <img id="glimmer2" src={require("./gifs/frame_02_delay-0.03s.gif")}></img>
          <img id="glimmer3" src={require("./gifs/frame_02_delay-0.03s.gif")}></img>
          <img id="glimmer4" src={require("./gifs/frame_02_delay-0.03s.gif")}></img>
          <img id="glimmer5" src={require("./gifs/frame_02_delay-0.03s.gif")}></img>
          <img id="glimmer6" src={require("./gifs/frame_02_delay-0.03s.gif")}></img>
          */}
          
          <div className="About" class="body-section">
            <div id="about-section">
              <div>
                <h3>About</h3>
                <div id="about-subtext">
                  <p>
                    I'm a rising third year at the University of Pennsylvania School of Engineering.
                  </p>
                  <p>
                    I enjoy listening and producing electronic music, lifting, and teaching. I am also a freelance DJ who has been hired to multiple events.
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
          <img src={bg} style={{width: "100%", position: "absolute", left: "0", top: "140vh", zIndex: "-1", height: "10%"}}></img>

          <div className="Projects" class="body-section">
            <h3>Projects</h3>

            <div style={{ height: '20px'}}></div>

            <div className="project_panes" style={{ left: `calc(${leftPosition}%)` }}>
              <div className="project_pane">
                <a>
                  <h4>Merck QE Library</h4>
                </a>
                
                <img src={require("./pics/merck.jpg")} height="180vh" width="75%"></img>
                <br/>
                
                <div className="project_description">
                  Designed and developed a user-friendly library tool, employing a React frontend and 
                  leveraging AWS cloud resources (API Gateway, Lambda, DynamoDB) for centralized storage of widely 
                  used code snippets. Seperately created a user-centric Confluence landing page for the Quality Engineering team.
                </div>
              </div>
              <div className="project_pane">
                <a href="https://github.com/PennSpark/sp23-blue-FindMeFood">
                  <h4>FindMeFood</h4>  
                </a>

                <video height="180vh" width="75%" controls><source src={require("./gifs/findmefood_demo.mp4")} type="video/mp4"></source></video>
                <br/>
                
                <div className="project_description">
                Led a 5-member software team in creating a mobile app for reviewing Food Trucks, featuring 
                4+ local Philadelphia trucks that could be quickly scaled to more. Incorporated React Native, Maps support, Axios, REST API endpoints, and Django database. 
                The project won Best Division Project of the semester. 
                </div>
              </div>
              <div className="project_pane">
                <a href="https://github.com/jameswbaker/ArXivDatasetAnalysis">
                  <h4>ArXiv Dataset Analysis</h4>
                </a>

                <video height="180vh" width="75%" controls><source src={require("./gifs/arxiv_demo.mov")} type="video/mp4"></source></video>
                <br/>
                
                <div className="project_description">
                  Analyzed a vast dataset of 500,000+ academic papers with preprocessing, EDA, and modeling. 
                  Utilized Apache Spark's distributed BFS algorithm on a constructed graph to study connections 
                  between collaborating authors.

                  Collaborators: Taha Boty, Rohan Gupta.
                </div>
              </div>
              <div className="project_pane">
                <a href="https://github.com/jameswbaker/FT-Tuner">
                  <h4>FT Tuner</h4>
                </a>

                <img src={require("./gifs/1cd8bf8e5962c76991366a2e9c611aa7.png")} height="180vh" width="75%"></img>
                <br/>
                
                <div className="project_description">
                  Digital tuner coded up in Python using the Fourier Transform algorithm. Accuracy and runtime analysis performed on different input sounds.
                  Collaborators: Gabe Smith.
                </div>
              </div>
              <div className="project_pane">
                <a href="https://github.com/Tbot101/CIS-5190-Project">
                  <h4>NLP ML Evaluation</h4>
                </a>

                <img src={require("./pics/0610a92ab840eeb46904aa461f4203b4.png")} height="180vh" width="75%"></img>
                <br/>
                
                <div className="project_description">
                  Tested variety of machine learning models including Logistic Regression, Feedforward Neural Network, and BERT on a food review dataset. Analyzed capabilities and shortcomings between different models. Observed under different dataset shifts.
                  Collaborators: Taha Boty, Vikram Singh.
                </div>
              </div>
              
            </div>

            <div style={{ height: '20px'}}></div>

            <div id="btns_container" class="anchor">
              <ArrowBackIosIcon style={{ display: (leftPosition < 74 ? "block" : "none"), position: "absolute", left: "25%", top: "30%", fontSize: "50px", opacity: "50%", transition: "0.5s ease" }} onClick={moveLeft} onMouseEnter={(e) => e.target.style.opacity = "100%"} onMouseLeave={(e) => e.target.style.opacity = "50%"}/>
              <ArrowForwardIosIcon style={{ display: (leftPosition > 74-49*(3) ? "block" : "none"), position: "absolute", right: "25%", top: "30%", fontSize: "50px", opacity: "50%", transition: "0.5s ease" }} onClick={moveRight} onMouseEnter={(e) => e.target.style.opacity = "100%"} onMouseLeave={(e) => e.target.style.opacity = "50%"}/>
            </div>
          </div>

          <div style={{ height: '75px'}}></div>
          <div id="resume"></div>
          <div style={{ height: '75px'}}></div>

          <div className="Resume" class="body-section">
            <h3>Resume</h3>

            <div>
              <iframe src={pdf+"#zoom="+"max(10vw, 10vh)"+"%"} width="764vw" height="1024vh"/>
            </div>
          </div>

          <p style={{position: "absolute", bottom: "3%", fontSize:"20px", right: "10%" }}>
            illustration credits @ isola2000.com
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
