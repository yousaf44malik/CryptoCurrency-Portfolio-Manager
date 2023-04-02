import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { useRef } from 'react'
import {Link} from 'react-router-dom'
export default function ForgetPass() {
  let userData;
  const emailRef = useRef(null);
  const passRef = useRef(null);
       const getCompany = async (url,email,pass) => {
    console.log('get data called\n')
    const Data = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
      body: JSON.stringify({
           name: email,
           pass: pass,
           
        })
    })
        .then(res => res.json())
        .then(Data => {
          console.log(Data[0])
           userData = Data[0];
          console.log(userData);
          
        });
}
  let update = () => {

    if (emailRef.current.value == '' || passRef.current.value == '') {
      alert('Enter complete data!')
    }
    else {
      getCompany('http://localhost:5000/getUpdate', emailRef.current.value, passRef.current.value);
      emailRef.current.value = '';
      passRef.current.value = '';
      alert('password updated successfully!');
    }
    
  }
  return (
    <div >
      {/* <Navbar /> */}
      <div style={{marginTop:'40px'}} className="form">
        <h1 className='changeh' style={{ paddingTop: '80px' }}>Forget Password</h1>
        <p className='changep'>Please set the new Password</p>
        <span className="changei1"></span>
        <input ref={emailRef} type="text" className="changep1" placeholder='Enter email' />
        <span className="changei2"></span>
        <input ref={passRef}  type="password" className="changep2" placeholder='Enter new Password' />
        <button onClick={update} className="changebn">UPDATE</button>
        <Link style={{color:'#fd7e14',position:'relative',top:'15px'}}  to="/Login" className="back">GO Back</Link>
      </div>
      {/* <Footer/> */}
    </div>
  )
}
