import logo from './logo.svg';
import herotexthome from './static/images/hero-text-home.svg';
import arrow from './static/images/arrow.svg';
import './App.css';

function App() {
  return (
    <div className="main-container home">
        <div className="navbar-container">
            <div className="navbar-item">
                <p>
                  <a href="/" className="styled-link">homepage</a>
                </p>
                <p>
                  <a href="/about" className="styled-link">about</a>
                </p>
                <p>
                  <a href="/partners" className="styled-link">partners</a>
                </p>
                <p>
                  <a href="/initiatives" className="styled-link">initiatives</a>
                </p>
                <p>
                  <a href="/contribute" className="styled-link">contribute</a>
                </p>
            </div>
        </div>
        <div className="hero-container">
            <img src={herotexthome} width="60%"/>
            <div className="button-container">
                <p>our thesis</p>
                <img src={arrow} width="16px"/>
            </div>
        </div>
    </div>
  );
}

export default App;