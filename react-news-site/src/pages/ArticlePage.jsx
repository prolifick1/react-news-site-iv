import {useParams} from 'react-router-dom'
import Article from '../components/Article'

function ArticlePage ({articles}){

    let {articleID} = useParams()

    const article = articles[articleID-1] // -1 because we added 1 in the url to make it restful

    return (
        <div>
            <Article {...article} />
        </div>
    )
}

export default ArticlePage