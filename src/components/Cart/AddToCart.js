import React, { useState } from 'react';

import './AddToCart.css';

const AddToCart = ({min, max, isBlocked = false, handleTotalQuantity}) => {
    const [quantity, setQuantity] = useState(0);

    const handleClickSubstrate = () => {
        if (quantity > min) {
            setQuantity(quantity - 1);
            handleTotalQuantity(false)
        }
    }

    const handleClickAdd = () => {
        if (quantity < max) {
            setQuantity(quantity + 1);
            handleTotalQuantity(true)
        }
    }

    return (
        <div className="add-to-cart">
            <button className="add-to-cart-btn"
                    disabled={isBlocked}
                    onClick={() => handleClickSubstrate()}
            >-
            </button>
            <div className="add-to-cart-how-many">Obecnie masz {quantity} sztuk produktu</div>
            <button className="add-to-cart-btn"
                    disabled={isBlocked}
                    onClick={() => handleClickAdd()}
            >+
            </button>
        </div>
    )
}

export default AddToCart;