import React from 'react';
import CheckoutButton from './CheckoutButton';


function Products(props) {
    const { products, onAdd } = props;
    return (
      <div>
      {/* <div className='column'> */}
        <img className="small" src={products.image} alt={products.name} />
        {/* </div> */}
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