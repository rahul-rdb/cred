import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/common/Header";
import ProductShowcase from "../components/ProductShowcase";
import FeelSpecial from "../components/FeelSpecial";
import Experience from "../components/Experience";
import Security from "../components/Security";
import BrandRewards from "../components/BrandRewards";
import WindowPeek from "../components/WindowPeek";
import MobileScroll from "../components/MobileScroll";
import Trust from "../components/Trust";
import AppRating from "../components/AppRating";
import Footer from "../components/common/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandRewards />
      <Experience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeek />
      </div>
      <Security />
      <Trust />
      <AppRating/>
      <Footer/>
    </>
  );
}

export default HomePage;
