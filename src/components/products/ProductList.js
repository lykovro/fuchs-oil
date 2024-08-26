import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data/products'; // Импорт данных о продуктах

function CategoryDetailPage() {
  const { categoryId } = useParams();

  // Фильтрация продуктов по id категории
  const categoryProducts = products.filter(product => product.categoryId === categoryId);

  return (
    <div>
      <h1>Продукты в категории</h1>
      <div className="products-list">
        {categoryProducts.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/catalog/${categoryId}/${product.id}`}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <p>{product.name}</p>
                <p>Подробнее</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryDetailPage;
