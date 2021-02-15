import React from 'react';




function Products(props) {
    const { products, onAdd } = props;
    return (
      <div>
        <img className="small" src={products.image} alt={products.name} />
        <h3>{products.name}</h3>
        <div>R{products.price}</div>
        <h4>{products.description}</h4>
        <div>
          <button onClick={() => onAdd(products)}>Add To Cart</button>
        </div>
      </div>
    );
  }
export default  Products