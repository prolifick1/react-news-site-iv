import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage.js';
import ArticlePage from './pages/ArticlePage.js';

function App() {
  // render
  return (
    <div>
      <AppNav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route exact path="/articles/:articleID" element={ <ArticlePage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
