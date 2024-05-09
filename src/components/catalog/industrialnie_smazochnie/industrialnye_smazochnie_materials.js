import React, {useEffect, useState} from 'react';
import '../../../css/industrialnye_smazochnie_materials.css'; // Импорт CSS стилей
import SvgHome from '../../../assetsImage/assets/house.svg';
import vk from '../../../assetsImage/assets/icons8-вконтакте.svg';
import tg from '../../../assetsImage/assets/icons8-телеграмма-app.svg';
import { Link } from 'react-router-dom';
import MotorMasla from '../../../assetsImage/assets_transport_vnedorojnaya/моторные_масла.png'
import Jidkosti from '../../../assetsImage/assets_transport_vnedorojnaya/титан.png'
import CompMc from '../../../assetsImage/assets_news/COMP_MC.png'
import Kaluga from '../../../assetsImage/assets_news/Конференция_в_Калуге.jpg'





const IndustrialMaterial = () => {

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
          <p className="product-title-text-style"><a href="">Индустриальные смазочные материалы</a></p>
        </div>
        <div className="catalog-container">
          <h2 className="catalog-title">Индустриальные смазочные материалы</h2>
          <div className="products-cards-lists">
              <div className="product-card-list-industrial">
                <div className="fullwidth-container-industrial">
                  <a href="">
                    <Link to="/catalog/industrial_smasochnie_materials/obsheindustrial_product">
                      <div className="vehicle-info-card-industrial">
                        <div className="transport-card-industrial">
                          <div className="vehicle-image-container-industrial"><img src={MotorMasla} className="" /></div>
                          <div className="transport-info-card-industrial">
                            <p className="transport-heading-style-industrial">Общеиндустриальные продукты</p>
                            <p className="transport-details-button-text-industrial">Подробнее</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </a>
                  <div className="transport-section"></div>
                </div>
                <div className="fullwidth-container-industrial">
                  <a href="">
                    <div className="vehicle-info-card-industrial">
                      <div className="transport-card-industrial">
                        <div className="vehicle-image-container-industrial"><img src={Jidkosti} className="" /></div>
                        <div className="transport-info-card-industrial">
                          <p className="transport-heading-style-industrial">Пластичные смазки</p>
                          <p className="transport-details-button-text-industrial">Подробнее</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="transport-section"></div>
                </div>
              </div>
              <div className="product-card-list-industrial">
                  <div className="fullwidth-container-industrial">
                    <a href="">
                      <Link to="/catalog/industrial_smasochnie_materials/smazochno_ohlajdaushie">
                        <div className="vehicle-info-card-industrial">
                          <div className="transport-card-industrial">
                            <div className="vehicle-image-container-industrial"><img src={MotorMasla} className="" /></div>
                            <div className="transport-info-card-industrial">
                              <p className="transport-heading-style-industrial">Смазочно-охлаждающие технологические составы (СОТС)</p>
                              <p className="transport-details-button-text-industrial">Подробнее</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </a>
                    <div className="transport-section"></div>
                  </div>
                  <div className="fullwidth-container-industrial">
                    <a href="">
                      <div className="vehicle-info-card-industrial">
                        <div className="transport-card-industrial">
                          <div className="vehicle-image-container-industrial"><img src={Jidkosti} className="" /></div>
                          <div className="transport-info-card-industrial">
                            <p className="transport-heading-style-industrial">Продукты для обработки металлов давлением</p>
                            <p className="transport-details-button-text-industrial">Подробнее</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="transport-section"></div>
                  </div>
                </div>
                <div className="product-card-list-industrial">
                  <div className="fullwidth-container-industrial">
                    <a href="">
                      <div className="vehicle-info-card-industrial">
                        <div className="transport-card-industrial">
                          <div className="vehicle-image-container-industrial"><img src={MotorMasla} className="" /></div>
                          <div className="transport-info-card-industrial">
                            <p className="transport-heading-style-industrial">Продукты для защиты от коррозии</p>
                            <p className="transport-details-button-text-industrial">Подробнее</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="transport-section"></div>
                  </div>
                  <div className="fullwidth-container-industrial">
                    <a href="">
                      <div className="vehicle-info-card-industrial">
                        <div className="transport-card-industrial">
                          <div className="vehicle-image-container-industrial"><img src={Jidkosti} className="" /></div>
                          <div className="transport-info-card-industrial">
                            <p className="transport-heading-style-industrial">Продукты для очистки поверхности</p>
                            <p className="transport-details-button-text-industrial">Подробнее</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="transport-section"></div>
                  </div>
                </div>
                <div className="product-card-list-industrial">
                  <div className="fullwidth-container-industrial">
                    <a href="">
                      <div className="vehicle-info-card-industrial">
                        <div className="transport-card-industrial">
                          <div className="vehicle-image-container-industrial"><img src={MotorMasla} className="" /></div>
                          <div className="transport-info-card-industrial">
                            <p className="transport-heading-style-industrial">Продукты для термической обработки</p>
                            <p className="transport-details-button-text-industrial">Подробнее</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="transport-section"></div>
                  </div>
                </div>
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

export default IndustrialMaterial;