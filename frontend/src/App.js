import React from 'react';
import { Routes, Route  } from "react-router-dom";
import Home from './views/Home';
import Layout from './components/Layout';
import About from './views/About';
import Products from './views/Products';
import ProductView from './views/ProductView';
import Cart from './views/Cart';
import Profile from './views/Profile';
import NotFound from './views/NotFound';
import AuthChecker from './components/AuthChecker';

function App() {
    return (
        <>
          <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home />}/>
                <Route path='about' element={<About/>} />
                <Route path='products' element={<Products/>} />

                {/* protected routes */}
                <Route element={<AuthChecker/>}>
                  <Route path='product/:id' element={<ProductView/>} />
                  <Route path='cart' element={<Cart/>} />
                  
                  <Route path='profile' element={<Profile/>} />
                </Route>
                
                <Route path="*" element={<NotFound/>} />
            </Route>
          </Routes>   
        </>
    );
}

export default App;

