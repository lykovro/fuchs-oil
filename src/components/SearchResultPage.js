import React from 'react';
import { useLocation } from 'react-router-dom';
import products from './data/products';

const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query').toLowerCase();

  const results = [];

  Object.keys(products).forEach((categoryKey) => {
    const category = products[categoryKey];
    const matchedItems = category.items.filter(item => 
      item.name.toLowerCase().includes(query)
    );

    results.push(...matchedItems);
  });

  return (
    <div>
      <h1>Результаты поиска для "{query}"</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} width="50" />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Ничего не найдено</p>
      )}
    </div>
  );
}

export default SearchResultsPage;
