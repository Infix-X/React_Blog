import React from 'react';

const ArticleContentmin = ({ article, articleId }) => {
  return (
    <div>
      <h1>{article.Author_name}</h1>
      {article.Title === articleId ? (
        <>
          <h1>{article.Title}</h1>
          {article.content1.map((paragraph, i) => (
            <p key={`content1-${i}`}>{paragraph}</p>
          ))}
        </>
      ) : (
        <>
          {article.Title2 === articleId && (
            <>
              <h1>{article.Title2}</h1>
              {article.content2.map((paragraph, i) => (
                <p key={`content2-${i}`}>{paragraph}</p>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ArticleContentmin;
