import React, { useState } from 'react';

import './AddToCart.css';

const AddToCart = ({min, max, isBlocked}) => {
    const [quantity, setQuantity] = useState(0);

    const handleClickSubstrate = () => {
        quantity <= min ? null : setQuantity(quantity - 1);
    }

    const handleClickAdd = () => {
        quantity >= max ? null : setQuantity(quantity + 1);
    }

    return (
        <div className="add-to-cart">
            <button className="add-to-cart-btn"
                    disabled={isBlocked}
                    onClick={() => handleClickSubstrate()}
            >
                -
            </button>
            <div className="add-to-cart-how-many">Obecnie masz {quantity} sztuk produktu</div>
            <button className="add-to-cart-btn"
                    disabled={isBlocked}
                    onClick={() => handleClickAdd()}
            >
                +
            </button>
        </div>
    )
}

export default AddToCart;