import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data/products'; 
import '../../css/industrialnye_smazochnie_materials.css'; 
import SvgHome from '../../assetsImage/assets/house.svg';
import vk from '../../assetsImage/assets/icons8-вконтакте.svg';
import tg from '../../assetsImage/assets/icons8-телеграмма-app.svg';

function CategoryDetailPage() {
    const { productsId } = useParams();

  const category = products[productsId] || {};
  const categoryProducts = category.items || [];
  const categoryName = category.name || 'Продукты'; 

  const groupedProducts = [];
  for (let i = 0; i < categoryProducts.length; i += 4) {
    groupedProducts.push(categoryProducts.slice(i, i + 4));
  }

  return (
    <main>
      <div className="product-section-with-images">
        <div className="svg-container">
          <Link to="/fuchs-oil"><img src={SvgHome} alt="Home"/></Link>
        </div>
        <div className="svg-container1">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
          </svg>            
        </div>
        <p className="product-title-text-style"><Link to="/catalog">Продукты</Link></p>
        <div className="svg-container1">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
          </svg>            
        </div>
        <p className="product-title-text-style"><Link to={`/catalog/transport_vnedorojnaya/motor_masla/${productsId}`}>{categoryName}</Link></p>
      </div>

      <div className="catalog-container">
        <h2 className="catalog-title">{categoryName}</h2>
        {groupedProducts.map((group, index) => (
          <div key={index} className="fullwidth-container-upp">
            {group.map(product => (
              <div key={product.id} className="fullwidth-container-legkovie">
                <Link to={`/catalog/${productsId}/${product.id}`}>
                  <div className="vehicle-info-card-legkovie">
                    <div className="vehicle-image-container-legkovie">
                      <img src={product.image} alt={product.name} />
                    </div>
                  </div>
                  <div className="transport-info-card-legkovie">
                    <p className="transport-heading-style-legkovie">{product.price || '0 000Р'}</p>
                    <div className="text_details">
                      <p className="trandsport-text">{product.name}</p>
                      <p className="transport-details-button-text-legkovie">Подробнее</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
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

export default CategoryDetailPage;
