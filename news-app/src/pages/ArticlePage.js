import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Article from '../components/Article/Article.js'
import articlesAPI from '../api/ArticlesAPI';

function ArticlePage(props) {
  // states
  const [article, setArticle] = useState(null)

  // router props
  const params = useParams()

  // effects
  useEffect(() => {
    const getArticle = async () => {
      let data = await articlesAPI.fetchArticleByID(params.articleID)
      if (data) {
        setArticle(data)
      }
    }

    getArticle()
  }, [params.articleID])

  // render
  return (
    <div>
      {
        article 
          ? <Article { ...article } /> 
          : <span>404: Article Not Found</span>
      }
    </div>
  );
}

export default ArticlePage;

