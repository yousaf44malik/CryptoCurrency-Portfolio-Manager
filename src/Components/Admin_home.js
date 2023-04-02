import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Admin_home() {
  const navigate = useNavigate();
    let userData;
     const getValue = async (url,cointype,value) => {
    const Data = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
      body: JSON.stringify({  
        ctype:cointype,
        val:value
        })
    })
        .then(res => res.json())
        .then(Data => {
           userData = Data[0];
        });
     
  }
    const cRef = useRef(null);
    const nRef = useRef(null);
    let change = () => {
       if ( cRef.current.value == ''  || nRef.current.value == '') {
      alert('Enter complete data!')
    }
    else {
      getValue('http://localhost:5000/getUpdateDetail', cRef.current.value, nRef.current.value);
   
      cRef.current.value = '';
      nRef.current.value = ''
    }
  }
  let viewReq = () => {
   navigate('/admRow')
  }
  return (
    <div>
      {/* <h1 style={{marginTop:'50px'}}>Update Rates of Coins here!</h1> */}
      <button onClick={viewReq} className="requests">View Requests</button>
      <div style={{ marginTop: '100px' }} className="chdetail">
        <h1 style={{fontSize:'35px'}}>Update Rates of Coins here!</h1>
        <span className="signi1"></span>
        <input ref={cRef} type="text" className="sign1" placeholder='Enter coinType' />
        <span className="signi2"></span>
        <input ref={nRef} type="text" className="sign2" placeholder='Enter new Value' />
              <button onClick={change} style={{ display: 'block', marginTop: '-30px' }} className="sbtn">Click </button>
      </div>
    </div>
  )
}
