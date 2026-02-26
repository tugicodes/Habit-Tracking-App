import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/NavBar'
import WelcomePage from  './Components/WelcomePage'
import LoginPage from './Components/LoginPage'
import Card from './Components/Cards'
import Services from './Components/Services'

function App() {

  return (
    <>
    <Navigation/>
    <WelcomePage/>
    <Services/>
    <LoginPage/>
    
      
    </>
  );
}

export default App
