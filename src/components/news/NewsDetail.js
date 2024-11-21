import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsData } from '../data/newsData';
import SvgHome from '../../assetsImage/assets/house.svg';

const NewsDetail = () => {
    const { id } = useParams();
    const news = newsData.find(item => item.id === id);

    if (!news) {
        return <p>Новость не найдена</p>;
    }

    return (
        <main>
                      <div className="product-section-with-images-navigation">
            <div className="svg-container">
            <a href=""><Link to="/"><img src={SvgHome} alt=""/></Link></a>
            </div>
            <div className="svg-container1">
                <svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <clipPath id="clip2_203_98" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="white" transform="translate(-0.29290000000000305, 0)" />
                      </clipPath>
                    </defs>
                    <g id="::before" data-node-id="203:107" xmlns="http://www.w3.org/2000/svg">
                      <g id="next.svg fill" data-node-id="203:108" clip-path="url(#clip2_203_98)">
                        <g id="next.svg" data-node-id="203:109">
                          <path id="Vector_2" data-node-id="203:110" d="M9.7071,7l5,5l-5,5" stroke="#90979C" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        </g>
                      </g>
                    </g>
                  </svg>            
            </div>
            <p className="product-title-text-style-navigation"><a href=""><Link to="/news">Новости</Link></a></p>
            <div className="svg-container1">
                <svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <clipPath id="clip2_203_98" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="white" transform="translate(-0.29290000000000305, 0)" />
                      </clipPath>
                    </defs>
                    <g id="::before" data-node-id="203:107" xmlns="http://www.w3.org/2000/svg">
                      <g id="next.svg fill" data-node-id="203:108" clip-path="url(#clip2_203_98)">
                        <g id="next.svg" data-node-id="203:109">
                          <path id="Vector_2" data-node-id="203:110" d="M9.7071,7l5,5l-5,5" stroke="#90979C" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        </g>
                      </g>
                    </g>
                  </svg>            
            </div>
            <p className="product-title-text-style-navigation"><a href=""><Link to={`/news/${id}`}>{news.title}</Link></a></p>
          </div>
            <div className="news_blocks_page">
                <h2>{news.title}</h2>
                <p>{news.date}</p>
                <div className="news_block">
                    <img src={news.image} alt={news.title} />
                    {news.fullText.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default NewsDetail;