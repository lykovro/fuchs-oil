import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import products from './data/products';
import SvgHome from '../assetsImage/assets/house.svg'

const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query').toLowerCase();

  const results = [];

  Object.keys(products).forEach((categoryKey) => {
    const category = products[categoryKey];
    const matchedItems = category.items.filter(item => 
      item.name.toLowerCase().includes(query)
    );

    matchedItems.forEach(item => {
      results.push({
          ...item,
          category: categoryKey // Добавляем ключ категории к каждому элементу
      });
  });
  });

  const groupedResults = [];
  for (let i = 0; i < results.length; i += 4) {
    groupedResults.push(results.slice(i, i + 4));
  }

  return (

    <main>
      <div className="product-section-with-images-navigation">
        <div className="svg-container">
          <Link to="/fuchs-oil"><img src={SvgHome} alt="Home" /></Link>
        </div>
        <div className="svg-container1">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="product-title-text-style-navigation"><Link to="/catalog">Продукты</Link></p>
        <div className="svg-container1">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.7071,7l5,5l-5,5" stroke="#90979C" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="product-title-text-style-navigation">Результаты поиска</p>
      </div>
      <div className="catalog-container">
          <h2 className="catalog-title">Результаты поиска для "{query}"</h2>
          {groupedResults.length > 0 ? (
            groupedResults.map((group, index) => (
              <React.Fragment key={index}>
                <div className="fullwidth-container-upp">
                  {group.map((product) => (
                    <div key={product.id} className="fullwidth-container-legkovie">
                      <Link to={`/catalog/${product.category}/${product.id}`}>
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
                </div>
                <div className='transport-section'></div>
              </React.Fragment>
            ))
          ) : (
            <div className= 'catalog-container_nothing'>
              <p>Ничего не найдено</p>
            </div>
          )}
        </div>
    </main>
    
  );
}

export default SearchResultsPage;
