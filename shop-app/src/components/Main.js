import React from 'react';
import Products from './Products';


export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="column">
        {products.map((products) => (
          <Products key={products.id} products={products} onAdd={onAdd}></Products>
        ))}
      </div>
    </main>
  );
}