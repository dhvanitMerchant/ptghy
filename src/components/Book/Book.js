import React from 'react';


export const Book =({title= "No Title ",author= "Anonymous",pages= 0,freeBookmark}) => {
    return (
    <section>
      <h2>{title}</h2>
      <h2>by: {author}</h2>
      <p>Pages: {pages}</p>
      <p>FreeBookmark Today: { freeBookmark ? 'yes' : 'no'}</p>
      <hr />
    </section>
    )
  }