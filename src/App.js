import React, {useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'

import Switcher from './components/Switcher';
import Index from './pages/index';
import IndexTwo from './pages/index-two';
import IndexThree from './pages/index-three';
import IndexDark from './pages/index-dark';
import IndexRtl from './pages/index-rtl';


function App() {
 
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/index-two" element={<IndexTwo/>} />
      <Route path="/index-three" element={<IndexThree/>} />
      <Route path="/index-dark" element={<IndexDark/>} />
      <Route path="/index-rtl" element={<IndexRtl/>} />
    </Routes>
    <Switcher/>
  </BrowserRouter>
  );
}

export default App;
