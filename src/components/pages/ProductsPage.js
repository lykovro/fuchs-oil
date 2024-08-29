import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../data/categories'; // Импорт категорий
import '../../css/industrialnye_smazochnie_materials.css'; 
import SvgHome from '../../assetsImage/assets/house.svg';
import vk from '../../assetsImage/assets/icons8-вконтакте.svg';
import tg from '../../assetsImage/assets/icons8-телеграмма-app.svg';

function CategoryPage() {
    const categoryPairs = [];
    for (let i = 0; i < categories.length; i += 2) {
      categoryPairs.push(categories.slice(i, i + 2));
    }
    return (
        <main>
          <div className="product-section-with-images-navigation">
            <div className="svg-container">
              <Link to="/"><img src={SvgHome} alt="Home" /></Link>
            </div>
            <div className="svg-container1">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="product-title-text-style-navigation">
              <Link to="/catalog">Продукты</Link>
            </p>
          </div>
          <div className="catalog-container">
            <h2 className="catalog-title">Выберите категорию</h2>
            <div className="products-cards-lists">
              {categoryPairs.map((pair, index) => (
                <div key={index} className="product-card-list-industrial">
                  {pair.map(category => (
                    <div key={category.id} className="fullwidth-container-industrial">
                      <div className="product-card-list-industrial">
                        <div className="vehicle-info-card-industrial">
                          <div className="fullwidth-container-transport_vnedorojnaya">
                              <Link to={`/catalog/${category.id}`}>
                                <div className="transport-card-industrial">
                                  <div className="vehicle-image-container-industrial">
                                    <img src={category.image} alt={category.name} />
                                  </div>
                                  <div className="transport-info-card-industrial">
                                    <p className="transport-heading-style-industrial">{category.name}</p>
                                    <p className="transport-details-button-text-industrial">Подробнее</p>
                                  </div>
                                </div>
                                </Link>
                            <div className="transport-section"></div>
                          </div>
                          </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="contact-section1">
            <div className="contact-section">
              <div className="contacts">
                <div className="contact-info-section-news">
                  <h2 className="contact-message">Есть вопросы?</h2>
                  <p className="contact-message1">Свяжитесь с нами любым удобным для Вас способом</p>
                </div>
                <div className="contact-info-logos">
                  <a href="#"><img src={vk} className="contact-section-banner" alt="Vkontakte" /></a>
                  <a href="#"><img src={tg} className="contact-section-banner" alt="Telegram" /></a>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
    }

export default CategoryPage;
