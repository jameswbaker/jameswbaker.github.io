import './App.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  return (
    <div className="App">
      <div class="wrapper">
        
        <nav>
          <div class="nav-menu-section">
            <a href="#">
              <FontAwesomeIcon icon="fa-solid fa-bars-sort" />
            </a>
          </div>
          <div class="nav-logo-section">
            <a href="#">
              <FontAwesomeIcon icon="fa-sharp fa-solid fa-j" />

              {/* THEN TRANSITION TO THIS WHEN YOU CLICK IT: <FontAwesomeIcon icon="fa-solid fa-bars-filter" /> */}

            </a>
          </div>
          <div class="nav-social-section">
            <a href="#">
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
            <a href='#'>
              <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon="fa-brands fa-soundcloud" />
            </a>
          </div>
        </nav>

        <div class="titles">
          <h1 class="title">James Baker</h1>
          <h2 class="subtitle">cooking up amazing things</h2>
        </div>
        
        <header>
          <img src={require('./pics/background-removed/belevedere-PhotoRoom.png-PhotoRoom.png')} alt="Foreground" class="foreground"/>
          <img src={require('./pics/background-removed/background_rm.png')} alt="Background" class="background"/>
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
