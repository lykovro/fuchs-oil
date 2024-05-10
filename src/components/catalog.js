import React, {useEffect, useState} from 'react';
import '../css/catalog.css'; // Импорт CSS стилей
import SvgHome 
from '../assetsImage/assets/house.svg';
import Transport from '../assetsImage/assets_catalog/img_41_23_4d9954.jpeg';
import Industrial from "../assetsImage/assets_catalog/img_41_461_3eb88c.jpeg";
import vk from '../assetsImage/assets/icons8-вконтакте.svg';
import tg from '../assetsImage/assets/icons8-телеграмма-app.svg';
import { Link } from 'react-router-dom';





const Catalog = () => {
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
          <p className="product-title-text-style"><Link to="/catalog">Продукты</Link></p>
        </div>
        <div className="catalog-container">
          <h2 className="catalog-title">Каталог</h2>
          <div className="product-card-list">
              <div className="fullwidth-container">
                <a href="transport_vnedorojnaya">
                <Link to="transport_vnedorojnaya">
                  <div className="vehicle-info-card">
                    <div className="transport-card">
                      <div className="vehicle-image-container"><img src={Transport} className="" /></div>
                      <div className="transport-info-card">
                        <p className="transport-heading-style">Транспорт и внедорожная техника</p>
                        <p className="transport-details-button-text">Подробнее</p>
                      </div>
                    </div>
                  </div>
                  </Link>
                </a>
                <div className="transport-section"></div>
              </div>
              <div className="fullwidth-container">
                <a href="">
                <Link to="industrial_smasochnie_materials">
                  <div className="vehicle-info-card">
                    <div className="transport-card">
                      <div className="vehicle-image-container"><img src={Industrial} className="" /></div>
                      <div className="transport-info-card">
                        <p className="transport-heading-style">Индустриальные смазочные материалы</p>
                        <p className="transport-details-button-text">Подробнее</p>
                      </div>
                    </div>
                  </div>
                  </Link>
                </a>
                <div className="transport-section"></div>
              </div>
          </div>
        </div>
      <div className="contact-section1">
        <div className="contact-section">
          <div className="contacts">
              <div className="contact-info-section-svyaz">
                <h2 className="contact-message">Есть вопросы?</h2>
                <p className="contact-message1">Свяжитесь с нами любым удобным для Вас способом</p>
              </div>
              <div className="contact-info-logos">
                  <a href=""><img src={vk} className="contact-section-banner" alt="Vkontakte"/></a>
                  <a href=""><img src={tg} className="contact-section-banner" alt="Telegram"/></a>
              </div>
          </div>
        </div>
      </div>
  </main>
    )
}

export default Catalog;