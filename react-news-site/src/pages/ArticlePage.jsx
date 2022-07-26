import {useParams} from 'react-router-dom'
import Article from '../components/Article'

function ArticlePage ({getArticleById}){

    let {articleID} = useParams()
    const article = getArticleById(articleID-1)

    return (
        <div>
            <Article {...article} />
        </div>
    )
}

export default ArticlePage