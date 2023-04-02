import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Images/logo.png'
import loginPage from './Login'
export default function Navbar() {
 const navigate = useNavigate();
  const balref = useRef(null);
  let a;
  const [loggeIn, setLoggedin] = useState(false);
  const [name, setName] = useState(null);
 
   const getValue = async (url,a) => {
    // console.log('get data called\n')
    const Data = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
      body: JSON.stringify({
        
        bal:a
        })
    })
        .then(res => res.json())
        .then(Data => {
          // console.log(Data[0])
          //  userData = Data[0];
          // console.log(userData);
        });
     
  }
  let logout = () => {
    let a = localStorage.getItem('balance');
    getValue('http://localhost:5000/getLogout', a);
    navigate('/')
  }
  return (
    <div>
      <header>
        <div className="top">
          <p className='topp' >Welcome to <p style={{ display: 'inline-block', color: '#fd7e14' }}>Cryptos</p></p>
          {/* <p style={{ color: '#fd7e14', position: 'relative', top: '25px', left: '400px' }}>{showTime }</p> */}
          <div className="pages">
           
            {localStorage.getItem('user') != null ? <h5 className='diff'>{localStorage.getItem('user')}</h5> : ''}
            {localStorage.getItem('balance') != 'null' ? (<p className='diffi'>{localStorage.getItem('balance') + ' $'}</p>) : <p className='diffi'>{ 0+' $'}</p>} 
            {/* <input ref={balref} type="text" className="diffi" /> */}
            <button onClick={logout} className="log">Logout</button>
          </div>
        </div>
        <div style={{backgroundColor:'#FAFAFA'}} className="bottom">
          <div className="logo">
            <img src={logo} alt="slow connection" />
          </div>
          <div className="navbar">
           <ul>
              <Link to="/h">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/market">Market</Link>
              <Link to="/transactions">Buy/Sell</Link>
              <Link to="/contact">Contact us</Link>
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}
