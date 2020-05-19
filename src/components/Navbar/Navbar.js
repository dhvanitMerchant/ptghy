import React from 'react';

export const Navbar = () => {
return (
<nav>
<div className="nav-wrapper container">
  <a href="#!" className="brand-logo center">Krunal</a>
  <ul className="left hide-on-med-and-down">
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