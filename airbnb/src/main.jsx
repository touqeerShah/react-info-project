import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import NavBar from './component/NavBar/Navbar'
import Hero from './component/Hero/Hero'
import ReviewCard from './component/ReviewCard/ReviewCard'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Hero/>
    <ReviewCard/>
  </StrictMode>,
)
