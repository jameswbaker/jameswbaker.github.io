import './App.css';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <header>
          <img src={require('./pics/background-removed/belevedere-PhotoRoom.png-PhotoRoom.png')} alt="Background" class="background"/>
          <img src={require('./pics/background-removed/background_rm.png')} alt="Foreground" class="foreground"/>
          <h1 class="title">JAMES BAKER</h1>
        </header>
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
