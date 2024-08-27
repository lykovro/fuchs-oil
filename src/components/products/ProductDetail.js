import React from 'react';
import { useParams } from 'react-router-dom';
import productDetails from '../data/productDetails'; // Импорт данных о продуктах

import SvgHome from '../../assetsImage/assets/house.svg';
import vk from '../../assetsImage/assets/icons8-вконтакте.svg';
import tg from '../../assetsImage/assets/icons8-телеграмма-app.svg';

function ProductDetailPage() {
  const { categoryId, productId } = useParams();

  const category = productDetails[categoryId];
  const product = category ? category[productId] : null;

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div>
      <div className="breadcrumb">
        <div className="svg-container">
          <a href="/"><img src={SvgHome} alt="Home" /></a>
        </div>
        <span> / </span>
        <div className="svg-container">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
          </svg>
        </div>
        <span> / </span>
        <a href={`/catalog/${categoryId}`}>{categoryId}</a>
        <span> / </span>
        <span>{product.name}</span>
      </div>

      <div className="product-detail">
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>Цена: {product.price}</p>
        <p>Спецификации: {product.specs}</p>
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
    </div>
  );
}

export default ProductDetailPage;
