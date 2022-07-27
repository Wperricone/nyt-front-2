import React from 'react';
import ArticleTile from './ArticleTile';

const AllArticlesContainer = ({ allArticlesData }) => {
  if(allArticlesData.length) {
    const articleTile = allArticlesData.map(article => {
      return (
        <ArticleTile
        //section={article.section}
        title={article.title}
        key={article.url}
        />
        )
      })
      console.log("THERE", articleTile)
      console.log("HERE", allArticlesData)
      return (
        <div className='articles-container'>article Tile
        {articleTile}
      </div>
    )
  }
};

export default AllArticlesContainer;