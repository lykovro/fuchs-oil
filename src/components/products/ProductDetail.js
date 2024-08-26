import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products'; // Импорт данных о продуктах

function ProductDetailPage() {
  const { categoryId, productId } = useParams();

  // Поиск продукта по его ID
  const product = products.find(product => product.id === productId && product.categoryId === categoryId);

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <div className="product-detail">
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetailPage;
