import React, { useState } from 'react';
import "./product.css";

const ProdItem = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const price = `$${props.price.toFixed(2)}`;

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <li>
      <div id="music-content">
        <div id="album1">
          <h3>{props.title}</h3>
          <div className="image-container">
            <img src={props.imageUrl} alt="Album Cover" />
          </div>
          <div className="prod-details">{props.description}</div>
          <div className="prod-details">
            <div className="price-display">{price}</div>
            <div className="quantity-display">
              <button onClick={handleDecrease}>-</button>
              {quantity}
              <button onClick={handleIncrease}>+</button>
            </div>
          </div>
          <button className="shop-item-button" type="button">
            ADD TO CART
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProdItem;
