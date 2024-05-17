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
      {productChunks.map((chunk, index) => (
        <div key={index}>
          {chunk.map(item => (
            <div key={item.id}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
};

export default ProductsPage;
