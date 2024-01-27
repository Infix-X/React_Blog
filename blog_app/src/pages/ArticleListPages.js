import Article from "./Article-content";
import { Link } from "react-router-dom";
const ArticleListPages = ()=>{
     
    return(
        <div>
            <h1>Article</h1>
            {
                Article.map(article=>(
                    <Link
          key={article.Title}
          className={"article-list-item"}
          to={`/articles/${article.Title}`}
        >
                    <div>
                        <h1>{article.Title}</h1>
                        <p>{article.content1[0].substring(0,500)}...</p>
                    </div>
                     <div>
                     <h1>{article.Title2}</h1>
                     <p>{article.content2[0].substring(0,500)}...</p>
                 </div>
                 </Link>
                ))
            }
           
            </div>
    )
}
export default ArticleListPages;