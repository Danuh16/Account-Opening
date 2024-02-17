import React from 'react';
import Header from "./Header";
import Footer from './Footer';
import Form from './pages/Interest-Free';
import About from './pages/About';
import Home from './pages/Home';
import Customer from './pages/Customer';
import Signup from '../authentication/signup';
import { BrowserRouter,Routes, Route, Outlet} from 'react-router-dom';
import Admin from '../authentication/login';


export default function Router() {
    const Layout = () => {
        return(
          <>
          <Header/>
          <Outlet/>
          <Footer/>
          </>
        )
      }

  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Admin/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Customer" element={<Customer/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

