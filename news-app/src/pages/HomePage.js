import ArticleList from '../components/ArticleList/ArticleList.js'
import News from '../data/news.json';


function HomePage() {
  return (
    <div>
      <ArticleList articles={News} />
    </div>
  )
}

export default HomePage;

