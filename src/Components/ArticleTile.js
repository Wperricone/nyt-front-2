import React from 'react';
import styled from "styled-components";

//import { Link } from 'react-router-dom';

const ArticleTile = ({ articleTitle, section, abstract, byline, publishedDate, multimedia }) => {
  return (
    <TileSection className='tile'>
      <h3 className='article-title'>{articleTitle}
        <p className='article-section'>Section: {section}
        </p>
        <p className='article-abstract'>{abstract}</p>
        <p className='article-byline'>{byline}</p>
        <p className='published-date'>Date published: {publishedDate}</p>
        {/* <img className='multimedia'/> */}
      </h3>
    </TileSection>
  )
}

export default ArticleTile;

const TileSection = styled.section`
border: solid red 2px;
`