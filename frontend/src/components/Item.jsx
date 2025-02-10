import React, { useState } from 'react'
import pantry from '../assets/pantry.jpeg';
import food from '../assets/food.jpeg';

function Item({ item, setSelectedItems, selectedItems, isAdmin }) {
    const [quantity, setQuantity] = useState(isAdmin ? item.quantity : 0)

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;

        if (newQuantity < 0) return;

        setQuantity(newQuantity);

        setSelectedItems(prev => {
            if (newQuantity === 0) {
                return prev.filter(si => si._id !== item._id);
            } else {
                const exists = prev.some(si => si._id === item._id);
                if (exists) {
                    return prev.map(si =>
                        si._id === item._id ? { ...si, quantity: newQuantity } : si
                    );
                } else {
                    return [...prev, { ...item, quantity: newQuantity }];
                }
            }
        });
    };

    function formatTimestamp(isoString) {
        const date = new Date(isoString);

        const pad = (num) => num.toString().padStart(2, '0');

        const mm = pad(date.getMonth() + 1);
        const dd = pad(date.getDate());
        const yyyy = date.getFullYear();

        const hh = pad(date.getHours());
        const min = pad(date.getMinutes());
        const ss = pad(date.getSeconds());

        return `${mm}/${dd}/${yyyy} - ${hh}:${min}:${ss}`;
    }

    return (
        <div className='card grid-col'>
            <h3>{item.name}</h3>
            <div className='row1'>
                <img src={item.type === "Readymade" ? food : pantry} alt="" />
                <div>
                    <p>{item.quantity} items left</p>
                    <p>{formatTimestamp(item.expiry)}</p>
                    {(quantity == 0 && !isAdmin) ? (<button onClick={() => handleQuantityChange(1)}>Add to Cart</button>) : (
                        <div className='quantity'>
                            <button onClick={() => handleQuantityChange(-1)}>-</button>
                            <p>{quantity}</p>
                            <button onClick={() => handleQuantityChange(1)}>+</button>
                        </div>
                    )}
                </div>
            </div>

            <div className='row2'>
                <div className="tags">
                    {
                        item.dietary_restrictions.map((dr, idx) => <span key={idx} className="tag">{dr}</span>)
                    }
                </div>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default Item