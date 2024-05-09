import React, {useEffect, useState, useRef } from 'react';
import '../../css/news_1.css';
import SvgHome from '../../assetsImage/assets/house.svg';
import { Link } from 'react-router-dom';
import titlePhoto from '../../assetsImage/assets_solutions/fotolia_3542409_xl_copy_web-1.jpg'
import routesData from '../../routesData'; 



const Energetik = () => {

    const route = routesData.find(route => route.path === '/solution/energetika');

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
                <p className="product-title-text-style"><a href=""><Link to={route.path}>Энергетика</Link></a></p>
            </div>
            <div className='news_blocks'>
                <h2>
                    Энергетика
                </h2>
                <div className='news_block'>
                    <img src={titlePhoto} alt="Сельское хозяйство"/>
                    <h3>
                        Правильно подобранные материалы - ключ к успеху
                    </h3>
                    <p>
                        Приоритетной задачей любой производственной компании является повышение энергоэффективности собственного производства. С одной стороны это обусловлено экономией затрат предприятия, с другой — рациональным использованием ресурсов. Одним из аспектов данной работы может стать сокращение потерь электроэнергии за счет совершенствования программы смазывания. Важно отметить, что покупка более качественных смазок еще не гарантирует эффективную работу оборудования.
                    </p>
                    <p>
                        Помимо этого, необходимо грамотно подобрать смазочный материал. Использование высококачественных смазочных материалов оказывается в итоге более выгодным, чем может показаться на первый взгляд. При одновременном повышении надежности производства и увеличении срока службы оборудования, компания экономит дополнительные средства на электроэнергии.
                    </p>
                    <p>
                        Постоянные инвестиции в нашу всемирную сеть исследовательских центров помогли нам стать: Специалистом по смазочным материалам с полной линейкой продуктов и множеством специальных решений. Широкий ассортимент масел, смазок и СОЖ предназначен для различных областей промышленного использования в секторе энергетики.
                    </p>
                    <p>
                        Так например, для стационарных газовых двигателей выбор правильного моторного масла имеет решающее значение. Этот выбор обеспечивает их надежную работу, высокую эффективность и длительный срок службы.
                    </p>
                    <p>
                        Специальный пакет высокоэффективных присадок повышает стойкость масла к окислению и нитрования, гарантируют и надежность даже в экстремальных условиях эксплуатации. Наши специальные рецептуры предлагают максимальную степень защиты от износа и защищают от образования шлама, отложений, кислот и коррозии.
                    </p>
                    <p>
                        Независимо от того, какое энергетическое оборудование Вы используете, компания <b>FUCHS</b> предлагает широкий спектр передовых решений для повышения надежности производства и увеличения срока службы оборудования.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Energetik;