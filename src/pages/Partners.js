import '../App.css'
import herotextpartners from '../static/images/hero-text-partners.svg'
import arrow from '../static/images/arrow.svg';

const Partners = () => {
    return (
        <div className="main-container partners">
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
                <img src={herotextpartners} width="40%"/>
                <div className="button-container">
                    <p>partners</p>
                    <img src={arrow} width="16px"/>
                </div>
            </div>
        </div>
    );
  };
  
  export default Partners;
  