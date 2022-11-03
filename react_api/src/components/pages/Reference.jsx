import React from 'react';
import { useState, useEffect } from 'react';    // 리액트에서 사용하는 변수
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import AboutCont from "../include/AboutCont";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";

// 클래스 컴포넌트 / 함수형 컴포넌트 -> 리액트, 훅
// 리액트 훅 : 변수 : 저장, 추가, 변경 -> 자동 변경

const Reference = () => {
  const [references, setReference] = useState([]);

  useEffect(()=>{
    fetch("https://webstoryboy.github.io/react2022/src/assets/json/refer.json")
    .then(response => response.json())
    // .then(result => console.log(result.data.htmlRefer))
    .then(result => setReference(result.data.htmlRefer))
    .catch(error => console.log('error', error));
  },[])

  return (
    <>
        <Header />
        <Contents>
          <Title title={["Reference", "book"]} />
          <AboutCont />
          <ReferCont references ={references}/>
          <Contact />
        </Contents>
        <Footer />
    </>
  )
}

export default Reference