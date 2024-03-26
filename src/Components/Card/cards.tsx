import React from 'react';
import { Product } from '../../Types/User'
import {Button} from '../Button/button';



interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  return (
    <div className="card col-4" style={{ width: '18rem' }}>
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Price: {product.price}</p>
        <Button onClick={console.log}>Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;