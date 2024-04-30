import React, { useState } from 'react';
import '../css/header_index.css'; // Импорт CSS стилей
import banner from '../assetsImage/assets/img_2_728_d81a07.png'
import search from '../assetsImage/assets/search-svgrepo-com.svg'
import mainImage1 from '../assetsImage/assets/metalurgiya-glavnaya.jpg'; // Импортируйте изображения
import mainImage2 from '../assetsImage/assets/chemical.jpg';
import mainImage3 from '../assetsImage/assets/new.jpg'; // Импортируйте изображения
import mainImage4 from '../assetsImage/assets/new (1).jpg';
import mainImage5 from '../assetsImage/assets/white_sedan_driving_on_the_highway_accross_the_forest_01.jpg'; // Импортируйте изображения
import mainImage6 from '../assetsImage/assets/stroitelnaya_p2.jpg';


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

  const changeImage = (newImage) => {
    setTransition(true); // Включаем плавный переход
    setTimeout(() => {
        setMainImage(newImage);
        setTransition(false); // Выключаем плавный переход после смены изображения
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
                    <p className="company-info-styles"><a href="">О компании</a></p>
                    <p className="company-info-styles"><a href="">Новости</a></p>
                    <p className="company-info-styles"><a href="">Партнерам</a></p>
                    <p className="company-info-styles"><a href="">Корпоративные политики</a></p>
                    <p className="company-info-styles"><a href="">Контакты</a></p>
                  </div>
                  <div className="logo_button_input">
                    <div className="logo_button">
                      <a href=""><img src={banner} className="banner-image" /></a>
                      <div className="button_product">
                        <form action="">
                          <button>
                            <p>
                              Продукты
                            </p>
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="product-input-container_search">
                      <form className="search" action="#0">
                        <input id="searchInput" className="field" name="search" type="text" placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur} />
                        <button type="submit" className="search_button"><img src={search} alt="" /></button>
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
                  <div id="image_header_1" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage1)}><p><a href="">Металлургия и Машиностроение</a></p></div>
                  <div id="image_header_2" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage2)}><p><a href="">Химическая и горнодобывающая промышленность</a></p></div>
                  <div id="image_header_3" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage3)}><p><a href="">Сельское хозяйство</a></p></div>
                  <div id="image_header_4" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage4)}><p><a href="">Коммерческий транспорт</a></p></div>
                  <div id="image_header_5" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage5)} ><p><a href="">Легковой автотранспорт</a></p></div>
                  <div id="image_header_6" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage6)} ><p><a href="">Строительная промышленность</a></p></div>
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
                    opacity: transition ? '0' : '1', // Добавляем стиль для плавного изменения прозрачности
                }} />
      </div>
    </header>
  );
}

export default HeaderIndex;
