import React, {useEffect, useState} from 'react';
import '../css/politik_sotrudnnich.css'; // Импорт CSS стилей
import { Link } from 'react-router-dom';
import SvgHome from '../assetsImage/assets/house.svg';

import Document1 from '../documents/ISO 9001.pdf'
import Document2 from '../documents/ISO_14001_RU.pdf';
import Document3 from '../documents/ISO_45001_RU.pdf';
import Document4 from '../documents/Информационное письмо о пройденном аудите IATF 16949.pdf'


const Certificats = () => {
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
                <p className="contacts-info-heading"><a href=""><Link to="/partners/politika_sotrudnichestva">Сертификаты</Link></a></p>
            </div>
        </div>
        <div className="contacts_info">
            <div className="contact-info-container-vk-tele">
                <h2 className="contact-info-heading1">Сертификаты</h2>
              <div className="contact-info-display-style1">
              </div>
            </div>
          </div>
            <div className="container-status-partners">
                <div className="content-status-section">
                    <div className="content-status">
                        <h3>ООО «ФУКС ОЙЛ» осуществляет выпуск смазочных и сопутствующих компонентов высокого качества в безопасных условиях, обеспечивая уменьшение воздействия на окружающую среду.</h3>
                        <div className='content-status-ul'>
                            <ul className="requirements-status-list-certificats">
                                <a href={Document1} target="_blank" rel="noopener noreferrer">
                                    <li><h4>Системы менеджмента качества</h4> <p>ISO 9001:2015</p>
                                        </li>
                                </a>
                                <a href={Document2} target="_blank" rel="noopener noreferrer">
                                    <li><h4>Менеджмент окружающей среды</h4> <p>ISO 14001:2015</p>
                                        </li>
                                </a>
                                <a href={Document3} target="_blank" rel="noopener noreferrer">
                                    <li><h4>Системы менеджмента безопасности труда и охраны здоровья</h4> <p>ISO 45001:2018</p>
                                        </li>
                                </a>
                                <a href={Document4} target="_blank" rel="noopener noreferrer">
                                    <li><h4>Менеджмента качества в автомобильной промышленности</h4> <p>IATF 16949:2016</p>
                                        </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      </main>

    )
}

export default Certificats;