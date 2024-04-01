import React from "react";
import './photo.scss';

const Photo = ({ images }) => {
  return (
    <div className="photo-container">
      <div className="photo-main">
        <img src={images.main} alt={images.mainAlt} />
      </div>
      <div className="photo-album">
        <ul>
          {images.additional.map((image, index) => (
            <li key={index}>
              <img src={image} alt={`${index} additional image`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Photo;