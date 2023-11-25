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
                  <Link to="/" className="styled-link">homepage</Link>
                </p>
                <p>
                  <Link to="/about" className="styled-link">about</Link>
                </p>
                <p>
                  <Link to="/partners" className="styled-link">partners</Link>
                </p>
                <p>
                  <Link to="/initiatives" className="styled-link">initiatives</Link>
                </p>
                <p>
                  <Link to="/contribute" className="styled-link">contribute</Link>
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