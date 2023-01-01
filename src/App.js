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
            <a href="https://soundcloud.com/jameti">
              <FontAwesomeIcon icon={faSoundcloud} />
            </a>
            <a href="https://github.com/jameswbaker">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href='https://www.linkedin.com/in/james-baker-4694b7206/'>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <div id="nav-menu-section" class="nav-section">
            <a href="#">
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

        <section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum...
        </section>
      </div>
    </div>
  );
}

export default App;
