import React from 'react'
import Banners from '../pages/Banners';
import Carousel from '../pages/Carousel';
import Cards from '../pages/Cards';
import FAQ from '../pages/FAQ';
const Home = () => {
  return (
    <div>
        <Banners/>
        <Carousel/>
        <Cards/>
        <FAQ/>
    </div>
  )
}

export default Home