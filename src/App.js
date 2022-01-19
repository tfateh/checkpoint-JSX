import logo from './image/maquette-logo-mur-gris_35913-2122.jpg';

import './App.css';
import './Style.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="app-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
         <h1 className="title-red">FATEH Tarek</h1>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className="ligne-App">
         <img src= "/image/oasdom.jpg" className="my-profile" alt="myprofile" />
         <video controls>
         
         <source src="/video/ApprendreReactdeZéro-Partie1.mp4" / >
         
         </video>
         </div>
      </header>
    </div>
  );
}

export default App;
