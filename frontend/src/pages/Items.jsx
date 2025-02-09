import Item from '../components/Item'
import { Link } from 'react-router-dom'

function Items({ foodType, selectedItems, setSelectedItems, items, isAdmin }) {
    const newItems = items.filter(d => d.type === foodType)

    return (
        <div className="landing-container">
            {isAdmin ? (<h1>Edit Current Items</h1>) : (<h1>{foodType === 'Readymade' ? 'Ready Made Foods' : 'Pantry'}</h1>)}

            <br />
            <br />
            <div className='cards-3-container'>
                {
                    newItems.map(item => <Item key={item._id} item={item} setSelectedItems={setSelectedItems} selectedItems={selectedItems} isAdmin />)
                }

            </div>
            {selectedItems.length != 0 && <Link to={`/cart/${foodType}`} className='large-button'>
                {isAdmin ? 'Confirm edits' : 'Proceed to checkout'}
            </Link>}
        </div>
    )
}

export default Items