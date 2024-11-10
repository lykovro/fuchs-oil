import React from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';

const NewsSection = () => {
  const latestNews = newsData.slice(0, 3); // Получаем только первые три новости

  return (
    <div className="news-section-container1">
      {latestNews.map((news) => (
        <div key={news.id} className="news-item">
          <Link to={`/news/${news.id}`}>
            <div className="blue-gradient-box">
              <div className="blue-gradient-box-text">
                <p className="announcement-text-css">{news.title}</p>
                <p className="announcement-text">{news.description}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
