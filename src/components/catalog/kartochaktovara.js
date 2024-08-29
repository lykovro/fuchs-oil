import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../css/kartochkaTovara.css'; 
import SvgHome from '../../assetsImage/assets/house.svg';
import vk from '../../assetsImage/assets/icons8-вконтакте.svg';
import tg from '../../assetsImage/assets/icons8-телеграмма-app.svg';

const KartochkaTovara = ({ tovarData }) => {
  const { tovarId } = useParams();
  
  const tovar = tovarData.find(p => p.id === tovarId);

  if (!tovar) {
    return <div>Продукт не найден</div>;
  }

  return (
    <main className="product-main">
      <div className="product-section-with-images">
        <div className='svg-container'>
            <Link to="/fuchs-oil"><img src={SvgHome} alt="Home" className="home-icon" /></Link>
        </div>
        <div className='svg-container1'>
            <svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip2_203_98)">
                <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
        <p className='product-title-text-style'>
            <Link to="/catalog" className="breadcrumb-link">Продукты</Link>
        </p>
        <div className='svg-container1'>
            <svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip2_203_98)">
                <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
        <p className='product-title-text-style'>
            <Link to={`/catalog/${tovar.category}`} className="breadcrumb-link">{tovar.categoryName}</Link>
        </p>
        <div className='svg-container1'>
            <svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip2_203_98)">
                <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                </g>
             </svg>
        </div>
        <p className='product-title-text-style'>
            <Link to={`/catalog/industrial_smasochnie_materials/${tovar.CategoryCatalogNameUrl}/${tovar.id}`} className="breadcrumb-link">{tovar.CategoryCatalogName}</Link>
        </p>
        <div className='svg-container1'>
            <svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip2_203_98)">
                <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                </g>
             </svg>
        </div>
        <p className='product-title-text-style'>
            <Link to={`/catalog/industrial_smasochnie_materials/${tovar.CategoryCatalogNameUrl}/${tovar.id}`} className="breadcrumb-link">{tovar.productidName}</Link>
        </p>
        <div className='svg-container1'>
            <svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip2_203_98)">
                <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                </g>
             </svg>
        </div>
        <p className='product-title-text-style'>
            <Link to={`/catalog/industrial_smasochnie_materials/${tovar.CategoryCatalogNameUrl}/${tovar.id}`} className="breadcrumb-link">{tovar.title}</Link>
        </p>
      </div>
      <div className="catalog-container">
        <h2 className="product-title-tovar">{tovar.title}</h2>
        <div className='products_catalog_tovar'>
              <div className="product-image-container">
                <img src={tovar.image} alt={tovar.title} className="product-image" />
              </div>
            <div className="product-details">
                <div className="product-info">
                <p className="product-description">{tovar.description}</p>
              </div>
              <p className="product-price">{tovar.price}</p>
              <div className='product_opisanie'>
                  <div className="product-specifications">
                    <h3>Спецификации</h3>
                    <ul>
                      {tovar.specifications.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="product-specifications">
                    <h3>Одобрения</h3>
                    <ul>
                      {tovar.approvals.map((approval, index) => (
                        <li key={index}>{approval}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="product-specifications">
                    <h3>Рекомендации Fuchs</h3>
                    <ul>
                      {tovar.recommendations.map((recommendation, index) => (
                        <li key={index}>{recommendation}</li>
                      ))}
                    </ul>
                  </div>
              </div>
            </div>
        </div>
        <div className='transport-section'></div>
        <div className="product-actions">
          <div className='info-box-block-tovar'><button>Описание продукта</button></div>
          <div className='info-box-block-tovar'><button>Где приобрести?</button></div>
          <div className='info-box-block-tovar'><button>Зачем я тут?</button></div>
        </div>
        <div className="contact-section-tovar">
          <div className="contacts-tovar">
              <div className="contact-info-section-svyaz-tovar">
                <h2 className="contact-message-tovar">Есть вопросы?</h2>
                <p className="contact-message1-tovar">Свяжитесь с нами любым удобным для Вас способом</p>
              </div>
              <div className="contact-info-logos-tovar">
                  <a href=""><img src={vk} className="contact-section-banner" alt="Vkontakte"/></a>
                  <a href=""><img src={tg} className="contact-section-banner" alt="Telegram"/></a>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default KartochkaTovara;