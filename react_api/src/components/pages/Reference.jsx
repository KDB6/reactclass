import React from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import AboutCont from "../include/AboutCont";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";

const Reference = () => {
  return (
    <>
        <Header />
        <Contents>
          <Title title={["Reference", "book"]} />
          <AboutCont />
          <ReferCont />
          <Contact />
        </Contents>
        <Footer />
    </>
  )
}

export default Reference