import React from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
export default function Wallet() {

     const getValue = async (url,cnic,ct) => {
    // console.log('get data called\n')
    const Data = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
      body: JSON.stringify({
        
    
        cnic:cnic,
        ct:ct
        })
    })
        .then(res => res.json())
        .then(Data => {
          // console.log(Data[0])
        //    userData = Data[0];
        //   console.log(userData);
        //   if (userData == undefined)
        //    alert('Transaction successfully done!')
        });
     
  }
    const cRef = useRef(null);
  const wRef = useRef(null);
  const coRef = useRef(null);;
    let buyWall = () => {
    if ( cRef.current.value == ''  || coRef.current.value == '') {
      alert('Enter complete data!')
    }
    else {
      getValue('http://localhost:5000/getUpdateAdd', cRef.current.value, coRef.current.value);
   
      cRef.current.value = '';
      coRef.current.value = ''
    }
  }
  return (
      <div>
      <div style={{ marginTop: '100px', height: '400px' }} className="buy">
        <h3 style={{paddingTop:'40px'}}>Buy now for just <span style={{color:'#fd7e14'}}>20$</span></h3>
        <span className="signi1"></span>
        <input ref={cRef} type="text" className="sign1" placeholder='Enter CNIC' />
        <span className="signi2"></span>
        <input ref={coRef} type="text" className="sign2" placeholder='Enter CoinId' />
              <button onClick={buyWall} style={{ display: 'block', marginTop: '-30px' }} className="sbtn">BUY </button>
        <Link style={{ color: '#fd7e14', position: 'relative', top: '10px' ,display:'block'}} to="/Transactions">GO Back</Link>
        { localStorage.getItem('balance')=='null'?<Link style={{ position: 'relative', top: '20px', textDecoration: 'none' }} to="/accverify">To verify your Accout <span style={{ color: '#fd7e14', textDecoration: 'underline' }} >Click here</span></Link> : ''}
      </div>
      
    </div>
  )
}
