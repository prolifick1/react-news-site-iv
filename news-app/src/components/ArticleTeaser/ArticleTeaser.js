import "./articleTeaser.css"
import { Link } from "react-router-dom";

function ArticleTeaser(props) {
  return (
    <div>
      <div className="title">
        <Link className="title-link" to={`/articles/${props.id}`}>
          { props.title }
        </Link>
      </div>
      <div className="date">
        { props.created_date }
      </div>
    </div>
  )
}

export default ArticleTeaser;

