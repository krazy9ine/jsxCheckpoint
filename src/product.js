import React from "react";
import Photo from "./photo";
import './product.scss';

const Product = ({ productData }) => {
  return (
    <div className="card">
    <section className="product">
      <div className="product__photo">
        <Photo images={productData.images} />
      </div>
      <div className="product__info">
        <div className="title">
          <h1>{productData.title}</h1>
          <span>{productData.cod}</span>
        </div>
        <div className="price">R$ <span>{productData.price}</span></div>
        <div className="variant">
          <h3>SELECT A COLOR</h3>
          <ul>
            {productData.variants.map((variant, index) => (
              <li key={index}>
                <img src={variant.image} alt={variant.name} />
              </li>
            ))}
          </ul>
        </div>
        <div className="description">
          <h3>BENEFITS</h3>
          <ul>
            {productData.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <button className="buy--btn">ADD TO CART</button>
      </div>
    </section>
    </div>
  );
};

export default Product;