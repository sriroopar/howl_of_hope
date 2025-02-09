import './styles/App.css'
import './styles/variables.css'
import './styles/header-footer.css'
import './styles/card.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar'
import UserProfile from './pages/UserProfile';
import Landing from './pages/Landing';
import Footer from './pages/Footer';
import Items from './pages/Items';
import FoodOptions from './pages/FoodOptions';

function App() {

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <NavBar />
          <div className='wrapper'>
            <Routes>
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/pantry" element={<Items foodType='Raw-material' />} />
              <Route path="/readymade-food" element={<Items foodType='Readymade' />} />
              <Route path="/food-options" element={<FoodOptions />} />
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
