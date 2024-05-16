import React, {useEffect, useState, useRef } from 'react';
import '../../css/news_1.css';
import SvgHome from '../../assetsImage/assets/house.svg';
import { Link } from 'react-router-dom';
import titlePhoto from '../../assetsImage/assets_solutions/116762.jpg'




const SelskoeHozyaistvo = () => {

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
                <p className="product-title-text-style"><a href=""><Link to='/solution/selskoe_khozyaystvo'>Сельское хозяйство</Link></a></p>
            </div>
            <div className='news_blocks'>
                <h2>
                  Сельское хозяйство
                </h2>
                <div className='news_block'>
                    <img src={titlePhoto} alt="Сельское хозяйство"/>
                    <p>
                      На протяжении многих лет среди производителей двигателей, коробок передач, гидравлических систем для сельскохозяйственной техники, компания <b>FUCHS</b> считается опытным, независимым производителем смазочных материалов. Мы фокусируемся исключительно на продукции высокого качества. Благодаря соответствию техническим стандартам, мы всегда предлагаем наиболее эффективные продукты с учетом каждого конкретного случая.
                    </p>
                    <p>
                     Техника, заправленная нашими смазочными материалами, способна работать в любое время года.
                    </p>
                    <p>
                         В нашем широком ассортименте Вы найдете смазки, гидравлические жидкости, моторные и трансмиссионные масла для различной сельскохозяйственной техники, работающей в тяжелых полевых условиях. Например, мультифункциональные масла класса <b>STOU</b> и <b>UTTO</b>.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default SelskoeHozyaistvo;