import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Home from './Home'
export default function Row(props) {
 
  let button = (e) => {
    if (e.target.id == 1) {
      document.getElementById('1').setAttribute('href', 'https://cointelegraph.com/news/bitcoin-slips-under-20k-amid-biden-budget-silvergate-collapse');
      document.getElementById('1').setAttribute('target', "_blank");
    }
    else if (e.target.id == 2){
      document.getElementById('2').setAttribute('href', 'https://www.binance.com');
      document.getElementById('2').setAttribute('target', "_blank");
    }
    else if (e.target.id == 3){
      document.getElementById('3').setAttribute('href', 'https://www.binance.com');
      document.getElementById('3').setAttribute('target', "_blank");
    }
    else if (e.target.id == 4){
      document.getElementById('4').setAttribute('href', 'https://www.binance.com');
      document.getElementById('4').setAttribute('target', "_blank");
    }
     else if (e.target.id == 5){
      document.getElementById('5').setAttribute('href', 'https://www.binance.com');
      document.getElementById('5').setAttribute('target', "_blank");
    }
     else if (e.target.id == 6){
      document.getElementById('6').setAttribute('href', 'https://www.binance.com');
      document.getElementById('6').setAttribute('target', "_blank");
    }
  }
  return (
      <div style={{marginTop:'50px'}} className='irow'>
          <div className="name">
            <img className='ii' src={props.img} alt="slow connection" />
              <h3 className='ih'>{props.heading}</h3>
            <p className='ip'>{props.short}</p> 
          </div>
          <div className="price">
              <h5 className={props.set=='true'?'c1':'c2'}>{props.price}</h5>
          </div>
          <div className="change">
        <h5 className={props.set == 'true' ? 'ca1' : 'ca2'}>{props.set=='true'?'+'+props.change:'-'+props.change}</h5>
          </div>
          <div className="transact">
              <a  id={props.id} className="b1" onClick={button}>Read</a>
              <Link  id={props.id}  className="b2">News</Link>
         </div>
      
    </div>
  )
}
