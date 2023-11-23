import React from 'react'
import HomeHero from '../../components/home/HeroSection'
import CategorySection from '../../components/home/CategorySection'
import MeetTheAnimalsSectoin from '../../components/home/MeetTheAnimalsSectoin'

function index() {
  return (
    <>
      <HomeHero />
      <CategorySection />
      <MeetTheAnimalsSectoin />
    </>
  )
}

export default index