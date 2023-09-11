

import React from 'react'; // Import React
import './Shirt.css';

const Shirt = ({ shirt, handleAddToCart }) => {
    const { img, price, id, title } = shirt;
    return (
        <div className='shirt'>
            <p>Title: {title}</p>
            <img src={img} alt={title} /> {/* Use the title as alt text */}
            <p>Price: {price}</p>
            <button onClick={() => handleAddToCart(shirt)}>Buy Now</button> {/* Pass 'shirt' instead of 'tshirt' to handleAddToCart */}
        </div>
    );
};

export default Shirt;
