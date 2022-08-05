import React from 'react';
import ArticleTile from './ArticleTile';
import styled from "styled-components";

const ArticleTypeContainer = ({
  typesData }) => {
    if(typesData.length) {
      const articleTile = typesData.map(article => {
        console.log("URL", article.url)
        return (
          <ArticleTile
          //section={article.section}
          articleTitle={article.title}
          key={article.url}
          section={article.section}
          abstract={article.abstract}
          byline={article.byline}
          publishedDate={article.published_date}
          //multimedia={article.url}
          goToArticle={article.url}
          
          />
        )
      })
      return (
        <ArticleContainerSection className='articles-container'>{articleTile}
      </ArticleContainerSection>
    )
    }
  }

  export default ArticleTypeContainer;

  const ArticleContainerSection = styled.section`
border: solid black 2px;
`