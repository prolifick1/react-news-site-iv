import "./article.css";

function Article(props) {
  return (
    <div className="article">
      <div className="article-image">
        { props.image && <img className="image" src={ props.image }/> }
      </div>
      <div className="article-details">
        <h2>{ props.title }</h2>
        <h4>{ props.createdDate }</h4>
        { props.byline && <p>{ props.byline }</p> }
        <p>{ props.abstract }</p>
      </div>
    </div>
  )
}

export default Article;

