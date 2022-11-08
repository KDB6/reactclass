import React from 'react'
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import Imagetext from "./components/section/Imagetext";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";

function App() {
  return (
    <>
        <Header fonts="nexon" />

        <Main>
          <Slider fonts="nexon" />
          <Image attr={["section", "nexon", "container"]} />
          <Imagetext attr={["nexon" ,"section", "gray", "container"]} />
          <Card attr={["nexon" ,"section", "container"]} />
          <Banner attr={["nexon"]} />
          <Text attr={["nexon" ,"section", "container"]} />
        </Main>

        <Footer attr={["nexon" ,"section", "gray", "container"]} />
    </>
  )
}

export default App