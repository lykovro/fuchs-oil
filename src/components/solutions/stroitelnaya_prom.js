import React, {useEffect, useState, useRef } from 'react';
import '../../css/news_1.css';
import SvgHome from '../../assetsImage/assets/house.svg';
import { Link } from 'react-router-dom';
import titlePhoto from '../../assetsImage/assets_solutions/stroyka-podrobno.jpg'
import routesData from '../../routesData'; 



const StroyProm = () => {

    const route = routesData.find(route => route.path === '/solution/promyshlennost_stroitelnykh_materialov');

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
                <p className="product-title-text-style"><a href=""><Link to={route.path}>Строительная промышленность</Link></a></p>
            </div>
            <div className='news_blocks'>
                <h2>
                  Строительная промышленность
                </h2>
                <div className='news_block'>
                    <img src={titlePhoto} alt="Сельское хозяйство"/>
                    <p>
                      Строительная промышленность и производство строительных материалов являются главными отраслями практически во всем мире, а также связана с рядом задач, в решении которых Вам помогут смазочные материалы <b>FUCHS</b>. 
                    </p>
                    <p>
                      Идет ли речь о консистентных смазках для подшипниковых систем транспортных средств, или о гидравлических маслах для самых различных вариантов применения, или о трансмиссионных маслах для любых транспортных средств, используемых в строительстве, – в компании <b>FUCHS</b> Вы можете получить все подходящие смазочные материалы от одного поставщика. 
                    </p>
                    <p>
                        Ассортимент нашей продукции включает в себя адгезивные, жидкие и твердые смазочные материалы, пластичные смазки, пасты, аэрозоли и смазки для открытых зубчатых передач - в целом, более 1 000 специализированных продуктов, которые точно соответствуют заявляемым требованиям
                     </p>
                    <p>
                        Наши смазочные материалы являются не только эффективными, экономически целесообразными и экологичными, это также продукты, обеспечивающие бесперебойную работу вашего оборудования. Неважно, какой из смазочных материалов компании <b>FUCHS</b> вы выберете – выгода будет очевидной.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default StroyProm;