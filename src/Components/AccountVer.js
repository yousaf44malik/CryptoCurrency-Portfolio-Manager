import React from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom'
export default function AccountVer() {
    const cRef = useRef(null);
    const coRef = useRef(null);
    let verify = () => {
        if (cRef.current.value === '' || coRef.current.value === '') {
            alert("Enter complete data!")
        }
        else {
            let cnicData;
            let valData;
            let c = localStorage.getItem('cnic');
            let d = localStorage.getItem('value');
            
            if (c == null && d == null) {
                cnicData = [];
                valData = [];
            }
            else {
                cnicData = JSON.parse(c);
                valData= JSON.parse(d);
            }
            cnicData.push(cRef.current.value);
            valData.push(coRef.current.value);
            localStorage.setItem('cnic', JSON.stringify(cnicData));
            localStorage.setItem('value', JSON.stringify(valData));
            cRef.current.value = '';
            coRef.current.value = '';
        }
    }
  return (
    <div>
       <div style={{ marginTop: '100px', height: '400px' }} className="buy">
        <h3 style={{paddingTop:'40px'}}>Verify Your Account here</h3>
        <span className="signi1"></span>
        <input ref={cRef} type="text" className="sign1" placeholder='Enter CNIC' />
        <span className="signi2"></span>
        <input ref={coRef} type="text" className="sign2" placeholder='Enter your balance' />
        <button onClick={verify} style={{ display: 'block', marginTop: '-30px' }} className="sbtn">Verify </button>
        <Link style={{ color: '#fd7e14', position: 'relative', top: '10px' ,display:'block'}} to="/WAllet">GO Back</Link>
       
      </div>
    </div>
  )
}
