import React from "react";
import './FullImage.css'
const ImageCard = ({ src, alt, title, description }) => {
  return (
    <div className="image-card">
      <div className="image-wrapper">
        <img src={src} alt={alt} className="card-img" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
