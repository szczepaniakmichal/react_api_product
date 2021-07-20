import React, { useState } from 'react';

import './AddToCart.css';

const AddToCart = ({min, max, isBlocked, pid = false, handleTotalQuantity}) => {

    const [quantity, setQuantity] = useState(0);

    const checkQuantity = async () => {
        const rawResponse = await fetch('/api/product/check', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({pid: pid, "quantity": quantity})
        });
        const content = await rawResponse.json();

        if (content.isError) {
            setQuantity(min)
        }
    };

    const handleClickSubstrate = () => {
        if (quantity > min) {
            setQuantity(quantity - 1);
            handleTotalQuantity(false);
            checkQuantity();
        }
    }

    const handleClickAdd = () => {
        if (quantity < max) {
            setQuantity(quantity + 1);
            handleTotalQuantity(true);
            checkQuantity();
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