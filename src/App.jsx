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
function App() {

  return (
    <>
    <div className="appLayout">
    <Navigation/>

    <main className='appLayout'>
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/contacts" element={<Contacts/>} />
        
      </Routes>
    </main>
    <Footer/>

    </div>
    

    
      
    </>
  );
}

export default App
