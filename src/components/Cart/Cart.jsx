import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
        if ( product.quantity === 0){
            product.quantity = 1;
        }

        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 7/100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
                <p>Selected Items: {quantity}</p>
                
                <p>Total Price: ${totalPrice} </p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>tax: ${tax.toFixed(2)}</p>
                <h2>Grand Total: $ {grandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;