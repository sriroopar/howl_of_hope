import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Item from '../components/Item'

function Items({ foodType }) {
    const [items, setItems] = useState([])
    const [selectedItems, setSelectedItems] = useState([])

    const getItems = async () => {
        const resp = await axios.get('http://localhost:3000/api/items')
        setItems(prev => resp.data.filter(d => d.type === foodType))
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <div className="landing-container">
            <h1>{foodType === 'Readymade' ? 'Ready Made Food':'Pantry'}</h1>
            <br />
            <br />
            <div className='cards-3-container'>
                {
                    items.map(item => <Item key={item._id} item={item} setSelectedItems={setSelectedItems} selectedItems={selectedItems} />)
                }

            </div>
            {selectedItems.length != 0 && <button className='large-button'>Proceed to checkout</button>}
        </div>
    )
}

export default Items