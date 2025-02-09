import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Item from '../components/Item'
import '../styles/items.css'

function Items({ foodType }) {
    const [items, setItems] = useState([])


    const getItems = async () => {
        const resp = await axios.get('http://localhost:3000/api/items')
        setItems(prev => resp.data.filter(d => d.type === foodType))
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <div className="landing-container">
            <div className='cards-3-container'>
                {
                    items.map(item => <Item key={item._id} item={item} />)
                }
            </div>
        </div>
    )
}

export default Items