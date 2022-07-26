# News Site Part IV

## High Level Objectives

  1. Create a JavaScript module that handles retrieving article data from an API using [Axios](https://axios-http.com/docs/intro).
  2. Use the [HackerNews API](https://hn.algolia.com/api) to fetch the news articles
  3. Integrate the module above into the News Site app using the `useEffect()` hook.
  4. Slightly refactor the AppNav & ArticleDetails components
  

## Initial Setup

Again you have a choice to either use the solution code provided in this repo or to copy over your own code from the two previous News Site challenges.  If you choose to use your own code, the files you'll want to copy to this new codebase are:
 - src/main.jsx
 - src/App.jsx
 - src/components/Article.jsx
 - src/components/ArticleList.jsx
 - src/components/ArticleTeaser.jsx
 - src/components/AppNav.jsx
 - src/components/Search.jsx
 - src/pages/HomePage.jsx
 - src/pages/ArticlePage.jsx
 - src/pages/SectionPage.jsx
 - package.json

Once you've copied over these files, run ```npm install```  and then ```npm run dev``` - verify that no errors appear in your browser console or terminal, and that your app functions the same as it did in the last challenge.

## The News/Article API
So far, the data that drives our News Site has been contained within a static JSON file - `./src/data/news.json`.  We will now begin connecting our front-end to the hacker news API, that provides real news data. We should define at least 3 functions that help us fetch data from the API.

The functions are:
- `fetchArticleByID(id)` - given an article ID, returns an Article object with the given ID.
- `fetchArticlesBySection(section)` - returns a list of articles whose `section` attribute matches the section argument.
- `fetchArticles(filters)` - returns a list of articles. The filters argument is optional - if no filters are provided, an array of all the articles are returned. If filters are provided, an array of Articles that meet the criteria are returned.

For this, we want you to use async/await.
- To make API calls to outside resources within your React app, you have to use axios to make `get` requests
- axios is asynchronous (i.e., not synchronous / happening out of order)
- `axios.get` returns a Javascript `Promise` object. These `Promise` objects are basically Javascript's immediate response to you, saying "Hey I have received your request. I `Promise` to respond when I can."
- `Promise` objects must be resolved in order to get to the data using the`async/await` functionality built into Javascript
- Error-handling: whenever calling out to an API, there is always a possibility of an error occuring. To handle this error on the client-side and give our user proper feedback, we'll tack on a [.catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) at the end of our promise chain or you can put the api call in a `try{}` and catch errors with `catch(error){}`


### React and the Virtual DOM
Before we dive into how our page compoments will use our client-side API methods, let's take a quick detour to better understand how React components work. For the sake of time, we'll keep this explanation at a high-level. For a deeper explanation, you can check out this [handy blog post](https://programmingwithmosh.com/react/react-virtual-dom-explained/) about the Virtual DOM. React itself just lightly touches upon the subject in its FAQ [here](https://reactjs.org/docs/faq-internals.html).

The first thing to know is that traditional DOM manipulation is very slow. React quickly gained popularity as a framework because of its speed. Instead of repainting the _entire_ DOM whenever state is changed, React keeps a "virtual" representation of what the UI should look like, and when state changes, it compares the updated "virtual" representation to the actual DOM, identifies the differences, and _only_ updates what has changed.

Since Facebook created React, we'll use their web app as an example. Looking at a facebook user's homepage, it's reasonable to assume that there are different components for stories, newsfeed, chat, etc. If a new story is added to the page, only the stories component needs to know about the state change and update itself and/or its child components accordingly. Or if you scroll down your newsfeed and trigger a new fetch for more posts (via infinite scroll), only the newsfeed component (and/or its child components) needs to update.

## Integrating ArticlesAPI.js into your App
At the moment, there is one component that is importing the json data and that is App.jsx
We might want to have each page consume its own data instead of keeping it in the `App.jsx` component but we can do that later. We can start in our main app file first.


### useEffect() -- example of api consumption
We'll be using the useEffect() hook to fetch our data from the API.

```javascript
import { useState, useEffect } from 'react'

function Component {
  const [someDataFromAnAPI, setSomeDataFromAnAPI] = useState(null)

  async function getData() {
      try {
        const jsonResponse = await CallAPI()
        setSomeDataFromAnAPI(jsonResponse)
      } catch (error) {
        console.error('Error occurred fetching data: ', error);
      }
    }

  useEffect(() => {
    getData()
  }, [])

  return <ChildComponent data={someDataFromAnAPI} />
}
```

[HackerNews API docs](https://hn.algolia.com/api)

We are using the `useEffect()` hook to tell React what we want to do after our component renders. Notice that `useEffect()` takes two arguments:

1. A function to run after each render.
2. (optional) An array of what pieces of state this function should hook into. By default, `useEffect()` runs your function after every component render. Imagine we had 10 pieces of state in our component -- for this particular `useEffect()`, it is unnecessary to run our function if any of the other 9 pieces of state change if we onlt care about one of the states

But why do we have an inner function `getData`?
`useEffect()` cannot be made into an async funtion. Therefore, when fetching data asynchronously, the common pattern is to create an inner `async/await` function, and then call it only if a certain condition is met (in this case, we only call it if we don't have data yet). So the cycle goes: component is mounted and rendered to the DOM --> `useEffect()` is called and sees that we don't have data, so it calls `getData()`, which sets the component state --> the component is re-rendered with the updated data --> `useEffect()` is called again, but it sees we have data, so it does nothing.

There are several other use cases for `useEffect()`, but we'll stick to this for now. Using this pattern, go ahead and refactor `HomePage.js` and `ArticlePage.js` as functional components that use the `useEffect()` hook.

We start with state containing a null value for the `someDataFromAnAPI` key. In the `async getData()` method, we're telling React that we're about to run an asynchronous method (`CallAPI()`). We `await` for `CallAPI()` to finish before setting its resolved response to `jsonResponse` and then setting our Component's state.

Calling `setSomeDataFromAnAPI` triggers the component update process - at this point, our component is re-rendered.  Subsequently, the ChildComponent contained within the render re-renders - it's **data** prop is set to `someDataFromAnAPI`, which now contains the data that was returned from the API/Web Service - which then is, presumably, used to render content.



The final goal is to recreate the [hackernews website](https://news.ycombinator.com/)

- Complete the three api functions: `fetchArticleByID`,`fetchArticles`, and `fetchArticlesBySection`
- Update the `data/sections.json` file to have sections that match the HN site
- Integrate the above api consumption pattern fully into your page files `src/pages/HomePage.js` , `src/pages/ArticlePage.js` and `src/pages/SectionPage.js` so that they are functional and each fetch the data related to them
   - this will probably mean refactoring the child components as well to work with our new pattern

Last thing to do is styling :) Have fun!


