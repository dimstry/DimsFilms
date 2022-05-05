import './App.css';
import TopBar from './components/TopBar';
import Intro from './components/Intro';
import Dracor from './components/Dracor';
import Anime from './components/Anime';
import Tranding from './components/Tranding';
import "./style/landingpage.css";

function App() {
  return (
    <div>
      {/* Intro */}
      <div className="myBG">
        <TopBar />
        <Intro />
      </div>
      {/* End Intro */}

      <div className="dracor">
        <Dracor />
      </div>
      
      <div className="anime">
        <Anime />
      </div>
      
      <div className="tranding">
        <Tranding />
      </div>

    </div>
  );
}

export default App;
