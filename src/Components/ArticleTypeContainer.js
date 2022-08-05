import React from 'react';
import ArticleTile from './ArticleTile';
import styled from "styled-components";

const ArticleTypeContainer = ({
  typesData }) => {
    if(typesData.length) {
      console.log("URL", typesData)
      const articleTile = typesData.map(article => {
        
        return (
          <ArticleTile
          //articleTitle={article.title}
          key={article.url}
          section={article.section}
          //abstract={article.abstract}
          byline={article.byline}
          publishedDate={article.published_date}
          //multimedia={article.mulitmedia}
          goToArticle={article.url}
          
          />
        )
      })
      console.log("TILE", articleTile)
      return (
        <ArticleContainerSection >{articleTile}
      </ArticleContainerSection>
    )
    }
  }

  export default ArticleTypeContainer;

  const ArticleContainerSection = styled.section`
border: solid black 5px;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
`
//align-items: right;