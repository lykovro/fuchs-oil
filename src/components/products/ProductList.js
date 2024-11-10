import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data/products'; 
import '../../css/industrialnye_smazochnie_materials.css'; 
import SvgHome from '../../assetsImage/assets/house.svg';
import vk from '../../assetsImage/assets/icons8-вконтакте.svg';
import tg from '../../assetsImage/assets/icons8-телеграмма-app.svg';
import viber from '../../assetsImage/assets/icons8-viber.svg';
import whatsapp from '../../assetsImage/assets/icons8-whatsapp.svg';

function CategoryDetailPage() {
    const { productsId } = useParams();

  const category = products[productsId] || {};
  const categoryProducts = category.items || [];
  const categoryName = category.name || 'Продукты'; 

  const groupedProducts = [];
  for (let i = 0; i < categoryProducts.length; i += 4) {
    groupedProducts.push(categoryProducts.slice(i, i + 4));
  }

  const groupedProducts_mob = [];
  for (let i = 0; i < categoryProducts.length; i += 2) {
    groupedProducts_mob.push(categoryProducts.slice(i, i + 2));
  }

  const vk_link = 'https://vk.com/permmaslafuchs'
const tg_link = 'https://t.me/permmaslafuchs'
const viber_link = 'viber://chat?number=79223216360'
const whatsapp_link = 'https://wa.me/79223216360'

  return (
    <main>
      <div className="product-section-with-images-navigation">
        <div className="svg-container">
          <Link to="/fuchs-oil"><img src={SvgHome} alt="Home"/></Link>
        </div>
        <div className="svg-container1">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
          </svg>            
        </div>
        <p className="product-title-text-style-navigation"><Link to="/catalog">Продукты</Link></p>
        <div className="svg-container1">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
          </svg>            
        </div>
        <p className="product-title-text-style-navigation"><Link to={`/catalog/${productsId}`}>{categoryName}</Link></p>
      </div>

      <div className="catalog-container_desktop">
        <h2 className="catalog-title">{categoryName}</h2>
        {groupedProducts.map((group, index) => (
          <><div key={index} className="fullwidth-container-upp">
            {group.map(product => (
              <div key={product.id} className="fullwidth-container-legkovie">
                <Link to={`/catalog/${productsId}/${product.id}`}>
                  <div className="vehicle-info-card-legkovie">
                    <div className="vehicle-image-container-legkovie">
                      <img src={product.image} alt={product.name} />
                    </div>
                  </div>
                  <div className="transport-info-card-legkovie">
                    
                    <div className="text_details">
                     
                      <p className="trandsport-text">{product.name}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div><div className='transport-section'></div></>
          ))}
      </div>

      <div className="catalog-container_mobile">
        {groupedProducts_mob.map((group, index) => (
          <><div key={index} className="fullwidth-container-upp_mobile">
            {group.map(product => (
              <div key={product.id} className="fullwidth-container-legkoviev_mobile">
                <Link to={`/catalog/${productsId}/${product.id}`}>
                  <div className="vehicle-info-card-legkovie_mobile">
                    <div className="vehicle-image-container-legkovie_mobile">
                      <img src={product.image} alt={product.name} />
                    </div>
                  </div>
                  <div className="transport-info-card-legkovie_mobile">
                    
                    <div className="text_details_mobile">
                      <p className="trandsport-text_mobile">{product.name}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div><div className='transport-section_mobile'></div></>
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
              <a href={vk_link}><img src={vk} className="contact-section-banner" alt="Vkontakte" /></a>
              <a href={tg_link}><img src={tg} className="contact-section-banner" alt="Telegram" /></a>
              <a href={viber_link}><img src={viber} className="contact-section-banner" alt="Viber" /></a>
              <a href={whatsapp_link}><img src={whatsapp} className="contact-section-banner" alt="Whastsapp" /></a>
            </div>
            <div className="contact-info-logos-mobile">
                         <div className="contact-info-logos-mobile-section">
                            <a href={vk_link}><img src={vk} className="contact-section-banner" alt="Vkontakte" /></a>
                            <a href={tg_link}><img src={tg} className="contact-section-banner" alt="Telegram" /></a>
                        </div>
                         <div className="contact-info-logos-mobile-section">
                            <a href={viber_link}><img src={viber} className="contact-section-banner" alt="Viber" /></a>
                            <a href={whatsapp_link}><img src={whatsapp} className="contact-section-banner" alt="Whastsapp" /></a>
                          </div>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CategoryDetailPage;
