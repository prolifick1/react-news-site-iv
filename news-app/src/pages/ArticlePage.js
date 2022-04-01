import { useState } from "react"
import { useParams } from "react-router-dom";
import Article from '../components/Article/Article.js'
import News from '../data/news.json';

function ArticlePage() {
  const params = useParams()

  const articleIndex = params.articleID - 1;
  const [article, setArticle] = useState(News[articleIndex]);

  return (
    <div>
      {
        article 
          ? <Article { ...article } image={ article.multimedia.length ? article.multimedia[2].url : null } /> 
          : <span>404: Article Not Found</span>
      }
    </div>
  );
}

export default ArticlePage;
