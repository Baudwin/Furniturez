import React from 'react'
import { Hero } from '../../components/Hero'
import { Header } from '../../components/Header'
import { BannerGrid } from '../../components/BannerGrid'
import { ProductCarousel } from '../../components/ProductCarousel'
import { Values } from '../../components/Values'
import { BannerSection } from '../../components/BannerSection'
import { Articles } from '../../components/Articles'
import { Newsletter } from '../../components/Newsletter'

export const Home = () => {
  return (
    <>
    <div className=' space-y-8'>
      <Hero/>
    <Header/>  
    <BannerGrid/>
    <ProductCarousel/>
    <Values/>
    <BannerSection/>
    <Articles/>
    <Newsletter/>
    </div>
    
    </>
  )
}
