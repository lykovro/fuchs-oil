import React, {useEffect, useState, useRef } from 'react';
import '../../css/news_1.css';
import SvgHome from '../../assetsImage/assets/house.svg';
import { Link } from 'react-router-dom';
import titlePhoto from '../../assetsImage/assets_solutions/Forest_high.jpg'
import routesData from '../../routesData'; 



const DerevoObrProm = () => {

    const route = routesData.find(route => route.path === '/solution/derevoobrabatyvayushchaya_promyshlennost');

    return (
        <main>
            <div className="product-section-with-images">
                <div className="svg-container">
                <a href=""><Link to="/index"><img src={SvgHome} alt=""/></Link></a>
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
                <p className="product-title-text-style"><a href=""><Link to="/solution">Решения по отраслям</Link></a></p>
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
                <p className="product-title-text-style"><a href=""><Link to={route.path}>Деревообрабатывающая промышленность</Link></a></p>
            </div>
            <div className='news_blocks'>
                <h2>
                     Деревообрабатывающая промышленность
                </h2>
                <div className='news_block'>
                    <img src={titlePhoto} alt="Сельское хозяйство"/>
                    <p>
                        Уникальные требования деревообрабатывающей промышленности требуют специализированных смазочных материалов и поставщика, стремящегося к совершенству в поддержке клиентов.
                    </p>
                    <p>
                        Компания <b>FUCHS</b> понимает эти требования и имеет в составе своего портфеля продукты, разработанные с учетом потребностей деревообрабатывающей промышленности - будь то водостойкие продукты для участка формования, продукты с хорошей термостабильностью для сушильных и прессовых участков или смазочные материалы, способные справиться с пылью на участке намотки.
                    </p>
                    <p>
                        Мы предлагаем инновационные решения в области смазочных материалов, предназначенные для поддержания вашего оборудования в оптимальном состоянии и работы с максимальной эффективностью.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default DerevoObrProm;