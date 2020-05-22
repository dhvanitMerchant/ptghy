import React from 'react';
import ReactDOM from 'react-dom'
import './components/App.css'
import Menu from './components/Menu/Menu';
import Nav from './components/Navbar/Navbar';
import About from './components/About/About';
import Gallaries from './components/Gallaries/Gallaries';
import Pricing from './components/Pricing/Pricing';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import SocialLinks from './components/SocialLinks/SocialLinks'
/* eslint-disable jsx-a11y/anchor-is-valid */


/***********************
  Header Component
 ***********************/

const Header = props => {
  return (
    <header id="welcome-section">
     
      <div className="container">
        <h1>
          <span className="line">We</span>
          <span className="line">create Love</span>
          <span className="line">
            <span className="color">&</span> moments.
          </span>
        </h1>
        
      </div>
    </header>
  );
};

/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return (
    <footer>
      <div className="footer text-center">
        <div className="row">
          <div className="col-6 mb-4">
            <h3>THANKS FOR VISITING</h3>
            <p className="text-muted mb-0">© {new Date().getFullYear()} Krunalogy INC</p>
          </div>
          <div className="col-6 mb-4">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};
/***********************
  Main Component
 ***********************/

class App extends React.Component {
  state = {
    menuState: false
  };

  toggleMenu = () => {
    this.setState(state => ({
      menuState: !state.menuState
        ? 'active'
        : state.menuState === 'deactive'
          ? 'active'
          : 'deactive'
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Header />
        <About />
        <Gallaries />
        <Pricing />
        <Services />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
   

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

     

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility = header.style.visibility === 'hidden' && 'visible';
      else header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
      else navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          });
        }
      }
    })();
  }
}

ReactDOM.render(
  <div >
    <App />
  </div>,

document.getElementById('root'));