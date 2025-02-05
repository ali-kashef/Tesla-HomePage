import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes,Navigate, Link } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Productdetails from './Pages/ProductDetails';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
  
  
    <Navbar/>
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/productdetails/:id" element={<Productdetails />} />
</Routes>

<Footer/>
 </>
  );
}

export default App;
