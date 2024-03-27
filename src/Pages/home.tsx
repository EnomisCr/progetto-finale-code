import React, { useState } from 'react';
import ProductCard from '../Components/Card/cards';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LoginForm } from '../Components/SignIn/login';
import { mockProducts } from 'MockProducts';
import Navbar from 'Components/Navbar/Navbar';
import { Product } from 'Types/User';
import './home.css'


interface ProductCardProps {
    updateCart: (id: Product) => void;

}


const Home: React.FC<ProductCardProps> = ({ updateCart }) => {
    const [cart, setCart] = useState<Product[]>([])



    return (
        <div className="App">
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