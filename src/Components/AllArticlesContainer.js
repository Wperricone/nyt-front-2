import React from 'react';
import ArticleTile from './ArticleTile';
import styled from "styled-components";


const AllArticlesContainer = ({ allArticlesData }) => {
  if(allArticlesData.length) {
    const articleTile = allArticlesData.map(article => {
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
border: solid black 2px;
`