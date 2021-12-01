import { useState, useEffect } from "react"
import ArticleList from '../components/ArticleList/ArticleList.js'
import articlesAPI from '../api/ArticlesAPI';


function HomePage() {
  // states
  const [articles, setArticles] = useState([])
  
  // effects
  useEffect(() => {
    const getArticles = async () => {
      let data = await articlesAPI.fetchArticles()
      if (data) {
        setArticles(data)
      }
    }

    getArticles()
  }, [])

  // render
  return (
    <div>
      { 
        articles 
          ? <ArticleList articles={articles} />
          : <span>404: Error retrieving articles.</span>
      }
    </div>
  )
}

export default HomePage;






