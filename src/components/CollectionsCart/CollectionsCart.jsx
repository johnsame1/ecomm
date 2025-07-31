import React from 'react';
import './CollectionsCart.css'; 
import child from '../../assets/child.png';
import men from '../../assets/men.png'; 
import women from '../../assets/women.png'; 
import { Link } from 'react-router-dom';
const products = [
  {
    id: 1,
    image: child,
    title: 'Cute and comfy outfits for little ones',
    topic: 'Everyday wear and special events.',
  },
  {
    id: 2,
    image: men,
    title: 'Cute and comfy outfits for little ones',
    topic: 'Everyday wear and special events.',
  },
  {
    id: 3,
    image: women,
    title: 'Cute and comfy outfits for little ones',
    topic: 'Everyday wear and special events.',
  },
];

const ProductCard = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="image-container">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-info">
            <h2 className="product-title">{product.title}</h2>
            <h2 className="product-topic">{product.topic}</h2>
             <div className="Button">
                            <Link to={'/Shop'}>
                              <button type="button" className="id">
                                Shop Now{' '}
                              </button>
                            </Link>
                          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
