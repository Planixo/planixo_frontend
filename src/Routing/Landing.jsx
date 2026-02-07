import React from 'react'
import Navbar from '../components/landing/Navbar'
import HeroSection from '../components/landing/HeroSection'
import Footer from '../components/landing/Footer'
import AiFoundation from '../components/landing/AiFoundation'
import AiTalk from '../components/landing/AiTalk'
import TeamCollaboration from '../components/landing/TeamCollaboration'
import BenefitsSection from '../components/landing/BenefitsSection'
import CoreBenefits from '../components/landing/CoreBenefits'

function Landing() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <TeamCollaboration/>
    <BenefitsSection/>
    <AiFoundation/>
    <CoreBenefits/>
    <Footer/>
    <AiTalk/>
    </>
  )
}

export default Landing









