import React from 'react'
import CatalogCategories from '../components/HomeBlocks/CatalogCategories/CatalogCategories';
import GreenHomeBanner from '../components/Banners/GreenHomeBanner';
import HomeBanner from '../components/Banners/HomeBanner';
import SaleBlock from '../components/SaleBlock/SaleBlock';



export default function Home() {
  return (
    <div>
        <HomeBanner />
        <CatalogCategories />
        <GreenHomeBanner />
        <SaleBlock />
    </div>
  )
}
