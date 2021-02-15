import React from 'react';

export default function Header(props) {
  return (
    // <header className="block row center">
      <div>
        
          <h1>Mkhwanazi Store...!</h1>
          <h4>#Basket{' '}</h4>
          {props.countCartItems ? (
            <button>{props.countCartItems}</button>
          ) : (
            ''
          )}
          
      </div>
    //  </header>
  );
}
