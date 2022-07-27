import React from 'react';
//import { Link } from 'react-router-dom';

const ArticleTile = ({ articleTitle }) => {
  return (
    <div className='tile'>
      <h3 className='article-title'>{articleTitle}
      </h3>
    </div>
  )
}

export default ArticleTile;