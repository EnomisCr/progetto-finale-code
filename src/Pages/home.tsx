import React from 'react';
import ProductCard from '../Components/Card/cards';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LoginForm } from '../Components/SignIn/login';
import { mockProducts } from 'MockProducts';

const Home = () => {
  return (
    <div className="App">
      <h1>Final Shop</h1>

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/home">
            <Home />
          </Route>
          <Route path="/loginpage">
            <LoginForm />
          </Route>
        </div>
      </Router>

      <div className="container-fluid">
        <div className="row" style={{ marginTop: '20px' }}>
          {mockProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;