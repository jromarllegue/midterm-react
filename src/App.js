import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import ProductPages from './component/ProductPages';
import ViewCart from './component/ViewCart';
import './App.css';

const products = [
  { id: 1, name: "CPU", description: "Central processing unit (CPU) for processing computations and running programs.", price: 5000 },
  { id: 2, name: "GPU", description: "Graphics processing unit (GPU) for rendering graphics and accelerating tasks like gaming and video editing.", price: 10000 },
  { id: 3, name: "RAM", description: "Random-access memory (RAM) for temporary storage of data that the CPU needs to access quickly.", price: 3000 },
  { id: 4, name: "SSD", description: "Solid-state drive (SSD) for fast and reliable storage of data and programs.", price: 4000 },
  { id: 5, name: "Motherboard", description: "Motherboard connects all the components of a computer and allows them to communicate with each other.", price: 6000 },
  { id: 6, name: "PSU", description: "Power supply unit (PSU) provides power to all the components of a computer.", price: 2500 },
  { id: 7, name: "Monitor", description: "Monitor displays output from the computer's graphics card, allowing users to interact with the system visually.", price: 8000 },
  { id: 8, name: "Keyboard", description: "Keyboard is an input device used for typing text and issuing commands to the computer.", price: 1500 },
  { id: 9, name: "Mouse", description: "Mouse is an input device used for navigating graphical user interfaces and interacting with on-screen elements.", price: 1000 },
  { id: 10, name: "Cooling System", description: "Cooling system keeps the components of a computer within safe temperature limits to prevent overheating and damage.", price: 3500 }
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    const existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity++;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <Router>
    <div className="App">
      <header>
        <div className='logo-container'>
          <label className='logo'>SOLIDD <span>PARTS</span></label>
        </div>
      
        <Routes>
          <Route path="/products" element={<ProductPages products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<ViewCart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </header>
    </div>
  </Router>

  );
}
  
function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className='img-container'>
        <img 
          className='presentation-img'
          src='https://www.pcworld.com/wp-content/uploads/2023/04/170529-taipei-7-100724095-orig.jpg?quality=50&strip=all' 
          alt='Home'
        />
      </div>
      <div className='home-body'>
        <div className='home-content'>
          <label>Start shopping online today<br/>with <span>SOLIDD</span></label>
          <button className='shop-btn btn btn-primary'  onClick={() => { navigate('/products') } }>
            Proceed to Shopping
          </button>
        </div>
      </div>
    </div>

  );
}

export default App;
