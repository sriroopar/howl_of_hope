import './styles/App.css'
import './styles/variables.css'
import './styles/header-footer.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar'
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import Landing from './pages/Landing';
import Footer from './pages/Footer';

function App() {

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <NavBar />
          <div className='main wrapper'>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<UserProfile />} />
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
