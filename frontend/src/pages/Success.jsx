import React from 'react'
import { useParams } from 'react-router-dom';

function Success() {

    const { user } = useParams();
    return (
        <div className="landing-container-2">
            <h1>
                {user === 'user' ? 'Order placed successfully' : 'Successfully added Menu items to the list'}
            </h1>
        </div>
    )
}

export default Success