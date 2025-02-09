import { Link, useParams } from 'react-router-dom';

function Cart({ selectedItems, setSelectedItems }) {

    const { foodType } = useParams();

    const handleRemove = (id) => {
        setSelectedItems(prev => prev.filter(si => si._id !== id));
    };

    return (
        <div className="landing-container">
            <h1>Cart for {foodType === 'Readymade' && 'Ready Made Foods'} {foodType === 'Raw-material' && 'Pantry'}</h1>
            {foodType === 'admin' && <h1>Edit Menu items</h1>}
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
            {selectedItems.length != 0 && <Link to={foodType !== 'admin' ? '/success/user' : '/success/admin'} className='large-button'>{foodType !== 'admin' ? 'Confirm Purchase' : 'Confirm Edits'}</Link>}
        </div>
    )
}

export default Cart