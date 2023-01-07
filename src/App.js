import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faSoundcloud } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        
        <nav>
          <div id="nav-logo-section" class="nav-section">
            <img src={require('./pics/logo2.png')} alt="logo" class="logo"/>
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
          </div>
          <div id="nav-menu-section" class="nav-section">
            <a href="menu" className="menu">
              <FontAwesomeIcon icon={faBars} />
              {/* add transition when clicked */}
            </a>
          </div>
        </nav>

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

        <img src={require('./pics/snowy.gif')} class="snow"/>

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
          <div className="About" class="body-section">
            About
          </div>
          <div className="Projects" class="body-section">
            Projects
          </div>
          <div className="Resume" class="body-section">
            Resume
          </div>
          <div className="Music" class="body-section">
            Music     
          </div>
          <div classname="Photos" class="body-section">
            Photos
          </div>
          <footer>
            Hello this is a footer
          </footer>
        </section>
        
      </div>
    </div>
  );
}

export default App;
