import React, { useState, useEffect } from 'react';
import '../css/header_index.css'; 
import banner from '../assetsImage/assets/img_2_728_d81a07.png'
import search from '../assetsImage/assets/search-svgrepo-com.svg'
import mainImage1 from '../assetsImage/assets/metalurgiya-glavnaya.jpg'; 
import mainImage2 from '../assetsImage/assets/chemical.jpg';
import mainImage3 from '../assetsImage/assets/new.jpg'; 
import mainImage4 from '../assetsImage/assets/new (1).jpg';
import mainImage5 from '../assetsImage/assets/white_sedan_driving_on_the_highway_accross_the_forest_01.jpg';
import mainImage6 from '../assetsImage/assets/stroitelnaya_p2.jpg';
import { Link } from 'react-router-dom';


const HeaderIndex = () => {

  const [placeholder, setPlaceholder] = useState('Введите название продукта');

  const handleFocus = () => {
      setPlaceholder('');
  };

  const handleBlur = (e) => {
      if (!e.target.value) {
          setPlaceholder('Введите название продукта');
      }
  };

  const [mainImage, setMainImage] = useState(mainImage1);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (mainImage) {
        case mainImage1:
          changeImage(mainImage2);
          break;
        case mainImage2:
          changeImage(mainImage3);
          break;
        case mainImage3:
          changeImage(mainImage4);
          break;
        case mainImage4:
          changeImage(mainImage5);
          break;
        case mainImage5:
          changeImage(mainImage6);
          break;
        case mainImage6:
          changeImage(mainImage1);
          break;
        default:
          break;
      }
    }, 6000); 


    return () => clearInterval(intervalId);
  }, [mainImage]);

  const changeImage = (newImage) => {
    setTransition(true); 
    setTimeout(() => {
        setMainImage(newImage);
        setTransition(false); 
    }, 300);
  };

  return (
    <header className="corporate-info-container1">
      <div className="corporate-section">
        <div className="company-info-container">
          <div className="header-navigation-bar">
            <div className="corporate-info-container">
              <div className="vertical-section-with-products">
                <div className="company-info-logo">
                  <div className="company-news-section">
                    <p className="company-info-styles"><a href=""><Link to="/about">О компании</Link></a></p>
                    <p className="company-info-styles"><a href=""><Link to="/news">Новости</Link></a></p>
                    <p className="company-info-styles"><a href=""><Link to="/partners">Партнерам</Link></a></p>
                    <p className="company-info-styles"><a href=""><Link to="/corpolitic">Корпоративные политики</Link></a></p>
                    <p className="company-info-styles"><a href=""><Link to="/contacts">Контакты</Link></a></p>
                  </div>
                  <div className="logo_button_input">
                    <div className="logo_button">
                      <a href=""><Link to="/index"><img src={banner} className="banner-image" /></Link></a>
                      <div className="button_product">
                        <form action="">
                          <Link to="/catalog">
                            <button>
                              <p>
                                Продукты
                              </p>
                            </button>
                          </Link>
                        </form>
                      </div>
                    </div>
                    <div className="product-input-container_search">
                      <form className="search" action="#0">
                        <input id="searchInput" className="field" name="search" type="text" placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur} />
                        <button type="submit" className="search_button"></button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="column-layout-container">
                  <div className="hierarchical-text-container">
                    <div className="vertical-section-aside">
                      <p className="industry-description"><a href="tel:+7 888 777-88-55">+7 888 777-88-55</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="partner-info-section">
                <div className="industrial-product-categories-container">
                  <Link to="/solution/mattalurgia_machine">
                    <div id="image_header_1" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage1)}><p><a href="">Металлургия и Машиностроение</a></p></div>
                  </Link >
                  <Link to="/solution/khimicheskaya_promyshlennost">
                    <div id="image_header_2" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage2)}><p><a href="">Химическая и горнодобывающая промышленность</a></p></div>
                  </Link>
                  <Link to="/solution/selskoe_khozyaystvo">
                    <div id="image_header_3" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage3)}><p><a href="">Сельское хозяйство</a></p></div>
                  </Link>
                  <Link to="/solution/kommercheskiy_transport">
                    <div id="image_header_4" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage4)}><p><a href="">Коммерческий транспорт</a></p></div>
                  </Link>
                  <Link to="/solution/legkovoy_avtotransport">
                    <div id="image_header_5" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage5)} ><p><a href="">Легковой автотранспорт</a></p></div>
                  </Link>
                  <Link to="/solution/promyshlennost_stroitelnykh_materialov">
                    <div id="image_header_6" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage6)} ><p><a href="">Строительная промышленность</a></p></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="company-info-layout">
        <img id="header_image" src={mainImage} alt="Default Image"                 
        style={{
                    transition: transition ? 'opacity 0.3s ease-in-out' : '',
                    opacity: transition ? '0' : '1',
                }} />
      </div>
    </header>
  );
}

export default HeaderIndex;
