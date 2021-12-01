import "./articleList.css"
import { ListGroup } from 'react-bootstrap';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js';


function ArticleList(props) {
  return (
    <ListGroup id="articles">
      { 
        props.articles.map((article, index) => (
          <ListGroup.Item key={index} className={index % 2 ? "odd-item" : "even-item"}>
            <ArticleTeaser { ...article } id={ index + 1 } />
          </ListGroup.Item>
        ))
      }
    </ListGroup>
  )
}

export default ArticleList;


