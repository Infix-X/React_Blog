import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './Article-content';
import NotFoundPages from './NotFoundPages';

const ArticlePages = () => {
  const { articleId } = useParams();
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/articles/${articleId}`);
        const newArticleInfo = response.data;
        setArticleInfo(newArticleInfo);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchData(); // Call the async function immediately
  }, [articleId]); // Make sure to include articleId as a dependency to re-fetch data when it changes

  console.log('Article ID from useParams:', articleId);

  // Find the article based on articleId
  const article = Article.find(article => article.Title === articleId || article.Title2 === articleId);

  debugger; // Pause execution here to inspect variables

  if (!article) {
    // Handle the case where the article is not found
    return <NotFoundPages />;
  }

  return (
    <div>
      <h1>{article.Author_name}</h1>
      <p>These article has upvotes are: {articleInfo.upvotes} upvotes(s)</p>
      {article.Title === articleId && (
        <>
          <h1>{article.Title}</h1>
          {article.content1.map((paragraph, i) => (
            <p key={`content1-${i}`}>{paragraph}</p>
          ))}
        </>
      )}
      {article.Title2 === articleId && (
        <>
          <h1>{article.Title2}</h1>
          {article.content2.map((paragraph, i) => (
            <p key={`content2-${i}`}>{paragraph}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default ArticlePages;
