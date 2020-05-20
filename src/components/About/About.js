import React from 'react';
import styled from 'styled-components'

const Big = styled.div`
  font-size: 28px;
  color:red;
`;

export const About = () => {
return (
<div className="container">
    <Big>HELLO</Big>
    <div className="row">
    <div className="col s12"><p>s12</p></div>
    <div className="col s12 m4 l2"><p>s12 m4</p></div>
    <div className="col s12 m4 l8"><p>s12 m4</p></div>
    <div className="col s12 m4 l2"><p>s12 m4</p></div>
  </div>
</div>
)
}