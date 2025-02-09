import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function AddMenu() {
    const [menuItems, setMenuItems] = useState([
        {
            "name": "Fettuccine Noodles",
            "description": "Classic fettuccine noodles made from durum wheat, perfect for pairing with a variety of sauces.",
            "dietary_restrictions_restrictions": [
                "Gluten Allergen",
                "Egg Allergen",
                "Vegetarian",
                "Halal",
                "Wolf Approved"
            ],
            "type": "Readymade"
        },
        {
            "name": "Garlic Bread",
            "description": "Toasted bread topped with garlic butter, herbs, and a sprinkle of Parmesan cheese.",
            "dietary_restrictions": [
                "Gluten Allergen",
                "Dairy Allergen",
                "Soy Allergen",
                "Vegetarian",
                "Halal"
            ],
            "type": "Readymade"
        },
        {
            "name": "Pasta Primavera",
            "description": "A colorful pasta dish featuring fresh seasonal vegetables tossed in a light olive oil and herb sauce.",
            "dietary_restrictions": [
                "Gluten Allergen",
                "Dairy Allergen",
                "Vegetarian"
            ],
            "type": "Readymade"
        },
        {
            "name": "Vegetable Ravioli",
            "description": "Delicate pasta pockets filled with a blend of finely chopped vegetables and ricotta cheese, served with a light tomato sauce.",
            "dietary_restrictions": [
                "Gluten Allergen",
                "Dairy Allergen",
                "Egg Allergen"
            ],
            "type": "Readymade"
        },
        {
            "name": "Baby Carrots",
            "description": "Tender and sweet baby carrots, steamed to perfection and lightly seasoned.",
            "dietary_restrictions": [
                "Vegetarian",
                "Vegan",
                "Halal",
                "Wolf Approved"
            ],
            "type": "Readymade"
        },
        {
            "name": "Bourbon Glazed Chicken Thighs",
            "description": "Juicy chicken thighs glazed with a sweet and tangy bourbon sauce, served with a side of roasted vegetables.",
            "dietary_restrictions": [
                "Gluten Allergen",
                "Soy Allergen"
            ],
            "type": "Readymade"
        }
    ])

    const [selected, setSelected] = useState({});
    const [quantities, setQuantities] = useState({});

    const handleCheckboxChange = (item) => {
        setSelected(prevSelected => {
            const newSelected = { ...prevSelected };
            if (newSelected[item.name]) {
                delete newSelected[item.name];
            } else {
                newSelected[item.name] = item;
            }
            return newSelected;
        });
    };

    const handleQuantityChange = (item, quantity) => {
        setQuantities(prevQuantities => {
            const newQuantities = { ...prevQuantities, [item.name]: parseInt(quantity) };
            return newQuantities;
        });

        setSelected(prevItems => {
            if (item.name in prevItems) {
                prevItems[item.name].quantity = parseInt(quantity);
            } else if (quantity > 0) {
                const currentDate = new Date();

                const expiry = new Date(currentDate);
                expiry.setHours(23, 59, 59, 999);

                const expiryInMs = expiry.getTime();
                prevItems.push({ ...item, expiry: expiryInMs, quantity: parseInt(quantity) });
            }
            return prevItems;
        });
    };

    return (
        <div className="landing-container">
            <h1>Today's Menu Items</h1>
            <br />
            <br />
            <div className='cards-row-container'>
                {menuItems.map(item => (
                    <div className='long-card' key={item.name}>
                        <h2 className='name'>{item.name}</h2>
                        <input
                            type="checkbox"
                            checked={item.name in selected}
                            onChange={() => handleCheckboxChange(item)}
                        />
                        <div className='quantity-input'>
                            <h3 className='quantity'>Qty: </h3>
                            <input
                                type="number"
                                placeholder="0"
                                value={quantities[item.name] || ""}
                                onChange={(e) => handleQuantityChange(item, e.target.value)}
                                disabled={!selected[item.name]}
                            />
                        </div>
                    </div>
                ))}
            </div>
            {Object.keys(selected).length !== 0 && Object.keys(quantities).length !== 0 && <Link to={`/success/admin`} className='large-button'>Add items</Link>}
        </div>
    )
}

export default AddMenu