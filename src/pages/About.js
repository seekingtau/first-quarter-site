import '../App.css'
import herotextabout from '../static/images/hero-text-about.svg';
import arrow from '../static/images/arrow.svg';
import fqlogo from '../static/images/ui-asset-logo.svg'

const About = () => {
    return (
        <div className="main-container about">
            <div className="navbar-container">
                <div className="navbar-item">
                    <p>
                    <a href="/" className="styled-link">home</a>
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
            <img src={fqlogo} class="logo-image"/>
            <div className="hero-container">
                <img src={herotextabout} width="40%"/>
                <div class="about-blurb-container">
                    <p>Good startups happen everywhere. We hear that all the time. But we believe that good startups happen outside of the main centers, and with people outside the typical founder archetype.</p>
                    <div className="button-container about">
                        <p className='button-text about'>email us</p>
                        <img src={arrow} width="12px"/>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default About;
  