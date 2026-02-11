import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/NavBar'
import WelcomePage from  './Components/WelcomePage'
import LoginPage from './Components/LoginPage'

function App() {

  return (
    <>
    <Navigation/>
    <WelcomePage/>
    <LoginPage/>
      
    </>
  );
}

export default App
