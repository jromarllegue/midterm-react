import React from 'react';
import '../App.css'; // Import the CSS file

const Product = ({ id, name, description, price, addToCart }) => {
  return (
   
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{description}</p>
        <p className="card-text">₱{price.toFixed(2)}</p>
        <button className="btn btn-primary" onClick={() => addToCart(id)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;