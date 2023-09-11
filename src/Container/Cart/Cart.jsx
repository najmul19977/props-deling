import React from 'react';

const Cart = ({cart,removeFormCard}) => {
    return (
        <div>
            <h2>Cart Section:{cart.length}</h2>
            {
                cart.map(shirt => <p key={shirt.id}>{shirt.title} <button onClick={() =>removeFormCard(shirt.id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;
