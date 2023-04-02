import React from 'react'
import Navbar from './Navbar'
import {Link, useNavigate} from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { useRef } from 'react'
import { useState } from 'react'

let username;
export default function Login() {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passRef = useRef(null);
  let userData;
     const getCompany = async (url,email,pass,table) => {
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
           table: table
        })
    })
        .then(res => res.json())
        .then(Data => {
          console.log(Data[0])
           userData = Data[0];
          console.log(userData);
          // if (userData.password !== passRef.current.value) {
          //   alert('error')
          // }
          // else if (userData.email !== emailRef.current.value) {
          //   console.log(emailRef.current.value)
          //   alert('error');
          // }
          // else {
          //   alert('success')
            
          // }
        });
}
  let logedin = async () => {
    // let email = document.querySelector('.logi1').value;
    // let password = document.querySelector('.logi2').value;
    // axios.post('http://localhost:5000/getUser')
    //   .then(res => {
    //   // console.log(res.data.recordsets[0])
    //     let arr = res.data.recordsets[0];
    //     console.log(arr)
    //     // document.getElementById('para').innerHTML = res.data.recordsets[0][0].Cname;
    //   }).catch(err => {
    //   console.log(err)
    // })
    //  console.log(emailRef.current.value,passRef.current.value)
    //
    if (emailRef.current.value == '' || passRef.current.value == '') {
      alert('Enter complete data!')
    }
    else {
      const Data1 = await fetch('http://localhost:5000/getUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: emailRef.current.value,
          pass: passRef.current.value,
        })
      })
        .then(res => res.json())
        .then(Data => {
          console.log(Data[0])
          let userData = Data[0];
          
          // setData(Data[0]);
          // console.log(typeof(emailRef.current.value),passRef.current.value);
          if (emailRef.current.value=="admin" && passRef.current.value=="admin") {
            //  console.log(userData.password)
            navigate("/ah")
          }
          else if (userData==undefined) {
           alert("error")
          }
          else {
            // alert('success')
            // username = emailRef.current.value;
            localStorage.removeItem('balance');
            localStorage.removeItem('user');
            localStorage.setItem('balance',userData.balance)
            localStorage.setItem('user', userData.Fname + ' ' + userData.Lname)
            // localStorage.setItem('user',emailRef.current.value)
            // localStorage.setItem('pass', passRef.current.value);
            navigate("/h")
          }
        });
      emailRef.current.value = '';
      passRef.current.value = '';
    }
 
  }

  return (
    <div>
          {/* <Navbar /> */}
          <div style={{marginTop:'100px'}} className="login">
              <h1 className='logh1' style={{ paddingTop: '60px', }}>Login</h1>
              <p className='logp'>Please Login to continue</p>
              <span className="licon1"></span>
        <input ref={emailRef} type="text" className="logi1 " placeholder='Email' />
              <span className="licon2"></span>
              <input ref={passRef} type="password" className="logi2 " placeholder='Password' />
              <button onClick={logedin} style={{display:'block'}} className="lbtn">LOGIN </button>
              <div className="forget">
                  <Link  to="/forgetPassword">Forgot Password</Link>
              </div>
              <span className='logspan'>Donot have an account ? <Link style={{color:'#fd7e14'}} to="/signup">Signup</Link></span>
          </div>
          {/* <Footer/> */}
    </div>
  )
}
