import React, {useEffect, useState} from 'react';
import '../../css/news.css'; // Импорт CSS стилей
import SvgHome from '../../assetsImage/assets/house.svg';
import vk from '../../assetsImage/assets/icons8-вконтакте.svg';
import tg from '../../assetsImage/assets/icons8-телеграмма-app.svg';
import { Link } from 'react-router-dom';
import Simposium from '../../assetsImage/assets_news/Bezymyannyy.png'
import RenolitDTA from '../../assetsImage/assets_news/08.04.png'
import CompMc from '../../assetsImage/assets_news/COMP_MC.png'
import Kaluga from '../../assetsImage/assets_news/Конференция_в_Калуге.jpg'
import Forum from '../../assetsImage/assets_news/img_333_74_ff025f.jpeg'
import RenolinUnisyns from '../../assetsImage/assets_news/Anons-RENOLIN-UNISYN-OL.jpg'





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


    return (
        <main>
          <div className="product-section-with-images">
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
            <p className="product-title-text-style"><a href=""><Link to="/news">Новости</Link></a></p>
          </div>
          <div className="catalog-container">
            <h2 className="catalog-title">Новости</h2>
            <div className="product-card-list">
                <div className="product-card-list-line">
                    <a href="">
                        <Link to="news_1">
                            <div className="product-card-list-line-entity">
                                <div className="product-card-list-line-entity-card">
                                    <h4>11.04.2024</h4>
                                    <h3>Симпозиум в Ульяновске</h3>
                                </div>
                                    <p>
                                        Уважаемые господа, 24 и 25 апреля состоится технологический симпозиум компании ДМТ в Ульяновске. Наша компания выступает в рамках технологического партнера на данном мероприятии. И будем рады ответить на все дополнительные вопросы.
                                    </p>
                            </div>
                        </Link>
                    </a>
                    <a href="">
                        <Link to="news_2">
                            <div className="product-card-list-line-entity">
                                <div className="product-card-list-line-entity-card">
                                    <h4>08.04.2024</h4>
                                    <h3>Анонс производства RENOLIN DTA</h3>
                                </div>
                                <div>
                                    <p>
                                        Спешим вам сообщить, что на производственной площадке концерна FUCHS в Калуге стало доступно производство масел RENOLIN DTA широкого диапазона вязкостей
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </a>
                </div>
                <div className="product-card-list-line">
                    <a href="">
                        <Link to="news_3">
                            <div className="product-card-list-line-entity">
                                <div className="product-card-list-line-entity-card">
                                    <h4>05.04.2024</h4>
                                    <h3>Анонс производства компрессорных масел COMP MC</h3>
                                </div>
                                <div>
                                    <p>
                                        Спешим вам сообщить, что на производственной площадке концерна FUCHS в Калуге стало доступно производство RENOLIN COMP 46 MC, которое дополнило линейку высококачественных масел для винтовых и поршневых компрессоров серии RENOLIN COMP MC 68, 100 и 150 вязкости.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </a>
                    <a href="">
                        <Link to="news_4">
                            <div className="product-card-list-line-entity">
                                <div className="product-card-list-line-entity-card">
                                    <h4>03.04.2024</h4>
                                    <h3>Конференция в Калуге</h3>
                                </div>
                                <div>
                                    <p>
                                        В конце апреля в г. Калуга состоится III-я Международная Конференция «Смазочные и технологические материалы для металлургической и метизной промышленности».
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </a>
                    
                </div>
                <div className="product-card-list-line">
                    <a href="">
                        <Link to="news_5">
                            <div className="product-card-list-line-entity">
                                <div className="product-card-list-line-entity-card">
                                    <h4>21.12.2023</h4>
                                    <h3>Форум Стекло и современные технологии</h3>
                                </div>
                                <div>
                                    <p>
                                         14 и 15 декабря состоялся ежегодный международный форум «Стекло и Современные Технологии – XXI». Компания ФУКС ОЙЛ уже на протяжении нескольких лет участвует в данном мероприятии.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </a>
                    <a href="">
                        <Link to="news_6">
                            <div className="product-card-list-line-entity">
                                <div className="product-card-list-line-entity-card">
                                    <h4>21.02.2024</h4>
                                    <h3>Анонс производства синтетических компрессорных масел серии RENOLIN UNISYN OL</h3>
                                </div>
                                <div>
                                    <p>
                                    Уважаемые партнеры!
                                    Спешим вам сообщить, что на производственной площадке концерна FUCHS в Калуге стало доступно производство синтетических компрессорных масел серии RENOLIN UNISYN OL. Линейка масел включает продукты 46 и 68 вязкости.                                    
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </a>
                    
                </div>
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
                <a href=""><img src={vk} className="contact-section-banner" alt="Vkontakte"/></a>
                  <a href=""><img src={tg} className="contact-section-banner" alt="Telegram"/></a>
                </div>
            </div>
          </div>
        </div>
    </main>
    )
}

export default News;