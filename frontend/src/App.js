import React from "react";
import { BrowserRouter } from 'react-router-dom'



import Material from "./pages/material";
import Produto from './pages/produto'

function App() {
  return (
    <BrowserRouter>
      <Material/>
      <Produto/>
   
    </BrowserRouter>
  );
}

export default App;
