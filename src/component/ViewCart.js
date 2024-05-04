import React from 'react';
import { Link } from 'react-router-dom';

const ViewCart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <h2 className="card-header">My Cart</h2>
            <ul >
              {cart.map(item => (
                <li key={item.id} className="list-group-item d-flex flex-column align-items-start">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <span>{item.name}</span>
                    <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                  <span className="badge bg-primary rounded-pill mt-2">Quantity: {item.quantity}</span>
                  <span className="badge bg-secondary mt-2">Price: ₱{item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="card-footer">
              <p className="card-text">Total Price: ₱{totalPrice.toFixed(2)}</p>
              <p className="card-text">Total Quantity: {totalQuantity}</p>
            </div>
            {/* Add button to go back to the shop */}
            <div className="card-footer">
              <Link to="/products">
                <button className="btn btn-primary">Back to Shop</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
