import React, { useEffect, useState } from 'react'
import Arow from './Arow';
import { Link } from 'react-router-dom';
export default function AdminRow() {
    let a = JSON.parse(localStorage.getItem('cnic'));
    let b = JSON.parse(localStorage.getItem('value'));
    
    let i = 0;
    const [cdata, setCdata] = useState(a);
    
    
    function deletereq(text) {
                
        let cnic = JSON.parse(localStorage.getItem('cnic'));
        let value = JSON.parse(localStorage.getItem('value'));
        console.log(cnic);
        console.log(value);
        console.log(text);
        cnic.splice(text, 1);
        value.splice(text, 1);
        localStorage.setItem('cnic', JSON.stringify(cnic));
        localStorage.setItem('value', JSON.stringify(value));
        console.log(cnic);
        console.log(value);
        i = 0;
        setCdata(cnic);
    }

    let userData;
  const getCompany = async (url,cnic,value) => {
      // console.log('get data called\n')
      const Data = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
       
          cnic: cnic,
          value:value
        })
      })
        .then(res => res.json())
        .then(Data => {
          console.log(Data)
          userData = Data;
          // console.log(userData[0].Name);
        
          // document.getElementById('para').innerHTML='binance'
          
          // ar = d[0];
          // console.log(ar.Name);
          // console.log(d[0])
        });
    }
     function reject(val) {
      let index = val;
      console.log(index);
      let cnic = JSON.parse(localStorage.getItem('cnic'));
      let value = JSON.parse(localStorage.getItem('value'));
      let a = cnic[index];
      let b = value[index];
      console.log(cnic[index]);
      console.log(value[index]);
      console.log(cnic);
      console.log(value);
      cnic.splice(index, 1);
      value.splice(index, 1);
      localStorage.setItem('cnic', JSON.stringify(cnic));
      localStorage.setItem('value', JSON.stringify(value));
      getCompany('http://localhost:5000/getPending', a, b);
      i = 0;
      setCdata(cnic);
  }
    const alpha=(<h4 style={{marginTop:'50px'}}>Nothing to show. No pending Approvals</h4>)

  return (
      <div>
          <Link style={{color:'#fd7e14',marginLeft:'-1250px'}}   to="/ah">Go Back</Link>
          <h1>Pending User's Account Approval Requests</h1>
          <div className="block">
              <h1>SrNo.</h1>
              <h1>CNIC</h1>
              <h1>Balance</h1>
          </div>
          
          {cdata.length==0?alpha : cdata.map((item) => (
              <div key={i}>
                  <Arow set={i} handleAccept={reject}  handleDelete={deletereq} cnic={item} value={b[i++]} />
             </div>
          ))}
    </div>
  )
}
