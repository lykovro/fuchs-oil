import React, {useEffect, useState, useRef } from 'react';
import '../../css/news_1.css';
import SvgHome from '../../assetsImage/assets/house.svg';
import { Link } from 'react-router-dom';
import titlePhoto from '../../assetsImage/assets_solutions/pojazdy_ciezarowki_2560_1600_7158.jpg'




const KomTrans = () => {

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
                <p className="product-title-text-style"><a href=""><Link to='/solution/kommercheskiy_transport'>Коммерческий транспорт</Link></a></p>
            </div>
            <div className='news_blocks'>
                <h2>
                 Коммерческий транспорт
                </h2>
                <div className='news_block'>
                    <img src={titlePhoto} alt="Коммерческий транспорт"/>
                    <p>
                         Постоянные инвестиции в нашу всемирную сеть исследовательских центров, а также тесное сотрудничество с немецкой автомобильной промышленностью помогли нам стать: Специалистом по смазочным материалам с полной линейкой продуктов и множеством специальных решений. Идет ли речь о консистентных смазках для подшипниковых систем транспортных средств, или о гидравлических маслах для самых различных вариантов применения, или о трансмиссионных маслах для любых транспортных средств, – в компании <b>FUCHS</b> Вы можете получить все подходящие смазочные материалы от одного поставщика. В том числе смазочные материалы, которые позволят Вам осуществить рационализацию ассортимента используемых масел при наличии парка различных транспортных средств. Неважно, какой из смазочных материалов компании <b>FUCHS</b> Вы выберете, – выгода будет очевидной.
                     </p>
                    <h3>
                       Преимущества:
                    </h3>
                    <ul>
                        <li>
                            снижение производственных издержек
                        </li>
                        <li>
                             максимальную надежность при работе в любых температурных условиях
                        </li>
                        <li>
                              снижение потребления масла
                        </li>
                        <li>
                             существенное сокращение расхода топлива и значительное увеличение интервалов замены
                        </li>
                    </ul>
                    <p>
                      Смазочные материалы <b>FUCHS</b>, предлагаемые сегодня для рынка тяжелой спецтехники, представляют собой высокий уровень качества продукции и инновационных технологий, дают возможность повысить эффективность и экономичность эксплуатации техники.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default KomTrans;