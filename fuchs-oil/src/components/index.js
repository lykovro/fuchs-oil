import React, { useEffect  } from 'react';
import '../css/index.css'; // Импорт CSS стилей для HomePage
import metalurgia from '../assetsImage/assets/metalurgiya-glavnaya.jpg'
import motor_maslo from '../assetsImage/assets/img_5_741_5cc53a.png'
import mainImage1 from '../assetsImage/assets/metalurgiya-glavnaya.jpg'; // Импортируйте изображения
import mainImage2 from '../assetsImage/assets/chemical.jpg';
import mainImage3 from '../assetsImage/assets/new.jpg'; // Импортируйте изображения
import mainImage4 from '../assetsImage/assets/new (1).jpg';
import mainImage5 from '../assetsImage/assets/white_sedan_driving_on_the_highway_accross_the_forest_01.jpg'; // Импортируйте изображения
import mainImage6 from '../assetsImage/assets/stroitelnaya_p2.jpg';
import HeaderIndex from './header_index';


const Index = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1123d3f19331e94eb31a2832f6ee8e20f6587674f1d1743f4cbf517bc3c85ad8&width=1058&height=444&lang=ru_RU&scroll=true';

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
                <button >
                  <p>
                      Все продукты
                  </p>
                </button>
              </form>
            </div>
          </div>
          <div className="products">
            <div className="product-catalog-layout">
              <div className="vertical-card-container">
                <div className="upper_products">
                    <div className="industrial-product-details-container">
                      <img src={motor_maslo} className="motor-oil-image" />
                      <div className="product_text">
                        <p className="motor-oil-heading">Моторные масла</p>
                        <span>
                          <p className="motor-oil-details-button-text"><a href="">Подробнее</a></p>
                        </span>
                      </div>
                    </div>
                    <div className="industrial-product-details-container">
                      <img src={motor_maslo} className="motor-oil-image" />
                      <div className="product_text">
                        <p className="motor-oil-heading">Универсальные тракторные масла</p>
                        <span>
                          <p className="motor-oil-details-button-text"><a href="">Подробнее</a></p>
                        </span>
                      </div>
                    </div>
                      <div className="industrial-product-details-container">
                        <img src={motor_maslo} className="motor-oil-image" />
                        <div className="product_text">
                          <p className="motor-oil-heading">Общеиндустриальные продукты</p>
                          <span>
                            <p className="motor-oil-details-button-text"><a href="">Подробнее</a></p>
                          </span>
                        </div>
                    </div>
                    <div className="industrial-product-details-container">
                        <img src={motor_maslo} className="motor-oil-image" />
                        <div className="product_text">
                          <p className="motor-oil-heading">Пластичные смазки</p>
                          <span>
                            <p className="motor-oil-details-button-text"><a href="">Подробнее</a></p>
                          </span>
                        </div>
                    </div>
                </div>
                <div className="down_products">
                      <div className="industrial-product-details-container">
                        <img src={motor_maslo} className="motor-oil-image" />
                        <div className="product_text">
                          <p className="motor-oil-heading">Трансмиссионные масла</p>
                          <span>
                            <p className="motor-oil-details-button-text"><a href="">Подробнее</a></p>
                          </span>
                        </div>
                      </div>
                        <div className="industrial-product-details-container">
                          <img src={motor_maslo} className="motor-oil-image" />
                          <div className="product_text">
                            <p className="motor-oil-heading">Антифризы</p>
                            <span>
                              <p className="motor-oil-details-button-text"><a href="">Подробнее</a></p>
                            </span>
                          </div>
                        </div>
                    <div className="industrial-product-details-container">
                      <img src={motor_maslo} className="motor-oil-image" />
                      <div className="product_text">
                        <p className="motor-oil-heading">Продукты для защиты от коррозии</p>
                        <span>
                          <p className="motor-oil-details-button-text"><a href="">Подробнее</a></p>
                        </span>
                      </div>
                    </div>
                      <div className="industrial-product-details-container">
                        <img src={motor_maslo} className="motor-oil-image" />
                        <div className="product_text">
                          <p className="motor-oil-heading">Продукты для термической обработки</p>
                          <span>
                            <p className="motor-oil-details-button-text"><a href="">Подробнее</a></p>
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
            <h2 className="news-heading">Новости</h2>
            <div className="all_products">
              <form action="">
                <button >
                  <p>
                      Все новости
                  </p>
                </button>
              </form>
            </div>
          </div>
          <div className="news-section-container1">
            <div className="news_1_news_2">
              <div className="blue-gradient-box">
                <a href="">
                  <p className="announcement-text-css">Анонс производства синтетических компрессорных масел серии RENOLIN UNISYN OL</p>
                  <p className="announcement-text">на производственной площадке концерна FUCHS в Калуге стало доступно производство синтетических компрессорных масел</p>
                </a>
              </div>
              <div className="tech-forum-container">
                <a href="">
                  <p className="forum-title-text-style">Форум Стекло и современные технологии</p>
                  <p className="modern-tech-forum-description">14 и 15 декабря состоялся ежегодный международный форум</p>
                </a>
              </div>
            </div>
            <div className="news-section-container2">
              <div className="news-card">
                <p className="news-article-card">Новость</p>
              </div>
            </div>
            <div className="news_4_news_5">
              <div className="product-input-container">
                <div className="news-container">
                  <p className="news-heading-style">Новость</p>
                  <p className="news-article-style">Новость</p>
                </div>
              </div>
              <div className="gradient-news-container">
                <p className="news-heading-text-style">Новость</p>
                <p className="news-article-snippet">Новость</p>
              </div>
            </div>
          </div>
        </div>
            <div className="distributor-info-block">
              <p className="mega-heading">FUCHS<br />Официальный дистрибьютор оригинальных смазочных материалов Fuchs в России</p>
              <div className="distributor-info-section">
                <p className="company-description-text">Наша компания является официальным дистрибьютором моторных масел и смазок Fuchs - мы предлагаем широкий ассортимент товаров по самым выгодным ценам!</p>
              </div>
            </div>
            <div id="map-container" className="vertical-spacer" />
      </main>
    );
}

export default Index;