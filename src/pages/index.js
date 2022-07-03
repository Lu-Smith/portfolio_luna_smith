import React, { useState } from "react";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import HomeSection from "../components/HomeSection";
import InfoSection from "../components/InfoSection";
import FineArt from "../components/FineArt";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/styles/Data.styled";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <MobileMenu isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HomeSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <FineArt />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
