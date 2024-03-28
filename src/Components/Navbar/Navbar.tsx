import React, { useState } from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { LoginForm } from '../SignIn/login';
import Home from '../../Pages/home'
import { mockProducts } from 'MockProducts';
import CartButton from 'Components/CartButton/CartButton';
import { Product } from 'Types/User';

interface ProductCardProps {
    updateCart: (id: Product) => void;
    product: Product;
}


interface CartItem {
    id: number;
    name: string;
    price: number;
}

const Navbar: React.FC = () => {
    // const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [cart, setCart] = useState<Product[]>([])


    function updateCart(id: Product) {
        setCart([...cart, id])
        console.log("cart")
    }




    function cartTotal(cart: Product[]) {
        let total = 0;
        cart.forEach(tp => total += tp.price);
        return total;
    }

    function removeFromCart(index: number) {
        const updatedCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
        setCart(updatedCart);
    }

    return (
        <>

            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                        <div className="container-fluid ">
                            <ul className='nav-voices mb-2 mb-lg-0 col-3 justify-content-between ' >
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contacts</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>


                            </ul>
                            <h1 className='title col-6'>Final Shop</h1>
                            <div className="cart-btn-pos col-3"><CartButton cartItems={cart} /></div>
                            {/* <div className="position-relative d-flex align-items-center">
                                {cartItems.length > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cartItems.length}
                                    </span>
                                )}
                            </div> */}
                        </div>
                        {/* <button className="btn btn-primary" onClick={addToCart}>Aggiungi al Carrello</button> */}
                        {/* <div className="sidebar">
                            {cart}
                        <span>Total</span>
                        
                        
                        </div> */}
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home updateCart={updateCart} />} />

                        <Route path="/login" element={<LoginForm />} />


                    </Routes>

                </div>

                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasRightLabel">Total: {cartTotal(cart).toFixed(2)} &#8364;</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        {cart.map((c: Product, index: number) => {
                            return (
                                <div className="col-12 d-flex cart-prd-style">
                                    <img src={c.image} className="cart-tot-img" alt={c.title} />
                                    <h5 className="cart-tot-title">{c.title}</h5>
                                    <p className="cart-tot-price">Price: {c.price}</p>
                                    <button className='btn remove-button' onClick={() => removeFromCart(index)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Router>


        </>
    );
}

export default Navbar;