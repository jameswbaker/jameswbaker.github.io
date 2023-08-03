import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import pdf from './resume.pdf';
import footpic from './pics/Picture1.png';
import React, { useState } from 'react';
import { Modal } from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link';

function App() {
  const [menuStaggered, setMenuStaggered] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function toggleMenu() {
    setMenuStaggered(!menuStaggered);
  }

  return (
    <div className="App">
      <div class="wrapper">
        
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
        </nav>

        <div id="home" class="anchor" style={{ position: "relative", top: "-500px"}}></div>

        <Modal 
          open={modalVisible} 
        >
          <div id="modal_menu">
            <button onClick={(e) => setModalVisible(false)}>BACK</button>
            <a href="#home" onClick={(e) => setModalVisible(false)}>HOME</a>
            <a href="#about" onClick={(e) => setModalVisible(false)}>ABOUT</a>
            <a href="#projects" onClick={(e) => setModalVisible(false)}>PROJECTS</a>
            <a href="#resume" onClick={(e) => setModalVisible(false)}>RESUME</a>
          </div>
        </Modal>

        <div class="titles">
          <h1 class="title">James Baker</h1>
          <h2 class="subtitle">cooking up amazing things</h2>
        </div>
        
        <header>
          <img src={require('./pics/blurred2.jpeg')} alt="BackBackBackground" class="backbackbackground"/>
          <img src={require('./pics/background-removed/rmbg.png')} alt="BackBackground" class="backbackground"/>
          <img src={require('./pics/background-removed/background_rm.png')} alt="Background" class="background"/>
          <img src={require('./pics/background-removed/belevedere-PhotoRoom.png-PhotoRoom.png')} alt="Foreground" class="foreground"/>
          <img src={require('./pics/background-removed/belevedere_front.png')} alt="ForeForeground" class="foreforeground"/>
        </header>

        <img src={require('./pics/snowy.gif')} style={{ top: '5px', height: '470%', width: '200%' }} class="snow"/>

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

        <section className="cover1">
          <div id="about" class="anchor"></div>
          <div style={{ height: '100px'}}></div>
          
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
          <div style={{ height: '125px'}}></div>
          <div id="projects" class="anchor"></div>
          <div style={{ height: '25px'}}></div>
          <div className="Projects" class="body-section">
            <h3>Projects</h3>

            <div style={{ height: '20px'}}></div>

            <div className="project_panes">
              <div className="project_pane">
                <h4>Merck QE Library</h4>
                
                <div className="project_description">
                  description
                </div>
              </div>
              <div className="project_pane">
                <h4>FindMeFood</h4>
                
                <div className="project_description">
                  description
                </div>
              </div>
              <div className="project_pane">
                <h4>ArXiv Dataset Analysis</h4>
                
                <div className="project_description">
                  description
                </div>
              </div>
              <div className="project_pane">
                <h4>FT Tuner</h4>
                
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

          <div style={{ height: '125px'}}></div>
          <div id="resume"></div>
          <div style={{ height: '25px'}}></div>

          <div className="Resume" class="body-section">
            <h3>Resume</h3>

            <div>
              <iframe src={pdf+"#zoom=90%"} width="764px" height="1024px"/>
            </div>
          </div>

          <footer>
            <img src={footpic} style={{ width: "125%" }}></img>
          </footer>
        </section>
        
      </div>
    </div>
  );
}

export default App;
