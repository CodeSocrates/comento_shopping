import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Basket from "./pages/Basket";

import './App.css';
//Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter basename="/comento_shopping">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail/>} />
        <Route path="/basket" element={<Basket/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
