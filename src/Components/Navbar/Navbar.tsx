import React, { useState } from 'react';
import './Navbar.css';

interface CartItem {
    id: number;
    name: string;
}

const Navbar: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = () => {
        const newItem: CartItem = {
            id: cartItems.length + 1,
            name: 'Prodotto Aggiunto'
        };
        setCartItems([...cartItems, newItem]);
    };
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <ul className='nav-voices me-auto mb-2 mb-lg-0'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/contact">Contacts</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/register">SignUp</a>
                    </li>
                </ul>
                <div className="position-relative d-flex align-items-center">
                    <a className="nav-link" href="#">
                        <i className="bi bi-cart"></i>
                    </a>
                    {cartItems.length > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cartItems.length}
                        </span>
                    )}
                </div>
            </div>
            <button className="btn btn-primary" onClick={addToCart}>Aggiungi al Carrello</button>
            <div>
                <h4>Elementi nel Carrello:</h4>
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;