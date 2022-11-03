import React from 'react';
import { useState, useEffect } from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/search/movie?api_key=bac86c38508d81c3aa391db7e3be94b1&page=1&query=no')
    .then(response => response.json())
    .then(result => setMovies(result))
    .catch(error => console.log('error', error));
  },[])

  return (
    <>
        <Header />
        <Contents>
          <Title title={["Movie", "referene API"]} />
          <MovieCont movies={movies}/>
          <Contact />
        </Contents>
        <Footer />
    </>
  )
}

export default Movie