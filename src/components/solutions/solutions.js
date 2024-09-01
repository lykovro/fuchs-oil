import React, {useEffect, useState} from 'react';
import '../../css/solution.css';
import SvgHome from '../../assetsImage/assets/house.svg';
import TitlePhoto1 from '../../assetsImage/assets_solutions/metallurgiya-podrobno.jpg';
import TitlePhoto2 from "../../assetsImage/assets_solutions/header.jpg";
import TitlePhoto3 from '../../assetsImage/assets_solutions/116762.jpg';
import TitlePhoto4 from "../../assetsImage/assets_solutions/pojazdy_ciezarowki_2560_1600_7158.jpg";
import TitlePhoto5 from '../../assetsImage/assets_solutions/a_grey_metallic_jeep_with_blue_stripe_on_it.jpg';
import TitlePhoto6 from "../../assetsImage/assets_solutions/stroyka-podrobno.jpg";
import TitlePhoto7 from '../../assetsImage/assets_solutions/Forest_high.jpg';
import TitlePhoto8 from "../../assetsImage/assets_solutions/fotolia_3542409_xl_copy_web-1.jpg";
import vk from '../../assetsImage/assets/icons8-вконтакте.svg';
import tg from '../../assetsImage/assets/icons8-телеграмма-app.svg';
import { Link } from 'react-router-dom';





const Solution = () => {
    return (
        <main>
        <div className="product-section-with-images-navigation">
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
          <p className="product-title-text-style-navigation"><Link to="/solution">Решения по отраслям</Link></p>
        </div>
        <div className="catalog-container-solution">
          <h2 className="catalog-title">Решения по отраслям</h2>
          <div className="product-card-list-solution">
              <div className="fullwidth-container-solution">
                <Link to="mattalurgia_machine">
                  <div className="vehicle-info-card-solution">
                    <div className="transport-card-solution">
                      <div className="vehicle-image-container"><img src={TitlePhoto1} className="" /></div>
                      <div className="transport-info-card-solution">
                        <p className="transport-heading-style-industrial">Металлургия и Машиностроение</p>
                        <p className="transport-details-button-text-industrial">Подробнее</p>
                      </div>
                    </div>
                  </div>
                  </Link>
              </div>
              <div className="fullwidth-container-solution">
                <Link to="khimicheskaya_promyshlennost">
                  <div className="vehicle-info-card-solution">
                    <div className="transport-card-solution">
                      <div className="vehicle-image-container"><img src={TitlePhoto2} className="" /></div>
                      <div className="transport-info-card-solution">
                        <p className="transport-heading-style-industrial">Химическая и горнодобывающая промышленность</p>
                        <p className="transport-details-button-text-industrial">Подробнее</p>
                      </div>
                    </div>
                  </div>
                  </Link>
              </div>
              <div className="fullwidth-container-solution">
                <Link to="selskoe_khozyaystvo">
                  <div className="vehicle-info-card-solution">
                    <div className="transport-card-solution">
                      <div className="vehicle-image-container"><img src={TitlePhoto3} className="" /></div>
                      <div className="transport-info-card-solution">
                        <p className="transport-heading-style-industrial">Сельское хозяйство</p>
                        <p className="transport-details-button-text-industrial">Подробнее</p>
                      </div>
                    </div>
                  </div>
                  </Link>
              </div>
              <div className="fullwidth-container-solution">
                <Link to="kommercheskiy_transport">
                  <div className="vehicle-info-card-solution">
                    <div className="transport-card-solution">
                      <div className="vehicle-image-container"><img src={TitlePhoto4} className="" /></div>
                      <div className="transport-info-card-solution">
                        <p className="transport-heading-style-industrial">Коммерческий транспорт</p>
                        <p className="transport-details-button-text-industrial">Подробнее</p>
                      </div>
                    </div>
                  </div>
                  </Link>
              </div>
              <div className="fullwidth-container-solution">
                <Link to="legkovoy_avtotransport">
                  <div className="vehicle-info-card-solution">
                    <div className="transport-card-solution">
                      <div className="vehicle-image-container"><img src={TitlePhoto5} className="" /></div>
                      <div className="transport-info-card-solution">
                        <p className="transport-heading-style-industrial">Легковой автотранспорт</p>
                        <p className="transport-details-button-text-industrial">Подробнее</p>
                      </div>
                    </div>
                  </div>
                  </Link>
              </div>
              <div className="fullwidth-container-solution">
                <Link to="promyshlennost_stroitelnykh_materialov">
                  <div className="vehicle-info-card-solution">
                    <div className="transport-card-solution">
                      <div className="vehicle-image-container"><img src={TitlePhoto6} className="" /></div>
                      <div className="transport-info-card-solution">
                        <p className="transport-heading-style-industrial">Строительная промышленность</p>
                        <p className="transport-details-button-text-industrial">Подробнее</p>
                      </div>
                    </div>
                  </div>
                  </Link>
              </div>
              <div className="fullwidth-container-solution">
                <Link to="derevoobrabatyvayushchaya_promyshlennost">
                  <div className="vehicle-info-card-solution">
                    <div className="transport-card-solution">
                      <div className="vehicle-image-container"><img src={TitlePhoto7} className="" /></div>
                      <div className="transport-info-card-solution">
                        <p className="transport-heading-style-industrial">Деревообрабатывающая промышленность</p>
                        <p className="transport-details-button-text-industrial">Подробнее</p>
                      </div>
                    </div>
                  </div>
                  </Link>
              </div>
              <div className="fullwidth-container-solution">
                <Link to="energetika">
                  <div className="vehicle-info-card-solution">
                    <div className="transport-card-solution">
                      <div className="vehicle-image-container"><img src={TitlePhoto8} className="" /></div>
                      <div className="transport-info-card-solution">
                        <p className="transport-heading-style-industrial">Энергетика</p>
                        <p className="transport-details-button-text-industrial">Подробнее</p>
                      </div>
                    </div>
                  </div>
                  </Link>
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

export default Solution;