import React, {useEffect, useState, useRef } from 'react';
import '../../css/news_1.css';
import SvgHome from '../../assetsImage/assets/house.svg';
import { Link } from 'react-router-dom';
import titlePhoto from '../../assetsImage/assets_solutions/a_grey_metallic_jeep_with_blue_stripe_on_it.jpg'




const LegkovoyTransport = () => {

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
                <p className="product-title-text-style"><a href=""><Link to='/solution/legkovoy_avtotransport'>Легковой автотранспорт</Link></a></p>
            </div>
            <div className='news_blocks'>
                <h2>
                 Легковой автотранспорт
                </h2>
                <div className='news_block'>
                    <img src={titlePhoto} alt="Легковой автотранспорт"/>
                    <h3>
                      Смазочные материалы для автотранспорта
                    </h3>
                    <p style={{ textDecoration: 'underline' }}>
                         Моторные масла <b>FUCHS</b>, от первой заливки и навсегда                    
                    </p>
                    <p>
                        Никогда раньше производство смазочных материалов для автомобилей не представляло собой настолько сложный технологический вызов, как сегодня. Альтернативные виды топлива, новые технологии производства двигателей, сложные системы очистки выхлопных газов и значительно более длительные интервалы замены масла — требуют неизменно высоких характеристик используемых смазочных материалов.
                    </p>
                    <p>
                         Для обеспечения высокой эффективности современных транспортных средств в долгосрочной перспективе, компания <b>FUCHS</b>, являющаяся одним из ведущих поставщиков материалов для автомобильной промышленности Германии, разработала обширный ассортимент продукции. Продуктовая линейка для легковых и грузовых автомобилей, коммерческого транспорта и мотоциклов включает высококачественные масла практически для всех типов двигателей, трансмиссий, а также для автоматических коробок передач, таких как коробки передач с двойным сцеплением и коробки передач с гидротрансформатором, для центральной гидравлики и мостов, а также сервисные жидкости,
                        такие как антифризы, тормозные жидкости и многое другое.
                    </p>
                    <p>Благодаря широкому ассортименту смазочных материалов для многих областей применения в автотранспорте и уникальной технологии XTL® во всем мире, <b>FUCHS</b> устанавливает новые стандарты Широкий ассортимент продукции соответствует практически всем действующим на международном уровне спецификациям и
                        оригинальным разрешениям производителей, а также включает смазочные материалы
                        практически для всех автопроизводителей.                      
                    </p>
                    <h3>
                       Революционная технология производства моторного масла
                    </h3>
                    <p>
                        Моторные масла, произведенные с использованием новейшей технологии XTL, разработанной
                        для выполнения более жестких требований производителей двигателей, позволяют улучшить
                        эксплуатационные характеристики: в зоне температур ниже -25°С сократить время циркуляции
                        масла при пуске почти вдвое, а в области максимальных рабочих температур более чем на 10%
                        сократить расход на угар. Такие моторные масла позволяют назначать увеличенные сервисные
                        интервалы, и уже оценены производителями автомобилей                    
                    </p>
                </div>
            </div>
        </main>
    )
}

export default LegkovoyTransport;