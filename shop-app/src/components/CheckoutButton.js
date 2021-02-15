import React from 'react';

function CheckoutButton(){

    function refreshPage(){
        window.location.reload();
    } 
    

return(
<div >

    <button type="button" onClick={()=>refreshPage()}>CHECKOUT</button>
         </div>
)
    
}


         export default CheckoutButton;