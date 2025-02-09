import { Link, useParams } from 'react-router-dom';

function Cart({ selectedItems, setSelectedItems }) {

    const { foodType } = useParams();

    const handleRemove = (id) => {
        setSelectedItems(prev => prev.filter(si => si._id !== id));
    };

    return (
        <div className="landing-container">
            <h1>Cart for {foodType === 'Readymade' ? 'Ready Made Foods' : 'Pantry'}</h1>
            <br />
            <br />
            <div className='cards-row-container'>
                {selectedItems.map(item => (
                    <div className='long-card' key={item._id}>
                        <h2 className='name'>{item.name}</h2>
                        <h3 className='quantity'>Qty: {item.quantity}</h3>
                        <span className='deletebtn' onClick={() => handleRemove(item._id)}>x</span>
                    </div>
                ))}
            </div>
            {selectedItems.length != 0 && <Link to={`/cart/${foodType}`} className='large-button'>Confirm Purchase</Link>}
        </div>
    )
}

export default Cart