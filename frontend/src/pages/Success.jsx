import React from 'react'
import { useParams } from 'react-router-dom';
import qrcode from '../assets/qrcode.jpeg'

function Success() {

    const { user } = useParams();
    return (
        <div className="landing-container-2 qrcontainer">
            <h1>
                {user === 'user' ? 'Order placed successfully' : 'Successfully added Menu items to the list'}
            </h1>
            {user === 'user' && <img className='qrcode' src={qrcode} />}
        </div>
    )
}

export default Success