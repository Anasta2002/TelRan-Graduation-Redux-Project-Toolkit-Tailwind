import React from 'react'
import CatalogCategories from '../components/HomeBlocks/CatalogCategories/CatalogCategories';
import GreenHomeBanner from '../components/Banners/GreenHomeBanner';
import HomeBanner from '../components/Banners/HomeBanner';



export default function Home() {
  return (
    <div>
        <HomeBanner />
        <CatalogCategories />
        <GreenHomeBanner/>
    </div>
  )
}
