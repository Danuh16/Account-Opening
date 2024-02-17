import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import H1 from '../images/H1.jpg';
import './customer.css';

export default function Customer() {
  return (
    <div className='customer'>
      <Header/>
      
      <img src={H1} alt='H1' style={{width:'100%',marginTop:'31px'}}></img>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
       <button ><a href="/"><i class="fa fa-book"></i>Interest-Based</a></button>
       <button ><a href="/Form"><i class="fa fa-book"></i>Interest-Free</a></button>
       <Footer/>
   
    </div>
  )
}
