import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import NavBar from './component/NavBar/Navbar'
import Hero from './component/Hero/Hero'
import ReviewCard from './component/ReviewCard/ReviewCard'
import ReveiwData from './data/reviews'

import './index.css'

const userReviewCards = ReveiwData.map((review, index) => {
  return <ReviewCard key={index}
    {...review}
    isSoldOut={review.openSpots==0?true:false} />
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Hero />
    <div className="card_container">

    {userReviewCards}
    </div>
  </StrictMode>,
)
