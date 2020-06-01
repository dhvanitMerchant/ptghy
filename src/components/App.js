/* eslint-disable strict */
/* eslint-disable no-undef */
import React from 'react';
import './App.css';
import './Responsive.css'
import './App.scss';


import About from './About/About';
import Package from './Pricing/NewPackage';
import Contact from './Contact/Contact';
import ScrollUpButton from "react-scroll-up-button";
import Footer from './pages/NewFooter';
import MainNav from './Navbar/MainNavbar';
import Header from './pages/Header';
import Gallaries from './Gallaries/Gallaries';


class App extends React.Component{


  render() {
  return(
    <div className="App">
      <MainNav />
      <Header /> 
      <About />
      <Gallaries />
      <Package />
      {/* <Services /> */}
      
      <Contact />
      <ScrollUpButton style={{padding:'5px'}} />
      <Footer />

    </div>
  )
  
}

componentDidMount() {
  
    
    (function($) {
      $('.js-nav a').click(function(e) {
        e.preventDefault();
  $('body, html').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 750);
  });
  
  $('body').scrollspy({
  target: '.navbar-fixed-top',
  offset: 60
});

  $('#topNav').affix({
    offset: {
      top: 200
    }
  });
  new WOW().init();
  
  $('a.page-scroll').bind('click', function(event) {
    var $ele = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($ele.attr('href')).offset().top - 60)
      }, 1450, 'none');
      event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
      /* always close responsive nav after click */
      $('.navbar-toggle:visible').click();
    });
    
    $('#galleryModal').on('show.bs.modal', function (e) {
      $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });
    
  })(jQuery);
  
}


}
export default App;
