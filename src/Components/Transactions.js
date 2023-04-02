import React from 'react'
import Navbar from './Navbar'
import { useRef } from 'react'
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
export default function Transactions() {
    const navigate = useNavigate();
  const cRef = useRef(null);
  const wRef = useRef(null);
  const coRef = useRef(null);;
  const nRef = useRef(null);
   const c1Ref = useRef(null);
  const w1Ref = useRef(null);
  const co1Ref = useRef(null);;
  const n1Ref = useRef(null);
  let userData;
      const getCompany = async (url,val) => {
    // console.log('get data called\n')
    const Data = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
      body: JSON.stringify({
           val:val
           
        })
    })
        .then(res => res.json())
        .then(Data => {
          // console.log(Data[0])
           userData = Data[0];
          // console.log(userData.coin_id);
          
        });
  }
   const getValue = async (url,wid,cnic,num,ct) => {
    // console.log('get data called\n')
    const Data = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
      body: JSON.stringify({
        
        wid: wid,
        cnic:cnic,
        num: num,
        ct:ct
        })
    })
        .then(res => res.json())
        .then(Data => {
          // console.log(Data[0])
           userData = Data[0];
          // console.log(userData);
        });
     
  }
  let buyClick = () => {
    if (wRef.current.value == '' || cRef.current.value == '' || nRef.current.value == '' || coRef.current.value == '') {
      alert('Enter complete data!')
    }
    else {
      getValue('http://localhost:5000/getCardinals', wRef.current.value, cRef.current.value, nRef.current.value, coRef.current.value);
      alert('Successfully done!')
      wRef.current.value = '';
      cRef.current.value = '';
      nRef.current.value = '';
      coRef.current.value = ''
    }
  }
  let sellClick = () => {
    if (w1Ref.current.value == '' || c1Ref.current.value == '' || n1Ref.current.value == '' || co1Ref.current.value == '') {
      alert('Enter complete data!')
    }
    else {
      getValue('http://localhost:5000/getCardinals1', w1Ref.current.value, c1Ref.current.value, n1Ref.current.value, co1Ref.current.value);
      alert('Successfully done!')
      w1Ref.current.value = '';
      c1Ref.current.value = '';
      n1Ref.current.value = '';
      co1Ref.current.value = ''
    }
  }
  return (
    <div>
      {/* {navigate('/Login')} */}
      <Navbar />
      <h2 style={{marginTop:'50px'}}>Buy and Sell your desired Coins</h2>
      <div  className="overall">
      <div style={{marginTop:'100px'}}  className="buy">
        <span className="signi1"></span>
        <input ref={cRef} type="text" className="sign1" placeholder='Enter CNIC' />
        <span className="signi2"></span>
        <input ref={wRef} type="text" className="sign2" placeholder='Enter WalletID' />
       <span className="signi3"></span>
        <input ref={coRef} type="text" className="sign3" placeholder='Enter Cointype' />
        <span className="signi4"></span>
        <input ref={nRef} type="email" className="sign4" placeholder='Enter number of coins' />
          <button onClick={buyClick} style={{ display: 'block', marginTop: '-100px' }} className="sbtn">BUY </button>
          <Link style={{ color: '#fd7e14', position: 'relative', top:'10px'}} to="/Wallet">Donot have wallet buy now!</Link>
      </div>
      <div style={{marginTop:'100px'}}  className="sell">
        <span className="signi1"></span>
        <input ref={c1Ref} type="text" className="sign1" placeholder='Enter CNIC' />
        <span className="signi2"></span>
        <input ref={w1Ref} type="text" className="sign2" placeholder='Enter WalletID' />
       <span className="signi3"></span>
        <input ref={co1Ref} type="text" className="sign3" placeholder='Enter Cointype' />
        <span className="signi4"></span>
        <input  ref={n1Ref} type="email" className="sign4" placeholder='Enter number of coins' />
        <button onClick={sellClick} style={{display:'block',marginTop:'-100px'}} className="sbtn">SELL </button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
