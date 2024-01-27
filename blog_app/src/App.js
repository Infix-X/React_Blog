import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePages from './pages/HomePages';
import AboutPages from './pages/AboutPages';
import ArticlePages from './pages/ArticlePages';
import ArticleListPages from './pages/ArticleListPages';
import NotFoundPages from './pages/NotFoundPages';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <div id="Page_ID">
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/about" element={<AboutPages />} />
            <Route path="/articles" element={<ArticleListPages />} />
            <Route path="/articles/:articleId" element={<ArticlePages />} />
            <Route path="*" element={<NotFoundPages />} />
         </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
