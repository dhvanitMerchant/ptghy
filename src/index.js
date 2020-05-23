/* eslint-disable react/style-prop-object */
import React from 'react';
import ReactDOM from 'react-dom'
import './components/App.css'
import './components/Responsive.css'
import Menu from './components/Menu/Menu';
import Nav from './components/Navbar/Navbar';
import About from './components/About/About';
import Gallaries from './components/Gallaries/Gallaries';
import Pricing from './components/Pricing/Pricing';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import SocialLinks from './components/SocialLinks/SocialLinks'
import ScrollUpButton from "react-scroll-up-button";

/* eslint-disable jsx-a11y/anchor-is-valid */


/***********************
  Header Component
 ***********************/

const Header = props => {
  return (
    <header id="welcome-section">
     
      <div className="container">
      <a href="#welcome-section"  onClick={props.toggleMenu}>

        <h1>

          <span className="line">We</span>
          <span className="line">create Love</span>
          <span className="line">
            <span className="color">&</span> moments.
          </span>
        </h1>
        </a>
        
      </div>
      
      <div class="scrolldown container">
      <a href="#welcome-section"  onClick={props.toggleMenu}>
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
      </a>
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
      <section id="footer">
      <div className="footer text-center">
        <hr></hr>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h3>THANKS FOR VISITING</h3>
            <h6 className="date mb-0">© {new Date().getFullYear()} Moments</h6>
          </div>
          <div className="col-lg-6 mb-4">
            <SocialLinks  />
          </div>
        </div>
      </div>
      </section>
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
        <ScrollUpButton
        ContainerClassName="backContainer"
        TransitionClassName="backTransition"
        EasingType="linear" />
        
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