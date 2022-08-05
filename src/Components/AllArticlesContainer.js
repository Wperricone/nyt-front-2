import React from 'react';
import ArticleTile from './ArticleTile';
import styled from "styled-components";


const AllArticlesContainer = ({ allArticlesData }) => {
  if(allArticlesData.length) {
    const articleTile = allArticlesData.map(article => {
      //console.log("multimedia", article.multimedia[0].url)
      return (
        <ArticleTile
        articleTitle={article.title}
        key={article.url}
        section={article.section}
        abstract={article.abstract}
        byline={article.byline}
        goToArticle={article.url}
        publishedDate={article.published_date}
       // multimedia={article.mulitimedia[2].url}
        />
        )
      })
      // console.log("THERE", articleTile)
      // console.log("HERE", allArticlesData)
      return (
        <ArticleContainerSection className='articles-container'>{articleTile}
      </ArticleContainerSection>
    )
  }
};

export default AllArticlesContainer;

const ArticleContainerSection = styled.section`

border: solid black 5px;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
`
