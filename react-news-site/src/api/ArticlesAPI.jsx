import axios from 'axios'

async function fetchArticleById (articleID) {
   let response = await axios.get('http://hn.algolia.com/api/v1/search?', {
        params:{
            tags: 'story_'+articleID
        }
    })
    return response
}

const fetchArticlesBySection = (section) => {
}

//
//const fetchArticles = (filters=null) => {
//}


export {
  fetchArticleById,
  //fetchArticlesBySection,
  //fetchArticles
}
