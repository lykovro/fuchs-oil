import React, {useEffect, useState} from 'react';
import '../css/politik_sotrudnnich.css'; // Импорт CSS стилей
import { Link } from 'react-router-dom';
import SvgHome from '../assetsImage/assets/house.svg';


const PolitikSotrudnichestva = () => {

    


    return (
        <main>
         <div className="contact-info-section2">
            <div className="contact-section-with-products">
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
                <p className="contacts-info-heading"><a href=""><Link to="/partners">Партнерам</Link></a></p>
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
                <p className="contacts-info-heading"><a href=""><Link to="/partners/politika_sotrudnichestva">Политика сотрудничества</Link></a></p>
            </div>
        </div>
        <div className="contacts_info">
            <div className="contact-info-container-vk-tele">
                <h2 className="contact-info-heading1">Политика сотрудничества</h2>
              <div className="contact-info-display-style1">
              </div>
            </div>
          </div>
            <div className="container-status-partners">
                <div className="content-status-section">
                    <div className="content-status">
                        <h3>Наши базовые принципы партнерства просты и надежны:</h3>
                        <div className='content-status-ul'>
                            <ul className="requirements-status-list-partners">
                                <li>Концерн FUCHS – одна из крупнейших «масляных» компаний в мире и более 10 лет бесспорный лидер среди независимых производителей смазочных материалов. Стратегия концерна – расширение позиций в России. Сотрудничество с нами – гарантия роста для наших партнеров сегодня и на перспективу</li>
                                <li>Концерн FUCHS на 100% концентрируется на разработке, производстве и сбыте смазочных материалов и будет это делать в отличие от большинства нефтяных компаний, сворачивающих свой «масляный» бизнес. Партнерство с нами – ключ к стабильности бизнеса на долгие годы</li>
                                <li>Сегодня FUCHS, пожалуй, единственная компания в мире, способная обеспечить 100% потребности практически любого заказчика «из одних рук» за счет широчайшего ассортимента</li>
                            </ul>
                            <ul className="requirements-status-list-partners">
                                <li>Компания FUCHS традиционно сотрудничает с малыми и средними компаниями. Для партнеров это довольно редкая возможность поставлять продукцию тем предприятиям, которые хотят работать только на основании «прямых» контрактов с производителем.</li>
                                <li>Компания FUCHS в России достаточно самостоятельна, чтобы принимать во внимание особенности национального рынка. Компания будет все больше ориентироваться на специфические запросы российских потребителей. Это залог более высокой гибкости и конкурентоспособности партнеров компании</li>
                                <li>FUCHS – единственный мировой производитель с многолетним опытом собственного производства в России. С запуском нового завода FUCHS в г. Калуга, производительностью до 40 тысяч тонн в год и отвечающего самым высоким стандартам в области качества выпускаемой продукции, ассортимент «локализованных» продуктов заметно расширился, и это - единственный реальный шанс обеспечить вашим клиентам импорт замещение без потери качества</li>
                             </ul>
                             <ul className="requirements-status-list-partners">
                                <li>Философия FUCHS – работа на прибыль. Компания строит свой бизнес таким образом, чтобы обеспечить разумную прибыльность и для своих партнеров</li>
                                <li>Компания FUCHS обеспечивает поддержку продаж своих партнеров путем технического консультирования, обучения персонала партнеров, содействия в проведении технических и коммерческих переговоров с конечным потребителем</li>
                                <li>FUCHS не выставляет заведомо невыполнимых условий: нам не нужен « эксклюзив», обязательства по закупкам, детальный маркетинговый план. Мы просто помогаем зарабатывать деньги и престиж тем, кто приобретает нашу продукцию</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      </main>

    )
}

export default PolitikSotrudnichestva;