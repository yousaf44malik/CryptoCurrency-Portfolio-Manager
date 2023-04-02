import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import { useRef } from 'react'
export default function Signup() {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const cRef = useRef(null);
  const fRef = useRef(null);
  const lRef = useRef(null);
  const cityRef = useRef(null);
  const coRef = useRef(null);
  const sRef = useRef(null);
  const hRef = useRef(null);
  const bRef = useRef(null);
   const getCompany = async (url,cnic,fname,lname,email,city,country,house,street,pass) => {
    // console.log('get data called\n')
    const Data = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
      body: JSON.stringify({
        cnic: cnic,
        fname: fname,
        lname: lname,
        email: email,
        city: city,
        country: country,
        house: house,
        street: street,
        pass:pass
        })
    })
        .then(res => res.json())
        .then(Data => {
          // console.log(Data[0])
          let userData = Data[0];
          // console.log(userData);
          
        });
  }
  let signedup = () => {
    if (cRef.current.value == '' || fRef.current.value == '' || lRef.current.value == '' || emailRef.current.value == ''
      || cityRef.current.value == '' || coRef.current.value == '' || hRef.current.value == '' || sRef.current.value == '' || passRef.current.value == '') {
      alert('Enter complete data!');
    }
    else {
      
      getCompany('http://localhost:5000/getRecord', cRef.current.value, fRef.current.value, lRef.current.value, emailRef.current.value,
        cityRef.current.value, coRef.current.value, hRef.current.value, sRef.current.value, passRef.current.value);
      alert('Signedup successfully!')
      cRef.current.value = '';
      fRef.current.value = '';
      lRef.current.value = '';
      emailRef.current.value = '';
      cityRef.current.value = '';
      coRef.current.value = '';
      hRef.current.value = '';
      sRef.current.value = '';
      passRef.current.value = '';
    }
  }
  return (
    <div>
      {/* <Navbar /> */}
      <div style={{marginTop:'100px'}} className="signpage">
        <h1 className="signh" style={{ paddingTop: '60px' }}>Create an Account</h1>
        <p className="signp">Please fill all details</p>
        <span className="signi1"></span>
        <input ref={cRef} type="text" className="sign1" placeholder='Enter CNIC' />
        <span className="signi2"></span>
        <input ref={fRef} type="text" className="sign2" placeholder='Enter Firstname' />
        <span className="signi3"></span>
        <input ref={lRef} type="text" className="sign3" placeholder='Enter Lastname' />
        <span className="signi4"></span>
        <input  ref={emailRef} type="email" className="sign4" placeholder='Enter email' />
        <span className="signi5"></span>
        <input ref={cityRef} type="email" className="sign5" placeholder='Enter city' />
        <span className="signi6"></span>
        <input ref={coRef} type="email" className="sign6" placeholder='Enter Country' />
        <span className="signi7"></span>
        <input ref={hRef} type="email" className="sign7" placeholder='Enter House#' />
        <span className="signi8"></span>
        <input ref={sRef} type="email" className="sign8" placeholder='Enter Street' />
        <span className="signi9"></span>
        <input ref={passRef} type="password" className="sign9 " placeholder='Password' />
        <button onClick={signedup} style={{ display: 'block' }} className="sbtn">SIGNUP </button>
        
      </div>
      <span  className='signa'>Already have an account ? <Link style={{ color: '#fd7e14' }} to="/Login">Login</Link></span>
      {/* <Footer/> */}
    </div>
  )
}
