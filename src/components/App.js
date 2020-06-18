/* eslint-disable strict */
/* eslint-disable no-undef */
import React from 'react';
import './App.css';
import './Responsive.css'
import './App.scss';
import Routes from './routes';
import MainNav from './Navbar/MainNavbar';
import ScrollToTop from './ScrollToTop';

export default function App() {
  return (
    <div className="App">
      <Routes />
      <MainNav />
      <ScrollToTop />
    </div>
  );
}
