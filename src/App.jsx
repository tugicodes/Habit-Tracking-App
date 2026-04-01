import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/NavBar'
import WelcomePage from  './Components/WelcomePage'
import LoginPage from './Components/LoginPage'
import Card from './Components/Cards'
import Services from './Components/Services'
import Contacts from './Components/Contacts'
import {Routes, Route} from 'react-router-dom'
import SignUp from './Components/SignUp'
import Footer from './Components/Footer'
import ProtectedRoute from './Components/ProtectedRoute'
import UserDashboard from './Components/UserDashboard'
import { useLocation } from 'react-router-dom'
import About from './Components/About'

function App() {
  const location = useLocation();
  const hiddenNavRoutes = ['/user-dashboard'];

  return (
    <>
    <div className="appLayout">
        {!hiddenNavRoutes.includes(location.pathname) && <Navigation />}

    <main className='pageContent'>
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path= "/user-dashboard"
         element={
          <ProtectedRoute>
                <UserDashboard />
                </ProtectedRoute>}/>
        
      </Routes>
    </main>
    <Footer/>

    </div>
    

    
      
    </>
  );
}

export default App
