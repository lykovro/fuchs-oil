import React, {useEffect, useState, useRef } from 'react';
import '../../../../css/motor_masla_legkovie.css'; // Импорт CSS стилей
import SvgHome from '../../../../assetsImage/assets/house.svg';
import vk from '../../../../assetsImage/assets/icons8-вконтакте.svg';
import tg from '../../../../assetsImage/assets/icons8-телеграмма-app.svg';
import { Link } from 'react-router-dom';
import Legkovie from '../../../../assetsImage/assets_catalog/img_41_23_4d9954.jpeg'
import Gruzovie from '../../../../assetsImage/assets_catalog/img_41_461_3eb88c.jpeg'
import Gazoobraznoe from '../../../../assetsImage/assets_catalog/img_41_23_4d9954.jpeg'




const ObsheIndustrial = () => {



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
          <p className="product-title-text-style"><a href=""><Link to='/catalog/industrial_smasochnie_materials/obsheindustrial_product/gidravlicheskie_zhidkosti'>Общеиндустриальные продукты</Link></a></p>
        </div>
        <div className="catalog-container">
          <h2 className="catalog-title">Общеиндустриальные продукты</h2>
          <div className="product-card-list-motor-masla">
            <div className="fullwidth-container-motor-masla">
                <Link to="/catalog/industrial_smasochnie_materials/obsheindustrial_product/gidravlicheskie_zhidkosti">
                  <div className="vehicle-info-card-motor-masla">
                    <div className="transport-card-motor-masla">
                      <div className="vehicle-image-container-motor-masla"><img src={Legkovie} className="" /></div>
                      <div className="transport-info-card-motor-masla">
                        <p className="transport-heading-style-motor-masla">Гидравлические масла</p>
                        <p className="transport-details-button-text-motor-masla">Подробнее</p>
                      </div>
                    </div>
                  </div>
                </Link>
              <div className="transport-section"></div>
            </div>
            <div className="fullwidth-container-motor-masla">
                <Link to="/catalog/industrial_smasochnie_materials/obsheindustrial_product/masla_na_mineralnoy_osnove">
                  <div className="vehicle-info-card-motor-masla">
                    <div className="transport-card-motor-masla">
                      <div className="vehicle-image-container-motor-masla"><img src={Gruzovie} className="" /></div>
                      <div className="transport-info-card-motor-masla">
                        <p className="transport-heading-style-motor-masla">Минеральные редукторные масла</p>
                        <p className="transport-details-button-text-motor-masla">Подробнее</p>
                      </div>
                    </div>
                  </div>
                </Link>
              <div className="transport-section"></div>
            </div>
            <div className="fullwidth-container-motor-masla">
                <Link to="/catalog/industrial_smasochnie_materials/obsheindustrial_product/reduktornye_masla_na_sinteticheskoy_osnove">
                  <div className="vehicle-info-card-motor-masla">
                    <div className="transport-card-motor-masla">
                      <div className="vehicle-image-container-motor-masla"><img src={Gazoobraznoe} className="" /></div>
                      <div className="transport-info-card-motor-masla">
                        <p className="transport-heading-style-motor-masla">Синтетические редукторные масла</p>
                        <p className="transport-details-button-text-motor-masla">Подробнее</p>
                      </div>
                    </div>
                  </div>
                </Link>
              <div className="transport-section"></div>
            </div>
            <div className="fullwidth-container-motor-masla">
                <Link to="/catalog/industrial_smasochnie_materials/obsheindustrial_product/kompressornye_masla">
                  <div className="vehicle-info-card-motor-masla">
                    <div className="transport-card-motor-masla">
                      <div className="vehicle-image-container-motor-masla"><img src={Gazoobraznoe} className="" /></div>
                      <div className="transport-info-card-motor-masla">
                        <p className="transport-heading-style-motor-masla">Компрессорные масла</p>
                        <p className="transport-details-button-text-motor-masla">Подробнее</p>
                      </div>
                    </div>
                  </div>
                </Link>
              <div className="transport-section"></div>
            </div>
            <div className="fullwidth-container-motor-masla">
                <Link to="/catalog/industrial_smasochnie_materials/obsheindustrial_product/masla_dlya_napravlyayushchikh_tsepey_i_pnevmoinstrumenta">
                  <div className="vehicle-info-card-motor-masla">
                    <div className="transport-card-motor-masla">
                      <div className="vehicle-image-container-motor-masla"><img src={Gazoobraznoe} className="" /></div>
                      <div className="transport-info-card-motor-masla">
                        <p className="transport-heading-style-motor-masla">Масла для направляющих скольжения</p>
                        <p className="transport-details-button-text-motor-masla">Подробнее</p>
                      </div>
                    </div>
                  </div>
                </Link>
              <div className="transport-section"></div>
            </div>
            <div className="fullwidth-container-motor-masla">
                <Link to="/catalog/industrial_smasochnie_materials/obsheindustrial_product/ognestoykie_gidravlicheskie_zhidkosti">
                  <div className="vehicle-info-card-motor-masla">
                    <div className="transport-card-motor-masla">
                      <div className="vehicle-image-container-motor-masla"><img src={Gazoobraznoe} className="" /></div>
                      <div className="transport-info-card-motor-masla">
                        <p className="transport-heading-style-motor-masla">Огнестойкие гидравлические жидкости</p>
                        <p className="transport-details-button-text-motor-masla">Подробнее</p>
                      </div>
                    </div>
                  </div>
                </Link>
              <div className="transport-section"></div>
            </div>
            <div className="fullwidth-container-motor-masla">
                <Link to="/catalog/industrial_smasochnie_materials/obsheindustrial_product/masla_dlya_bumagodelatelnykh_mashin">
                  <div className="vehicle-info-card-motor-masla">
                    <div className="transport-card-motor-masla">
                      <div className="vehicle-image-container-motor-masla"><img src={Gazoobraznoe} className="" /></div>
                      <div className="transport-info-card-motor-masla">
                        <p className="transport-heading-style-motor-masla">Масла для бумагоделательных машин</p>
                        <p className="transport-details-button-text-motor-masla">Подробнее</p>
                      </div>
                    </div>
                  </div>
                </Link>
              <div className="transport-section"></div>
            </div>
            <div className="fullwidth-container-motor-masla">
                <Link to="/catalog/industrial_smasochnie_materials/obsheindustrial_product/masla_dlya_pnevmooborudovaniya">
                  <div className="vehicle-info-card-motor-masla">
                    <div className="transport-card-motor-masla">
                      <div className="vehicle-image-container-motor-masla"><img src={Gazoobraznoe} className="" /></div>
                      <div className="transport-info-card-motor-masla">
                        <p className="transport-heading-style-motor-masla">Масла для пневмооборудования</p>
                        <p className="transport-details-button-text-motor-masla">Подробнее</p>
                      </div>
                    </div>
                  </div>
                </Link>
              <div className="transport-section"></div>
            </div>
            <div className="fullwidth-container-motor-masla">
                <Link to="/catalog/industrial_smasochnie_materials/obsheindustrial_product/masla_dlya_tsepey">
                  <div className="vehicle-info-card-motor-masla">
                    <div className="transport-card-motor-masla">
                      <div className="vehicle-image-container-motor-masla"><img src={Gazoobraznoe} className="" /></div>
                      <div className="transport-info-card-motor-masla">
                        <p className="transport-heading-style-motor-masla">Масла для цепей</p>
                        <p className="transport-details-button-text-motor-masla">Подробнее</p>
                      </div>
                    </div>
                  </div>
                </Link>
              <div className="transport-section"></div>
            </div>
            <div className="fullwidth-container-motor-masla">
                <Link to="/catalog/industrial_smasochnie_materials/obsheindustrial_product/teplonositeli">
                  <div className="vehicle-info-card-motor-masla">
                    <div className="transport-card-motor-masla">
                      <div className="vehicle-image-container-motor-masla"><img src={Gazoobraznoe} className="" /></div>
                      <div className="transport-info-card-motor-masla">
                        <p className="transport-heading-style-motor-masla">Теплоносители</p>
                        <p className="transport-details-button-text-motor-masla">Подробнее</p>
                      </div>
                    </div>
                  </div>
                </Link>
              <div className="transport-section"></div>
            </div>
            <div className="fullwidth-container-motor-masla">
                <Link to="/catalog/industrial_smasochnie_materials/obsheindustrial_product/tsilindrovye_masla">
                  <div className="vehicle-info-card-motor-masla">
                    <div className="transport-card-motor-masla">
                      <div className="vehicle-image-container-motor-masla"><img src={Gazoobraznoe} className="" /></div>
                      <div className="transport-info-card-motor-masla">
                        <p className="transport-heading-style-motor-masla">Цилиндровые масла</p>
                        <p className="transport-details-button-text-motor-masla">Подробнее</p>
                      </div>
                    </div>
                  </div>
                </Link>
              <div className="transport-section"></div>
            </div>
            <div className="fullwidth-container-motor-masla">
                <Link to="/catalog/industrial_smasochnie_materials/obsheindustrial_product/tsirkulyatsionnye_masla">
                  <div className="vehicle-info-card-motor-masla">
                    <div className="transport-card-motor-masla">
                      <div className="vehicle-image-container-motor-masla"><img src={Gazoobraznoe} className="" /></div>
                      <div className="transport-info-card-motor-masla">
                        <p className="transport-heading-style-motor-masla">Циркуляционные масла</p>
                        <p className="transport-details-button-text-motor-masla">Подробнее</p>
                      </div>
                    </div>
                  </div>
                </Link>
              <div className="transport-section"></div>
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

export default ObsheIndustrial;