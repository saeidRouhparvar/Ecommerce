import React from "react";
import Navbar from "../navbar/Navbar";
import MainBanner from "../MainBanner/MainBanner";
import Product from "../product/Product";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Product />
    </>
  );
}
