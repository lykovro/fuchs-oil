import React from 'react';
import { useParams } from 'react-router-dom';
import '../../css/motor_masla.css';
import SvgHome from '../../assetsImage/assets/house.svg';
import { Link } from 'react-router-dom';


const chunkArray = (arr, size) => {
  return arr.reduce((chunks, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }
    chunks[chunkIndex].push(item);
    return chunks;
  }, []);
};

const ProductsPage = ({ productsGroup }) => {
  const { CategoryId } = useParams();
  console.log("CategoryId from URL:", CategoryId);
  console.log("productsGroup:", productsGroup);

  const product = productsGroup.find(p => p.id === CategoryId);
  console.log("Product found:", product);

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  const productChunks = chunkArray(product.items, 1);

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
        <p className="product-title-text-style"><Link to={`/catalog/${product.id}`}>{product.idName}</Link></p>

      </div>
      <div className="catalog-container">
        <h2 className="catalog-title">{product.title}</h2>
        <div className="product-card-list-motor-masla">
          {productChunks.map((chunk, chunkIndex) => (
            <div className="fullwidth-container-motor-masla" key={chunkIndex}>
              {chunk.map(item => (
                  <Link to={`/catalog/${product.category}/${product.id}/${item.idName}`}>
                    <div className="vehicle-info-card-motor-masla">
                      <div className="transport-card-motor-masla">
                        <div className="vehicle-image-container-motor-masla"><img src={item.image} alt="" /></div>
                          <div className="transport-info-card-motor-masla">
                            <p className="transport-heading-style-motor-masla">{item.name}</p>
                            <p className="transport-details-button-text-motor-masla">Подробнее</p>
                        </div>
                      </div>
                    </div>
                  </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
