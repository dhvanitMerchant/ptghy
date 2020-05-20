import React from 'react';
import './Navbar.css';
// import styled from 'styled-components'

// const Big = styled.div`

// `;

export const Navbar = () => {
return (
<nav>
<div className="nav-wrapper container test">
  <a href="#!" className="brand-logo center">Krunal</a>
  <ul className="left hide-on-med-and-down test">
    <li><a href="sass.html">Home</a></li>
    <li><a href="badges.html">About</a></li>
  </ul>
  
  <ul className="right hide-on-med-and-down">
    <li><a href="badges.html">Galleries</a></li>
    <li><a href="badges.html">Contact</a></li>
  </ul>

</div>
</nav>
)
}