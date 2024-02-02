import React from "react";
import { Link } from "react-router-dom";
import Article from "./Article-content";

const ArticleListPages = () => {
  return (
    <div>
      <h1>Articles</h1>
      {Article.map((article) => (
        <div key={article.Title}>
          <Link
            className={"article-list-item"}
            to={`/articles/${article.Title}`}
          >
            <h2>{article.Title}</h2>
            <p>{article.content1[0].substring(0, 500)}...</p>
          </Link>
          <Link
            className={"article-list-item"}
            to={`/articles/${article.Title2}`}
          >
            <h2>{article.Title2}</h2>
            <p>{article.content2[0].substring(0, 500)}...</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticleListPages;
