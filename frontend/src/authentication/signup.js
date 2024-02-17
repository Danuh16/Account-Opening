import React,{ useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../authentication/signup.css'

export default function Signup() {
        
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    
        
       const handlesubmit=(e)=>{
            e.preventDefualt();
            const {firstname,lastname,email,password}=this.state;
            console.log(firstname,lastname,email,password);
            fetch("/register",{
                method:"POST",
                crossDomain:true,
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json",
                    "Access-Control-Allow-Origin":"*"
                },
                body:JSON.stringify({
                    firstname,
                    lastname,
                    email,
                    password
                }),
            }).then((res)=>res.json())
             .then((data)=>{
                console.log(data,"userRegister");
             })
        }
        return (
            <div>
            <Header/>
            <div className='signup'>
                
                <form onSubmit={handlesubmit}>
                <h3>Sign Up</h3>
                <div>
                    <label>First name</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='First name'
                        value={firstname}
                        onChange={e=>setFirstname({firstname:e.target.value})} />
                </div>

                <div>
                    <label>Last name</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Last name' 
                        value={lastname}
                        onChange={e=>setLastname({lastname:e.target.value})}/>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        placeholder='Enter email'
                        value={email}
                        onChange={e=>setEmail({email:e.target.value})}
                        required />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type='password'
                        className='form-control'
                        placeholder='Enter password'
                        value={password}
                        onChange={e=>setPassword({password:e.target.value})}
                        required />
                </div>
                <div>
                    <button type='submit' className='btn btn primary'>Sign Up</button>
                </div>
                    <p className='forgot-password text-right'>
                        Already registered? <a href="/login">Sign In</a>
                    </p>

                    <div className='signupfooter'>
               <footer>
                <div style={{padding:"20px",marginRight:'50%'}}>Copyright© 2022 Amhara Bank S.C. | All Rights Reserved
                <div style={{marginTop:'15px'}}>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                  <a href="https://www.facebook.com/amharabanksc1" ><i class="fa fa-facebook fa-lg"></i></a>
                  <a href="https://www.linkedin.com/company/amharabank" ><i class="fa fa-linkedin fa-lg"></i></a>
                  <a href="https://t.me/Amhara_Banksc" ><i class="fa fa-telegram fa-lg"></i></a>
                  <a href="https://twitter.com/Amharabanksc" ><i class="fa fa-twitter fa-lg"></i></a>
                  <a href="https://instagram.com/amhara_banks" ><i class="fa fa-instagram fa-lg"></i></a>
                   <a href="https://youtube.com/channel/UC73x9uuGYV0Uxw0EkpVZN8g" ><i class="fa fa-youtube fa-lg"></i></a>
                </div>
                </div>
                </footer>
                </div>
                </form>
            </div>
             </div>
        );

}
