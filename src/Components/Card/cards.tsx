import React, { useState } from 'react';
import { Product } from '../../Types/User'
import {Button} from '../Button/button';



interface ProductCardProps {
  updateCart: (id: Product)=>void;
  product: Product;
}

interface CartItem {
    id: number;
    name: string;
}


const ProductCard: React.FC<ProductCardProps> = ({ product, updateCart }) => {

//     const [cartItems, setCartItems] = useState<CartItem[]>([]);
// const addToCart = () => {
//     const newItem: CartItem = {
//         id: cartItems.length + 1,
//         name: 'Prodotto Aggiunto'
//     };
//     setCartItems([...cartItems, newItem]);
// };


  return (
    <div className="card col-4" style={{ width: '18rem' }}>
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Price: {product.price}</p>
        <Button onClick={()=>updateCart(product)}>Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;