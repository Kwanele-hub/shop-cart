import React from 'react';
import CheckoutButton from './CheckoutButton';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice 

  
  return (
    <div >
      <h5>Cart Items</h5>
      <div>
        {cartItems.length === 0 && <div></div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                *
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
              +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x R{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">R{itemsPrice.toFixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>R{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <CheckoutButton/>
          </>
        )}
      </div>
    </div>
  );
}