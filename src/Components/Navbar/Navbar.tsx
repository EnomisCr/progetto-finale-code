import React, { useState } from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { LoginForm } from '../SignIn/login';
import Home from '../../Pages/home'
import { mockProducts } from 'MockProducts';


interface CartItem {
    id: number;
    name: string;
}

const Navbar: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // const addToCart = () => {
    //     const newItem: CartItem = {
    //         id: cartItems.length + 1,
    //         name: 'Prodotto Aggiunto'
    //     };
    //     setCartItems([...cartItems, newItem]);
    // };

    return (
        <>
            
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <ul className='nav-voices me-auto mb-2 mb-lg-0'>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contacts</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">SignUp</Link>
                                </li>
                            </ul>
                            <h1 className='title'>Final Shop</h1>
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
                        {/* <button className="btn btn-primary" onClick={addToCart}>Aggiungi al Carrello</button> */}

                    </nav>
                    <Routes>
                        <Route path="/home" element={<Home />} />

                        <Route path="/loginpage" element={<LoginForm />} />


                    </Routes>

                </div>
            </Router>
        </>
    );
}

export default Navbar;