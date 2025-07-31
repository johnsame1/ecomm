import React, { useState } from 'react';
import './Offers.css';
import dress from '../../assets/dress.png';
import { CiHeart } from 'react-icons/ci';
import { HiArrowLongRight } from "react-icons/hi2";

const collectionData = {
  Men: [...Array(5)].map((_, i) => ({
    id: i + 1,
    name: 'Men T-Shirt',
    image: dress,
    rating: 1+i,
    colors: ['#000', '#c00', '#0c0'],
    price: 'EGP 40.00',
    oldPrice: 'EGP 60.00',
    sale: i % 2 === 0,
  })),
  Women: [...Array(5)].map((_, i) => ({
    id: i + 6,
    name: 'Women Dress',
    image: dress,
    rating: 1+i,
    colors: ['#00f', '#f0f', '#ff0'],
    price: 'EGP 55.00',
    oldPrice: 'EGP 75.00',
    sale: i % 2 === 1,
  })),
  Kids: [...Array(5)].map((_, i) => ({
    id: i + 11,
    name: 'Kids Wear',
    image: dress,
    rating: 1+i,
    colors: ['#fa0', '#0ff', '#aaa', '#f00', '#0f0'],
    price: 'EGP 25.00',
    oldPrice: 'EGP 35.00',
    sale: i % 2 === 0,
  })),
};

const NewCollections = () => {
  const [selectedType, setSelectedType] = useState('Men');

  return (
    <div className="collection-container">
      <h2 className="title">Offers <CiHeart style={{transform: 'rotatez(20deg)'}}/> </h2>
      <div className="filters">
        {['Men', 'Women', 'Kids'].map((type) => (
          <button
            key={type}
            className={selectedType === type ? 'active' : ''}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="card-slider">
        {collectionData[selectedType].map((item) => (
          <div className="card" key={item.id}>
            {item.sale && <span className="sale">Sale</span>}
            <button className="fav">
              <CiHeart />
            </button>
            <img src={item.image} alt={item.name} />
            <h4 style={{ textAlign: 'start', margin: '0' }}>{item.name}</h4>
            <div className="rating-colors">
              <div className="stars">
                {'★'.repeat(item.rating)}
                {'☆'.repeat(5 - item.rating)}
              </div>
              <div className="colors">
                {item.colors.map((c, idx) => (
                  <span key={idx} style={{ backgroundColor: c }}></span>
                ))}
              </div>
            </div>
            <div className="board-top"></div>

            <div className="price-info">
              <div className="prices">
                <strong>{item.price}</strong>
                <span className="old">{item.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}

      </div>
      <button className='view-all'>View All <HiArrowLongRight style={{fontSize:"35px"}}/> </button>
    </div>
  );
};

export default NewCollections;
