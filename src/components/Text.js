import React from 'react';

export const Text = ({ content, type , list}) => {

  return (
    <div>{type === 'H1' ? < h1 >{content} </h1> : <p>{content} {list}</p>}</div>
  );
};
