import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundPages from './NotFoundPages';
import ArticleContentmin from './ArticleContentmin';

const ArticlePages = () => {
  const { articleId } = useParams();
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await axios.get(`/api/articles/${articleId}`);
        setArticleInfo(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    loadContent();
  }, [articleId]);

  if (loading) {
    return <ArticleContentmin article={articleInfo} articleId={articleId} />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!articleInfo) {
    return <NotFoundPages />;
  }

  
};

export default ArticlePages;
