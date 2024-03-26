import React, { useState } from 'react';
import ProductCard from '../Components/Card/cards';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LoginForm } from '../Components/SignIn/login';
import { mockProducts } from 'MockProducts';
import Navbar from 'Components/Navbar/Navbar';
import { Product } from 'Types/User';
import './home.css'

const Home = () => {
    const [cart, setCart] = useState<Product[]>([])

    function updateCart(id: Product) {
        setCart([...cart, id])
        console.log("cart")
    }

    return (
        <div className="App">

            <div className="cartContainer"><div className="cartCounter">Cart: {cart.length}</div> 
</div>
            
            <Navbar />

            <div className="container-fluid">
                <div className="row" style={{ marginTop: '20px' }}>
                    {mockProducts.map((product, index) => (
                        <ProductCard key={index} product={product} updateCart={updateCart} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;