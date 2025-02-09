import Item from '../components/Item'
import { Link } from 'react-router-dom'

function Items({ foodType, selectedItems, setSelectedItems, items }) {
    const newItems = items.filter(d => d.type === foodType)

    return (
        <div className="landing-container">
            <h1>{foodType === 'Readymade' ? 'Ready Made Foods' : 'Pantry'}</h1>
            <br />
            <br />
            <div className='cards-3-container'>
                {
                    newItems.map(item => <Item key={item._id} item={item} setSelectedItems={setSelectedItems} selectedItems={selectedItems} />)
                }

            </div>
            {selectedItems.length != 0 && <Link to={`/cart/${foodType}`} className='large-button'>Proceed to checkout</Link>}
        </div>
    )
}

export default Items