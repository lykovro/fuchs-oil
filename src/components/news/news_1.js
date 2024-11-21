import React, {useEffect, useState, useRef } from 'react';
import '../../css/news_1.css'; // Импорт CSS стилей
import SvgHome from '../../assetsImage/assets/house.svg';
import { Link } from 'react-router-dom';
import Simposium from '../../assetsImage/assets_news/Bezymyannyy.png'




const News1 = () => {



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
                <p className="product-title-text-style-navigation"><a href=""><Link to='/news/news_1'>Симпозиум в Ульяновске</Link></a></p>
            </div>
            <div className='news_blocks_page'>
                <h2>
                    Симпозиум в Ульяновске
                </h2>
                <p>
                    03.04.2024
                </p>
                <div className='news_block'>
                    <img src={Simposium} alt="Симпозиум"/>
                    <p>
                         Уважаемые господа, 24 и 25 апреля состоится технологический симпозиум компании ДМТ в Ульяновске. Наша компания выступает в рамках технологического партнера на данном мероприятии. И будем рады ответить на все дополнительные вопросы.
                    </p>
                    <p>
                        Коллеги из компании ДМТ проведут вам экскурсию по  производству, вместе с партнёрами расскажут о последних новинках и тенденциях в станкостроении, сервисном обслуживании, новых системах мониторинга производства, оснащении и обслуживании, максимально эффективных возможностях финансирования и многом другом.
                    </p>
                    <p>
                        24-го числа Симпозиум откроет губернатор Ульяновской области Русских Алексей Юрьевич.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default News1;