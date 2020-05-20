import React from 'react';
import {render} from 'react-dom';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';


render (
  <div>

    <Navbar />
    <About />
  
  </div>,
  
    document.getElementById('root')

)