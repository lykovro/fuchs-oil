import React, {useEffect, useState, useRef } from 'react';
import '../../../../css/motor_masla.css'; // Импорт CSS стилей
import SvgHome from '../../../../assetsImage/assets/house.svg';
import vk from '../../../../assetsImage/assets/icons8-вконтакте.svg';
import tg from '../../../../assetsImage/assets/icons8-телеграмма-app.svg';
import { Link } from 'react-router-dom';
import Legkovie from '../../../../assetsImage/assets_catalog/img_41_23_4d9954.jpeg'
import Gruzovie from '../../../../assetsImage/assets_catalog/img_41_461_3eb88c.jpeg'
import Gazoobraznoe from '../../../../assetsImage/assets_catalog/img_41_23_4d9954.jpeg'
import Photo from '../../../../assetsImage/assets_catalog/img_41_23_4d9954.jpeg'




const StekolProm = () => {



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
          <p className="product-title-text-style"><a href=""><Link to="/catalog">Продукты</Link></a></p>
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
          <p className="product-title-text-style"><a href=""><Link to='/catalog/industrial_smasochnie_materials'>Индустриальные смазочные материалы</Link></a></p>
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
          <p className="product-title-text-style"><a href=""><Link to="/catalog/industrial_smasochnie_materials/produkty_dlya_stekolnoy_promyshlennosti">Продукты для стекольной промышленности</Link></a></p>
        </div>
        <div className="catalog-container">
          <h2 className="catalog-title">Продукты для стекольной промышленности</h2>
          <div className="product-card-list">
            <div className="fullwidth-container-upp">
                <div className="fullwidth-container-legkovie">
                  <a href="">
                    <div className="vehicle-info-card-legkovie">
                        <div className="vehicle-image-container-legkovie"><img src={Photo} className="" /></div>
                    </div>
                    <div className="transport-info-card-legkovie">
                      <p className="transport-heading-style-legkovie">0 000Р</p>
                      <div className="text_details">
                          <p className="trandsport-text">TITAN FORMULA 10W-40</p>
                          <p className="transport-details-button-text-legkovie">Подробнее</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="fullwidth-container-legkovie">
                  <a href="">
                    <div className="vehicle-info-card-legkovie">
                        <div className="vehicle-image-container-legkovie"><img src={Photo} className="" /></div>
                    </div>
                    <div className="transport-info-card-legkovie">
                      <p className="transport-heading-style-legkovie">0 000Р</p>
                      <div className="text_details">
                          <p className="trandsport-text">..</p>
                          <p className="transport-details-button-text-legkovie">Подробнее</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="fullwidth-container-legkovie">
                  <a href="">
                    <div className="vehicle-info-card-legkovie">
                        <div className="vehicle-image-container-legkovie"><img src={Photo} className="" /></div>
                    </div>
                    <div className="transport-info-card-legkovie">
                      <p className="transport-heading-style-legkovie">0 000Р</p>
                      <div className="text_details">
                          <p className="trandsport-text">..</p>
                          <p className="transport-details-button-text-legkovie">Подробнее</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="fullwidth-container-legkovie">
                  <a href="">
                    <div className="vehicle-info-card-legkovie">
                        <div className="vehicle-image-container-legkovie"><img src={Photo} className="" /></div>
                    </div>
                    <div className="transport-info-card-legkovie">
                      <p className="transport-heading-style-legkovie">0 000Р</p>
                      <div className="text_details">
                          <p className="trandsport-text">..</p>
                          <p className="transport-details-button-text-legkovie">Подробнее</p>
                      </div>
                    </div>
                  </a>
                </div>
            </div>
            <div className="transport-section"></div>
            <div className="fullwidth-container-upp">
              <div className="fullwidth-container-legkovie">
                  <a href="">
                    <div className="vehicle-info-card-legkovie">
                        <div className="vehicle-image-container-legkovie"><img src={Photo} className="" /></div>
                    </div>
                    <div className="transport-info-card-legkovie">
                      <p className="transport-heading-style-legkovie">0 000Р</p>
                      <div className="text_details">
                          <p className="trandsport-text">..</p>
                          <p className="transport-details-button-text-legkovie">Подробнее</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="fullwidth-container-legkovie">
                  <a href="">
                    <div className="vehicle-info-card-legkovie">
                        <div className="vehicle-image-container-legkovie"><img src={Photo} className="" /></div>
                    </div>
                    <div className="transport-info-card-legkovie">
                      <p className="transport-heading-style-legkovie">0 000Р</p>
                      <div className="text_details">
                          <p className="trandsport-text">..</p>
                          <p className="transport-details-button-text-legkovie">Подробнее</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="fullwidth-container-legkovie">
                  <a href="">
                    <div className="vehicle-info-card-legkovie">
                        <div className="vehicle-image-container-legkovie"><img src={Photo} className="" /></div>
                    </div>
                    <div className="transport-info-card-legkovie">
                      <p className="transport-heading-style-legkovie">0 000Р</p>
                      <div className="text_details">
                          <p className="trandsport-text">..</p>
                          <p className="transport-details-button-text-legkovie">Подробнее</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="fullwidth-container-legkovie">
                  <a href="">
                    <div className="vehicle-info-card-legkovie">
                        <div className="vehicle-image-container-legkovie"><img src={Photo} className="" /></div>
                    </div>
                    <div className="transport-info-card-legkovie">
                      <p className="transport-heading-style-legkovie">0 000Р</p>
                      <div className="text_details">
                          <p className="trandsport-text">..</p>
                          <p className="transport-details-button-text-legkovie">Подробнее</p>
                      </div>
                    </div>
                  </a>
                </div>
            </div>
            <div className="transport-section"></div>
          </div>
        </div>
      <div className="contact-section1">
        <div className="contact-section">
          <div className="contacts">
              <div className="contact-info-section-news">
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

export default StekolProm;