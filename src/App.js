import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import footpic from './pics/Picture1.png';
import React, { useEffect, useState } from 'react';
import { Modal, Fade } from '@mui/material';
import bg from './pics/stacked-waves-haikei (3).png';
import Projects from './Projects.js';
import Teaching from './Teaching.js';

function App() {
  const [menuStaggered, setMenuStaggered] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [pfpVisible, setPfpVisible] = useState(false);

  const filterBlurDimBG = { filter: modalVisible ? "blur(5px) brightness(50%)" : "none" };
  const turnOffPfp = { display: pfpVisible ? "flex" : "none" };

  function toggleMenu() {
    setMenuStaggered(!menuStaggered);
  };

  const activateMenu = () => {
    toggleMenu();
    setModalVisible(true);
  }

  useEffect(() => {
    setPfpVisible(window.innerWidth > 768);
  }, [window.innerWidth, pfpVisible, modalVisible]);

  return (
    <div className="App">
      <div id="wrapper">
        
        <nav>
          <div id="nav-logo-section" class="nav-section">
            <img src={require('./pics/logo2.png')} style={{ height: '80%' }} alt="logo" class="logo"/>
          </div>
          <div id="nav-social-section" class="nav-section">
            <a href="https://soundcloud.com/jameti" className="soundcloud" target="_blank">
              <FontAwesomeIcon icon={faSoundcloud}/>
            </a>
            <a href="https://github.com/jameswbaker" className="github" target="_blank">
              <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href="https://www.linkedin.com/in/james-baker-4694b7206/" className="linkedin" target="_blank">
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
                  <a href="#teaching" onClick={(e) => setModalVisible(false)}  class="menu-item">TEACHING</a>
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
          <h2 class="subtitle"> 
            Welcome to my portfolio. <br />
            
            I'm a software engineer and math teaching assistant. <br />
            
            Scroll down or hit the menu to learn more!
          </h2>
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
          <div style={{ height: '200px'}}></div>
          
          <div className="About" class="body-section">
            <div id="about-section">
              <div>
                <h3>About</h3>
                <div id="about-subtext">
                  <p>
                    I'm James Baker - a senior at the University of Pennsylvania.
                  </p>
                  <p>
                    I've had 2+ years of experience in software engineering and 3+ years of experience in teaching.
                  </p>
                  <p>
                    Right now, I'm interested in roles that combine technicality, creativity, and leadership.
                    I'm open to new software engineering / startup / other interesting opportunities.
                  </p>
                </div>
              </div>
              
              <img src={require("./pics/pfp1.jpg")} id="pfp" style={turnOffPfp}></img>

            </div>
          </div>

          <div id="projects" class="anchor"></div>
          
          <div style={{ height: '200px'}}></div>

          <Projects />

          <div style={{ height: '80px'}}></div>

          <div id="teaching" class="anchor"></div>

          <div style={{ height: '200px'}}></div>

          

          <Teaching />

          <div style={{ height: '80px'}}></div>


          <img src={bg} style={{width: "100%", position: "absolute", left: "0", top: "130vh", zIndex: "-1", height: "20%"}}></img>
          <img src={bg} style={{width: "100%", position: "absolute", left: "0", top: "250vh", zIndex: "-1", height: "10%"}}></img>

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
