import React from "react";
import Navbar from "../navbar/Navbar";
import MainBanner from "../MainBanner/MainBanner";
import Product from "../product/Product";
import NewsLetter from "../NewsLatter/NewsLetter";
import Footer from "../footer/Footer";

 const HomePage = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Product />
      <NewsLetter/>
      <Footer/>
    </>
  );
}

export default HomePage