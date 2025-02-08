import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar'
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';

function App() {

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path='/' exact element={<h1>Welcome to Howl of Hope</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
