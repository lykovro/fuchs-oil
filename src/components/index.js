import React, { useEffect  } from 'react';
import '../css/index.css'; // Импорт CSS стилей для HomePage
import motor_maslo from '../assetsImage/assets/img_5_741_5cc53a.png'
import { Link } from 'react-router-dom';
import Simposium from '../assetsImage/assets_news/Bezymyannyy.png'
import RenolitDTA from '../assetsImage/assets_news/08.04.png'
import CompMc from '../assetsImage/assets_news/COMP_MC.png'
import Kaluga from '../assetsImage/assets_news/Конференция_в_Калуге.jpg'
import Forum from '../assetsImage/assets_news/img_333_74_ff025f.jpeg'
import NewsSection from './news/NewsSection';





const Index = () => {

  const backgroundImages = [
    `url(${Simposium})`,
    `url(${Kaluga})`,
    `url(${CompMc})`,
    `url(${Forum})`,
    "url('assets_news/COMP MC.png')",
];

useEffect(() => {
    const cards = document.querySelectorAll(".blue-gradient-box");

    cards.forEach((card, index) => {
        card.style.backgroundImage = backgroundImages[index];
    });
}, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1123d3f19331e94eb31a2832f6ee8e20f6587674f1d1743f4cbf517bc3c85ad8&amp;width=600&amp;height=503&amp;lang=ru_RU&amp;scroll=true';

    const container = document.getElementById('map-container');
    container.appendChild(script);

    return () => {
      if (container.contains(script)) {
        container.removeChild(script);
    }
    };
}, []);

    return (  
        <main className="container-main">
        <div className="product-section">
          <div className="priduct-section-title-katalog">
            <h2 className="product-title">Продукты</h2>
            <div className="all_products">
              <form action="">
              <Link to="/catalog">
                    <button>
                       <p>
                           Все продукты
                       </p>
                    </button>
                  </Link>
              </form>
            </div>
          </div>
          <div className="products">
            <div className="product-catalog-layout">
              <div className="vertical-card-container">

              <div className="upper_products_mobile">
                    <div className="industrial-product-details-container_mobile">
                      <img src={motor_maslo} className="motor-oil-image_mobile" />
                      <div className="product_text_mobile">
                        <p className="motor-oil-heading_mobile">Моторные масла</p>
                        <span>
                          <Link to="/catalog/motor_masla">
                              <span lassName="motor-oil-details-button-text_mobile"> Подробнее</span>
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className="industrial-product-details-container_mobile">
                      <img src={motor_maslo} className="motor-oil-image_mobile" />
                      <div className="product_text_mobile">
                        <p className="motor-oil-heading_mobile">Трансмиссионные масла</p>
                        <span>
                          <Link to="/catalog/transmission_oils">
                          <span lassName="motor-oil-details-button-text_mobile"> Подробнее</span>
                          </Link>
                        </span>
                      </div>
                    </div>
                </div>
                
              <div className="upper_products_mobile">
                    <div className="industrial-product-details-container_mobile">
                      <img src={motor_maslo} className="motor-oil-image_mobile" />
                      <div className="product_text_mobile">
                        <p className="motor-oil-heading_mobile">Антикоррозионные составы</p>
                        <span>
                          <Link to="/catalog/anticorrosion_compounds">
                          <span lassName="motor-oil-details-button-text_mobile"> Подробнее</span>
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className="industrial-product-details-container_mobile">
                      <img src={motor_maslo} className="motor-oil-image_mobile" />
                      <div className="product_text_mobile">
                        <p className="motor-oil-heading_mobile">Смазочно-охлаждающие жидкости (СОЖ)</p>
                        <span>
                          <Link to="/catalog/cooling_lubricants">
                          <span lassName="motor-oil-details-button-text_mobile"> Подробнее</span>
                          </Link>
                        </span>
                      </div>
                    </div>
                </div>
                
              <div className="upper_products_mobile">
                    <div className="industrial-product-details-container_mobile">
                      <img src={motor_maslo} className="motor-oil-image_mobile" />
                      <div className="product_text_mobile">
                        <p className="motor-oil-heading_mobile">Огнестойкие и гидравлические масла</p>
                        <span>
                          <Link to="/catalog/fire_resistant_hydraulic_oils">
                          <span lassName="motor-oil-details-button-text_mobile"> Подробнее</span>
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className="industrial-product-details-container_mobile">
                      <img src={motor_maslo} className="motor-oil-image_mobile" />
                      <div className="product_text_mobile">
                        <p className="motor-oil-heading_mobile">Очистители и промывочные составы</p>
                        <span>
                          <Link to="/catalog/cleaners_flush_compounds">
                          <span lassName="motor-oil-details-button-text_mobile"> Подробнее</span>
                          </Link>
                        </span>
                      </div>
                    </div>
                </div>


                



                <div className="upper_products">
                    <div className="industrial-product-details-container">
                      <img src={motor_maslo} className="motor-oil-image" />
                      <div className="product_text">
                        <p className="motor-oil-heading">Моторные масла</p>
                        <span>
                          <Link to="/catalog/motor_masla">
                            <p className="motor-oil-details-button-text">Подробнее</p>
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className="industrial-product-details-container">
                      <img src={motor_maslo} className="motor-oil-image" />
                      <div className="product_text">
                        <p className="motor-oil-heading">Трансмиссионные масла</p>
                        <span>
                          <Link to="/catalog/transmission_oils">
                            <p className="motor-oil-details-button-text">Подробнее</p>
                          </Link>
                        </span>
                      </div>
                    </div>
                      <div className="industrial-product-details-container">
                        <img src={motor_maslo} className="motor-oil-image" />
                        <div className="product_text">
                          <p className="motor-oil-heading">Антикоррозионные составы</p>
                          <span>
                            <Link to="/catalog/anticorrosion_compounds">
                              <p className="motor-oil-details-button-text">Подробнее</p>
                            </Link>
                          </span>
                        </div>
                    </div>
                    <div className="industrial-product-details-container">
                        <img src={motor_maslo} className="motor-oil-image" />
                        <div className="product_text">
                          <p className="motor-oil-heading">Смазочно-охлаждающие жидкости (СОЖ)</p>
                          <span>
                            <Link to="/catalog/cooling_lubricants">
                              <p className="motor-oil-details-button-text">Подробнее</p>
                            </Link>
                          </span>
                        </div>
                    </div>
                </div>
                <div className="down_products">
                      <div className="industrial-product-details-container">
                        <img src={motor_maslo} className="motor-oil-image" />
                        <div className="product_text">
                          <p className="motor-oil-heading">Огнестойкие и гидравлические масла</p>
                          <span>
                            <Link to="/catalog/fire_resistant_hydraulic_oils">
                              <p className="motor-oil-details-button-text">Подробнее</p>
                            </Link>
                          </span>
                        </div>
                      </div>
                        <div className="industrial-product-details-container">
                          <img src={motor_maslo} className="motor-oil-image" />
                          <div className="product_text">
                            <p className="motor-oil-heading">Очистители и промывочные составы</p>
                            <span>
                              <Link to="/catalog/cleaners_flush_compounds">
                                <p className="motor-oil-details-button-text">Подробнее</p>
                              </Link>
                            </span>
                          </div>
                        </div>
                    <div className="industrial-product-details-container">
                      <img src={motor_maslo} className="motor-oil-image" />
                      <div className="product_text">
                        <p className="motor-oil-heading">Масла для обработки металлов</p>
                        <span>
                          <Link to="/catalog/metalworking_oils">
                            <p className="motor-oil-details-button-text">Подробнее</p>
                          </Link>
                        </span>
                      </div>
                    </div>
                      <div className="industrial-product-details-container">
                        <img src={motor_maslo} className="motor-oil-image" />
                        <div className="product_text">
                          <p className="motor-oil-heading">Составы для обработки давлением и литья</p>
                          <span>
                            <Link to="/catalog/pressure_casting_compounds">
                              <p className="motor-oil-details-button-text">Подробнее</p>
                            </Link>
                          </span>
                        </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hierarchical-container">
          <div className="priduct-section-title-katalog">
            <h2 className="product-title">Новости</h2>
            <div className="all_products">
              <form action="">
                <Link to="/news">
                  <button >
                    <p>
                        Все новости
                    </p>
                  </button>
                </Link>
              </form>
            </div>
          </div>
          <NewsSection />
          {/* <div className="news-section-container1">
            <div className="news_1_news_2">
              <Link to="/news/news_1">
                <div className="blue-gradient-box">
                    <div className='blue-gradient-box-text'>
                      <p className="announcement-text-css">Симпозиум в Ульяновске</p>
                      <p className="announcement-text">Уважаемые господа, 24 и 25 апреля состоится технологический симпозиум компании ДМТ в Ульяновске. Наша компания выступает в рамках технологического партнера на данном мероприятии.</p>
                    </div>
                </div>
              </Link>
              <Link to="/news/news_4">
                <div className="blue-gradient-box">
                    <div className='blue-gradient-box-text'>
                      <p className="announcement-text-css">Конференция в Калуге</p>
                      <p className="announcement-text">В конце апреля в г. Калуга состоится III-я Международная Конференция «Смазочные и технологические материалы для металлургической и метизной промышленности».</p>
                    </div>
                </div>
              </Link>
            </div>
              <div className="news-section-container2">
                  <Link to="/news/news_3">
                      <div className='blue-gradient-box-text'>
                        <p className="announcement-text-css">Анонс производства компрессорных масел COMP MC</p>
                        <p className="announcement-text">                        Уважаемые партнеры,
                          Спешим вам сообщить, что на производственной площадке концерна FUCHS в Калуге стало доступно
                          производство RENOLIN COMP 46 MC, которое дополнило линейку высококачественных масел для винтовых и поршневых компрессоров серии RENOLIN COMP MC 68, 100 и 150 вязкости.
                        </p>
                       </div>
                  </Link>
              </div>
            <div className="news_1_news_2">
              <Link to="/news/news_2">
                <div className="blue-gradient-box">
                    <div className='blue-gradient-box-text'>
                      <p className="announcement-text-css">Анонс производства RENOLIN DTA</p>
                      <p className="announcement-text">
                      Уважаемые коллеги,
                        Спешим вам сообщить, что на производственной площадке концерна FUCHS в Калуге стало доступно
                        производство масел RENOLIN DTA широкого диапазона вязкостей (вязкости 5 и 7 – по запросу).                      
                        </p>
                    </div>
                </div>
              </Link>
              <Link to="/news/news_5">
                <div className="blue-gradient-box">
                   <div className='blue-gradient-box-text'>
                      <p className="announcement-text-css">Форум Стекло и современные технологии</p>
                      <p className="announcement-text">
                        14 и 15 декабря состоялся ежегодный международный форум «Стекло и Современные Технологии – XXI». Компания ФУКС ОЙЛ уже на протяжении нескольких лет участвует в данном мероприятии.
                      </p>
                    </div>
                </div>
              </Link>
            </div>
          </div> */}
        </div>
            <div className="distributor-info-block">
              <p className="mega-heading">ООО "НОССА"<br />является прямым коммерческим партнером ООО «ФУКС ОИЛ» (дочернего подразделения FUCHS SE) на территории Пермского края.</p>
              <div className="distributor-info-section">
                <p className="company-description-text">Наша компания является официальным представителем моторных масел и смазок <b>FUCHS</b> - мы предлагаем широкий ассортимент продуктов по самым выгодным ценам!</p>
              </div>
            </div>
            <div id="map-container" className="vertical-spacer" />
            
      </main>
    );
}

export default Index;