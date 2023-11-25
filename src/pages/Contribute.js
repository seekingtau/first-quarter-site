import '../App.css'
import arrow from '../static/images/arrow.svg';
import herotextcontribute from '../static/images/hero-text-contribute.svg'

const Contribute = () => {
    return (
        <div className="main-container contribute">
            <div className="navbar-container">
                <div className="navbar-item">
                    <p>
                    <a href="/" className="styled-link light">homepage</a>
                    </p>
                    <p>
                    <a href="/about" className="styled-link light">about</a>
                    </p>
                    <p>
                    <a href="/partners" className="styled-link light">partners</a>
                    </p>
                    <p>
                    <a href="/initiatives" className="styled-link light">initiatives</a>
                    </p>
                    <p>
                    <a href="/contribute" className="styled-link light">contribute</a>
                    </p>
                </div>
            </div>
            <div className="hero-container">
                <img src={herotextcontribute} width="40%"/>
                <div className="button-container">
                    <p>partners</p>
                    <img src={arrow} width="16px"/>
                </div>
            </div>
        </div>
    );
  };
  
  export default Contribute;
  