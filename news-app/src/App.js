import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// components
import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage.js';
import ArticlePage from './pages/ArticlePage.js';

function App() {
  // render
  return (
    <div>
      <AppNav />
      <HashRouter>
        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route exact path="/articles/:articleID" element={ <ArticlePage /> } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
