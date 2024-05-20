import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../../css/motor_masla.css'; // Импорт CSS стилей
import SvgHome from '../../assetsImage/assets/house.svg';

// Утилитная функция для разбивки массива на подмассивы по 4 элемента
const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  // Разбиваем массив продуктов на подмассивы по 4 элемента
  const productChunks = chunkArray(product.items, 4);

  const handleClick = () => {
    // Используем navigate с текущим путем для перезагрузки страницы
    navigate(0);
  };

  return (
    <main>
      <div className="product-section-with-images">
        <div className="svg-container">
          <Link to="/fuchs-oil"><img src={SvgHome} alt=""/></Link>
        </div>
        <div className="svg-container1">
          <svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip2_203_98)">
              <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
        <p className="product-title-text-style"><Link to="/catalog">Продукты</Link></p>
        <div className="svg-container1">
          <svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip2_203_98)">
              <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
        <p className="product-title-text-style"><Link to={`/catalog/${product.category}`}>{product.categoryName}</Link></p>
        <div className="svg-container1">
          <svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip2_203_98)">
              <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
        <p className="product-title-text-style"><Link to={`/catalog/${product.category}/${product.CategoryCatalogNameUrl}`}>{product.CategoryCatalogName}</Link></p>
        <div className="svg-container1">
          <svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip2_203_98)">
              <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
        <p className="product-title-text-style"><Link onClick={handleClick}>{product.idName}</Link></p>
      </div>
      <div className="catalog-container">
        <h2 className="catalog-title">{product.title}</h2>
        <div className="product-card-list">
          {productChunks.map((chunk, chunkIndex) => (
            <div className="product-row" key={chunkIndex}>
              {chunk.map(item => (
                <div className="fullwidth-container-legkovie" key={item.id}>
                  <Link to={`/${item.idName}`}>
                    <div className="vehicle-info-card-legkovie">
                      <div className="vehicle-image-container-legkovie"><img src={item.image} alt="" /></div>
                    </div>
                    <div className="transport-info-card-legkovie">
                      <p className="transport-heading-style-legkovie">{item.price}</p>
                      <div className="text_details">
                        <p className="trandsport-text">{item.name}</p>
                        <p className="transport-details-button-text-legkovie">Подробнее</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
