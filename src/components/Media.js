import React from 'react';

export const Media = ({ media }) => {
  console.log(media)
  return (
    <div><img src={media.props.file.url} alt={media.props.title}/></div>
  );
};