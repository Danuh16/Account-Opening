import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Image from '../images/Home.jpg';
import '../pages/Home.css';


export default function Home() {
  return (
    <div className='Home'>
       <Header/>
       <h1>WELCOME TO AMHARA BANK ACCOUNT OPENING FORM</h1>
       <img src={Image} alt='Home'></img>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
       <button style={{height:'10%'}}><a href="/login"><i class="fa fa-lock"></i>Admin</a></button>
       <button><a href="/Customer"><i class="fa fa-user"></i>Customer</a></button>
       <Footer/>
    </div>
  )
}
