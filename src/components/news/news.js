import React, {useEffect, useState} from 'react';
import '../../css/news.css'; // Импорт CSS стилей
import SvgHome from '../../assetsImage/assets/house.svg';
import vk from '../../assetsImage/assets/icons8-вконтакте.svg';
import tg from '../../assetsImage/assets/icons8-телеграмма-app.svg';
import { Link } from 'react-router-dom';
import Simposium from '../../assetsImage/assets/banner_12x4_01_nosite.jpg'
import RenolitDTA from '../../assetsImage/assets_news/08.04.png'
import CompMc from '../../assetsImage/assets_news/COMP_MC.png'
import Kaluga from '../../assetsImage/assets_news/Конференция_в_Калуге.jpg'
import Forum from '../../assetsImage/assets_news/img_333_74_ff025f.jpeg'
import RenolinUnisyns from '../../assetsImage/assets_news/Anons-RENOLIN-UNISYN-OL.jpg'
import { newsData } from '../data/newsData';




const News = () => {

    const backgroundImages = [
        `url(${Simposium})`,
        `url(${RenolitDTA})`,
        `url(${CompMc})`,
        `url(${Kaluga})`,
        `url(${Forum})`,
        `url(${RenolinUnisyns})`,
    ];

    useEffect(() => {
        const cards = document.querySelectorAll(".product-card-list-line-entity-card");

        cards.forEach((card, index) => {
            card.style.backgroundImage = backgroundImages[index];
        });
    }, []);

      const vk_link = 'https://vk.com/permmaslafuchs'
const tg_link = 'https://t.me/permmaslafuchs'

 // Группируем новости по 2 в каждой подгруппе
 const groupedNews = [];
 for (let i = 0; i < newsData.length; i += 2) {
     groupedNews.push(newsData.slice(i, i + 2));
 }

    return (
        <main>
          <div className="product-section-with-images-navigation">
            <div className="svg-container">
            <a href=""><Link to="/fuchs-oil"><img src={SvgHome} alt=""/></Link></a>
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
          </div>
          <div className="catalog-container">
            <h2 className="catalog-title">Новости</h2>
            <div className="product-card-list">
                    {groupedNews.map((newsGroup, index) => (
                        <div className="product-card-row" key={index}>
                            {newsGroup.map(news => (
                                <Link to={`/news/${news.id}`} key={news.id} className="news-card-link">
                                    <div className="product-card-list-line-entity">
                                        <div
                                            className="product-card-list-line-entity-card"
                                            style={{ backgroundImage: `url(${news.image})` }}
                                        >
                                            <h4>{news.date}</h4>
                                            <h3>{news.title}</h3>
                                        </div>
                                        <p>{news.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ))}
            </div>
          </div>
        <div className="contact-section1">
          <div className="contact-section">
            <div className="contacts">
                <div className="contact-info-section-news">
                  <h2 className="contact-message">Есть вопросы?</h2>
                  <p className="contact-message1">Свяжитесь с нами любым удобным для Вас способом</p>
                </div>
                <div className="contact-info-logos">
                <a href={vk_link}><img src={vk} className="contact-section-banner" alt="Vkontakte"/></a>
                  <a href={tg_link}><img src={tg} className="contact-section-banner" alt="Telegram"/></a>
                </div>
            </div>
          </div>
        </div>
    </main>
    )
}

export default News;