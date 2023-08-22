import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Footer from "../components/Layout/Footer";
import FeaturedTreatments from '../components/FeaturedTreatments/FeaturedTreatments';
import WaitingForYou from '../components/WaitingForYou/WaitingForYou.jsx';

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        <FeaturedTreatments/>
        <WaitingForYou/>
        <Footer />
    </div>
  )
}

export default HomePage