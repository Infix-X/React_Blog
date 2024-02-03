import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundPages from './NotFoundPages';
import ArticleContentmin from './ArticleContentmin';

const ArticlePages = () => {
  const { articleId } = useParams();
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0 });
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
     
        const response = await axios.get(`/api/articles/${articleId}`);
        const newresponse = response.data;
      setArticleInfo(newresponse);
    }

    loadContent();
  }, [articleId]);

  if (!articleInfo) {
    return <NotFoundPages />;
  }
  return <ArticleContentmin article={articleInfo} articleId={articleId} />;
  
};

export default ArticlePages;
