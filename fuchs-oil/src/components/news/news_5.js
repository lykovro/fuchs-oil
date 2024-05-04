import React, {useEffect, useState, useRef } from 'react';
import '../../css/news_2.css'; // Импорт CSS стилей
import SvgHome from '../../assetsImage/assets/house.svg';
import { Link } from 'react-router-dom';
import Photo from '../../assetsImage/assets_news/img_333_74_ff025f.jpeg'






const News5 = () => {



    return (
        <main>
            <div className="product-section-with-images">
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
                <p className="product-title-text-style"><a href=""><Link to="/news">Новости</Link></a></p>
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
                <p className="product-title-text-style"><a href=""><Link to='/news/news_5'>Форум Стекло и современные технологии</Link></a></p>
            </div>
            <div className='news_blocks'>
                <h2>
                     Форум Стекло и современные технологии
                </h2>
                <p>
                   21.12.2023
                </p>
                <div className='news_block'>
                    <img src={Photo} alt="Симпозиум"/>
                    <p>
                    14 и 15 декабря состоялся ежегодный международный форум «Стекло и Современные Технологии – XXI». Компания ФУКС ОЙЛ уже на протяжении нескольких лет участвует в данном мероприятии.                    
                    </p>
                    <p>
                    В этом году предоставилась возможность выступить с докладом нашему коллеге, курирующему направление стекольной промышленности в компании. Участникам форума был представлена презентация о смазочных материалах компании FUCHS, где сделан акцент на выпускаемую продукцию для стекольной промышленности: масла и смазочно-охлаждающие жидкости для производства стеклотары и жидкости для резки листового стекла.                 
                    </p>   
                </div>
            </div>
        </main>
    )
}

export default News5;