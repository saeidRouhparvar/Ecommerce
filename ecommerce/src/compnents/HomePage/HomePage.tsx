import React from "react";
import Navbar from "../navbar/Navbar";
import MainBanner from "../MainBanner/MainBanner";
import Product from "../product/Product";
import SlideShow from "../Carousel";
import NewsLetter from "../NewsLatter/NewsLetter";

 const HomePage = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Product />
      <NewsLetter/>
      {/* <SlideShow/> */}
    </>
  );
}

export default HomePage