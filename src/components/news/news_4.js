import React, {useEffect, useState, useRef } from 'react';
import '../../css/news_2.css'; // Импорт CSS стилей
import SvgHome from '../../assetsImage/assets/house.svg';
import { Link } from 'react-router-dom';
import Photo from '../../assetsImage/assets_news/Konferens_Kaluga.jpg'






const News4 = () => {



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
                <p className="product-title-text-style-navigation"><a href=""><Link to='/news/news_4'>Конференция в Калуге</Link></a></p>
            </div>
            <div className='news_blocks_page'>
                <h2>
                     Конференция в Калуге
                </h2>
                <p>
                      03.04.2024
                </p>
                <div className='news_block'>
                    <img src={Photo} alt="Симпозиум"/>
                    <p>
                    В конце апреля в г. Калуга состоится III-я Международная Конференция «Смазочные и технологические материалы для металлургической и метизной промышленности». Это знаковое событие, которое, в очередной раз, соберет вместе экспертов и профессионалов отрасли, представителей высших учебных заведений, информационных служб и инжиниринговых компаний.
                    </p>
                    <p>
                    На мероприятии будут представлены доклады от ведущих специалистов, которые поделятся своим опытом и знаниями. Будут рассмотрены такие темы, как влияние смазочных и технологических материалов на ресурс основного и вспомогательного оборудования, а также качество и стоимость выпускаемой продукции основных переделов черной металлургии, метизной промышленности, автомобилестроения и производства автокомпонентов.                    </p>
                    <p>
                    Для участия в конференции можно направлять заявки с указанием ФИО ДОЛЖНОСТИ ПРЕДПРИЯТИЯ КОНТАКТНОГО ТЕЛЕФОНА  на адрес электронной почты dmitrii.troshin@fuchs-oil.ru                    
                    </p>
                </div>
            </div>
        </main>
    )
}

export default News4;