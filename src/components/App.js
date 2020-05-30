import React from 'react';
import './App.css';
import './Responsive.css'
import Menu from './Menu/Menu';
import Nav from './Navbar/Navbar';
import About from './About/About';
import Gallaries from './Gallaries/Gallaries';
import Package from './Pricing/Package';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import ScrollUpButton from "react-scroll-up-button";
import Header from './pages/Header';
import Footer from './pages/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';


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


          <Router> 
                <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState}/>
                <Route
                 
                path='/' 
                render={props => (
                <div className="all">
                <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState}/>
                <Header/>
                <About />
                <Gallaries/>
                <Package />
                <Services/>
                <Contact/>
                <Footer/>
                <ScrollUpButton
                    ContainerClassName="backContainer"
                    TransitionClassName="backTransition"
                    EasingType="linear"/>
                </div>
                )}/>
               
          </Router>
                );
  }
    
    componentDidMount() {
      const navbar = document.querySelector('#navbar');
      const header = document.querySelector('#welcome-section');
  
  
      const buttons = document.querySelectorAll('.project');
      const overlay = document.querySelector('.overlay');
      const overlayImage = document.querySelector('.overlay__inner img');
  
      function open(e) {
        overlay.classList.add('open');
        const src= e.currentTarget.querySelector('img').src;
        overlayImage.src = src;
      }
  
      function close() {
        overlay.classList.remove('open');
      }
  
      buttons.forEach(button => button.addEventListener('click', open));
      overlay.addEventListener('click', close);
  
  
  
  
      window.onscroll = () => {
        let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
        if (scrollPos - 100 <= window.innerHeight)
          header.style.visibility = header.style.visibility === 'hidden' && 'visible';
        else header.style.visibility = 'hidden';
  
        if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
        else navbar.classList.remove('bg-active');
      };
  
      
    }
  }
export default App;
