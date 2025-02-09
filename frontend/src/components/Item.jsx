import React, { useState } from 'react'
import image from '../assets/image.png';

function Item({ item }) {

    const [quantity, setQuantity] = useState(0)

    const handleClick = () => {
        setQuantity(prev => 1)
    }

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(prev => prev - 1)
    }

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
            <div className='row1'>
                <img src={image} alt="" />
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.quantity} items left</p>
                    <p>{formatTimestamp(item.expiry)}</p>
                    {quantity == 0 ? (<button onClick={handleClick}>Add to Cart</button>) : (
                        <div className='quantity'>
                            <button onClick={decreaseQuantity}>-</button>
                            <p>{quantity}</p>
                            <button onClick={increaseQuantity}>+</button>
                        </div>
                    )}
                </div>
            </div>

            <div className='row2'>
                <div className="tags">
                    {
                        item.dietry_restrictions.map((dr, idx) => <span key={idx} className="tag">{dr}</span>)
                    }
                </div>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default Item