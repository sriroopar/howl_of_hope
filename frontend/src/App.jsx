import './styles/App.css'
import './styles/variables.css'
import './styles/header-footer.css'
import './styles/card.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import NavBar from './pages/NavBar'
import UserProfile from './pages/UserProfile';
import Landing from './pages/Landing';
import Footer from './pages/Footer';
import Items from './pages/Items';
import FoodOptions from './pages/FoodOptions';
import Cart from './pages/Cart';
import { useEffect, useState } from 'react';

function App() {
  const [selectedItems, setSelectedItems] = useState([])
  const [items, setItems] = useState([])

  const getItems = async () => {
    const resp = await axios.get('http://localhost:3000/api/items')
    setItems(prev => resp.data)
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <NavBar />
          <div className='wrapper'>
            <Routes>
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/pantry" element={<Items foodType='Raw-material' selectedItems={selectedItems} setSelectedItems={setSelectedItems} items={items} />} />
              <Route path="/readymade-food" element={<Items foodType='Readymade' selectedItems={selectedItems} setSelectedItems={setSelectedItems} items={items} />} />
              <Route path="/food-options" element={<FoodOptions />} />
              <Route path="/cart/:foodType" element={<Cart selectedItems={selectedItems} setSelectedItems={setSelectedItems} />} />
              <Route path='/' exact element={<Landing />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
