import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main  from './components/pages/Main';
import Abuot from './components/pages/Abuot';
import Youtube from './components/pages/Youtube';
import Movie from './components/pages/Movie';
import Unsplash from './components/pages/Unsplash';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<Abuot />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/unsplash" element={<Unsplash />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App