import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/NavBar'
import WelcomePage from  './Components/WelcomePage'

function App() {

  return (
    <>
    <Navigation/>
    <WelcomePage/>
      
    </>
  );
}

export default App
