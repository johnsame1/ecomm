import React from 'react';
import './banner.css';
import banner from '../../assets/image 8.png';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="bg">
            <div className="title">
              <h1 style={{ margin: '0' }}>Redefining Modest Fashion</h1>
              <p style={{ textAlign: 'end', color: 'black' }}>
                Elegant. Modest. You{' '}
              </p>
              <p style={{ color: '#897A6C' }}>
                A curated collection of timeless pieces for women who love to
                feel confident, elegant, and effortlessly modest.
              </p>
              <div className="Button">
                <Link to={'/Shop'}>
                  <button type="button" className="id">
                    Shop Now{' '}
                  </button>
                </Link>
              </div>
            </div>

            <div className="imgClothes">
              <div className="circleBackground"></div>
              <img src={banner} alt="banner" />
            </div>
          </div>

          <div className="Button">
            <Link to={'Shop Now '}>
              <button type="button" className="id">
                Shop Now
              </button>
            </Link>
          </div>

     
        </div>
      </div>
    </>
  );
};

export default Banner;
