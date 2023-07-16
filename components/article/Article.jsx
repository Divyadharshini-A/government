import React from 'react';
import './article.css';

const Article = ({ title , date, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <h1>{title}</h1>
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p><a href = "https://www.indiabudget.gov.in/">Click to read</a></p>
    </div>
  </div>
);

export default Article;