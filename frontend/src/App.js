import React from "react";
import { BrowserRouter } from 'react-router-dom'


import Main from './components/main'
import Material from "./components/material";
import Produto from './components/produto'

function App() {
  return (
    <BrowserRouter>
      <Material/>
      <Produto/>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
