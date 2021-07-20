import React, {useEffect, useState} from 'react';

import AddToCart from '../Cart/AddToCart';

import './App.css';

const App = () => {

    const [products, setProducts] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        fetch('../api/cart.json', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(products => {
                setProducts(products);
            })
            .catch(error => {
                console.error(error)
            })
    }, []);

    const handleTotalQuantity = (sign) => {
        sign ? setTotalQuantity(totalQuantity + 1) : setTotalQuantity(totalQuantity - 1)
    }

    console.log("products", products);

    const productList = products.map((product) => (
        <li key={product.pid}
            className="row product-list-item">
            <div className="product-list-info">
                <span className="product-list-name">{product.name}</span>
                <span className="product-list-price">{product.price.replace('.', ',')}</span>
            </div>
            <AddToCart min={product.min}
                       max={product.max}
                       isBlocked={product.isBlocked}
                       handleTotalQuantity={handleTotalQuantity}
            />
        </li>
    ));

  return (
    <div className="container">
      <h3>Lista produktów</h3>
      <ul className="product-list">
          {productList}
      </ul>
        <p>Łączna ilość produktów Twojego zamówienia: {totalQuantity}</p>
    </div>
  );
};

export {
    App
};
