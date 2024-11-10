// src/pages/ProductDetailPage.js

import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data/products'; // Импорт данных о продуктах
import '../../css/kartochkaTovara.css'; 
import SvgHome from '../../assetsImage/assets/house.svg';
import vk from '../../assetsImage/assets/icons8-вконтакте.svg';
import tg from '../../assetsImage/assets/icons8-телеграмма-app.svg';
import viber from '../../assetsImage/assets/icons8-viber.svg';
import whatsapp from '../../assetsImage/assets/icons8-whatsapp.svg';

function ProductDetailPage() {
    const { categoryId, productId } = useParams(); // Извлекаем параметры из URL

    const [specOpen, setSpecOpen] = useState(false);
    const [approvalOpen, setApprovalOpen] = useState(false);
    const [recommendationsOpen, setRecommendationsOpen] = useState(false);

    const toggleSpec = () => setSpecOpen(!specOpen);
    const toggleApproval = () => setApprovalOpen(!approvalOpen);
    const toggleRecommendations = () => setRecommendationsOpen(!recommendationsOpen);
    
    const category = products[categoryId];
    const product = category ? category.items.find(item => item.id === productId) : null;

    if (!product) {
        return <div>Продукт не найден</div>;
    }

    const vk_link = 'https://vk.com/permmaslafuchs'
    const tg_link = 'https://t.me/permmaslafuchs'
    const viber_link = 'viber://chat?number=79223216360'
    const whatsapp_link = 'https://wa.me/79223216360'



    return (
        <main>
          <div className="product-section-with-images-navigation-details">
            <div className="product-section-with-images-navigation-upper">
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
              <p className="product-title-text-style-navigation"><Link to={`/catalog/${categoryId}`}>{category.name}</Link></p>
            </div>
            <div className="product-section-with-images-navigation-upper"> 
              <div className="svg-container1">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="product-title-text-style-navigation"><Link to={`/catalog/${categoryId}/${productId}`}>{product.name}</Link></p>
            </div>
         </div>

         <div className="catalog-container">
      <h2 className="product-title-tovar">{product.name}</h2>
      <div className='products_catalog_tovar'>
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="product-details">
          <div className="product-info">
            <p className="product-description">{product.description}</p>
          </div>
          <p className="product-price">{product.price}</p>
        </div>
      </div>

      <div className='product_opisanie_mobile'>
          <div className="product-specifications">
      <h3 onClick={toggleSpec}>Спецификации <span className={`arrow ${specOpen ? 'open' : ''}`}>&#9660;</span> </h3>
      <div className={`collapsible-content ${specOpen ? 'active' : ''}`}>
        <ul>
          {Array.isArray(product.specifications) ? (
            product.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))
          ) : (
            <li>Спецификации отсутствуют</li>
          )}
        </ul>
      </div>
    </div>

    <div className="product-specifications">
      <h3 onClick={toggleApproval}>Одобрения <span className={`arrow ${approvalOpen ? 'open' : ''}`}>&#9660;</span></h3>
      <div className={`collapsible-content ${approvalOpen ? 'active' : ''}`}>
        <ul>
          {Array.isArray(product.approvals) ? (
            product.approvals.map((approval, index) => (
              <li key={index}>{approval}</li>
            ))
          ) : (
            <li>Одобрения отсутствуют</li>
          )}
        </ul>
      </div>
    </div>

    <div className="product-specifications">
      <h3 onClick={toggleRecommendations}>
        Рекомендации Fuchs <span className={`arrow ${recommendationsOpen ? 'open' : ''}`}>&#9660;</span>
      </h3>
      <div className={`collapsible-content ${recommendationsOpen ? 'active' : ''}`}>
        <ul>
          {Array.isArray(product.recommendations) ? (
            product.recommendations.map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))
          ) : (
            <li>{product.recommendations || 'Рекомендации отсутствуют'}</li>
          )}
        </ul>
      </div>
    </div>
          </div>
          <div className='product_opisanie'>
          <div className="product-specifications">
      <h3 onClick={toggleSpec}>Спецификации <span className={`arrow ${specOpen ? 'open' : ''}`}>&#9660;</span> </h3>
      <div className={`collapsible-content ${specOpen ? 'active' : ''}`}>
        <ul>
          {Array.isArray(product.specifications) ? (
            product.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))
          ) : (
            <li>Спецификации отсутствуют</li>
          )}
        </ul>
      </div>
    </div>

    <div className="product-specifications">
      <h3 onClick={toggleApproval}>Одобрения <span className={`arrow ${approvalOpen ? 'open' : ''}`}>&#9660;</span></h3>
      <div className={`collapsible-content ${approvalOpen ? 'active' : ''}`}>
        <ul>
          {Array.isArray(product.approvals) ? (
            product.approvals.map((approval, index) => (
              <li key={index}>{approval}</li>
            ))
          ) : (
            <li>Одобрения отсутствуют</li>
          )}
        </ul>
      </div>
    </div>

    <div className="product-specifications">
      <h3 onClick={toggleRecommendations}>
        Рекомендации Fuchs <span className={`arrow ${recommendationsOpen ? 'open' : ''}`}>&#9660;</span>
      </h3>
      <div className={`collapsible-content ${recommendationsOpen ? 'active' : ''}`}>
        <ul>
          {Array.isArray(product.recommendations) ? (
            product.recommendations.map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))
          ) : (
            <li>{product.recommendations || 'Рекомендации отсутствуют'}</li>
          )}
        </ul>
      </div>
    </div>
          </div>
      <div className='transport-section-section'></div>
      <div className="product-actions">
        {product.documentation && (
        <div className="info-box-block-tovar">
            <button onClick={() => window.open(product.documentation, '_blank')}>Документация</button>
        </div>
    )}
        <div className='info-box-block-tovar'><Link to="/contacts"><button>Где приобрести?</button></Link></div>
        <div className='info-box-block-tovar'><Link to="tel:+79223216360"><button>📞Позвонить</button></Link></div>
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

export default ProductDetailPage;
