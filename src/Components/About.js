import React, { useState } from 'react'
import Navbar from './Navbar'
import imge from '../Images/about2.webp'
import imge1 from '../Images/rollavout.webp'
import imge2 from '../Images/2.png.webp'
import imge3 from '../Images/bitim.webp'
import imge4 from '../Images/3.png.webp'
import Footer from './Footer'
export default function About() {
  const [p, setP] = useState(0);
  const [bp, setBP] = useState(0);
  const [sp, setSP] = useState(0);
  const [ap, setAP] = useState(0);

   let count1 = 0;
  let pa = () => {
    count1++;
  }
  let v1=setInterval(() => {
    pa();
    if (count1 <= 50)
      document.getElementById('procedurep').innerHTML = count1;
     else
      clearInterval(v1);
  }, 200);
  let count2 = 0;
  let pa1 = () => {
    count2++;
  }
  let v2=setInterval(() => {
    pa1();
    if (count2 <= 60)
      document.getElementById('bankp').innerHTML = count2;
     else
      clearInterval(v2);
  }, 200);
   let count3 = 0;
  let pa2 = () => {
    count3++;
  }
  let v3=setInterval(() => {
    pa2();
    if (count3 <= 60)
      document.getElementById('supportp').innerHTML = count3;
     else
      clearInterval(v3);
  }, 200);
   let count4 = 0;
  let pa3 = () => {
    count4++;
  }
  let v4=setInterval(() => {
    pa3();
    if (count4 <= 55)
      document.getElementById('bitcoinp').innerHTML = count4;
    else
      clearInterval(v4);
  }, 200);


  
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="content">
          <h1 className='contenthead'>About Us Company</h1>
          <div className="nav">
            <ul>
              <li>Home</li>
              <li className='navicon'></li>
              <li style={{color: '#fd7e14'}}>About us</li>
            </ul>
          </div>
          <div className="below">
            <div className="image">
              <img src={imge} alt="slow connection" />
            </div>
            <div className="text">
              <p style={{color:'black',fontSize:'22px',width:'700px',marginLeft:'60px',marginTop:'30px'}}>Minimum purchase is 50 Coins tokens. Get a bonus from 5% to 25% on every token purchase</p>
              <p style={{ color: 'black', width: '700px', marginLeft: '60px' }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              <div className="itemimme">
                <div className="item">
                  <img src={imge1} alt="" />
                  <p style={{ marginTop: '10px' }} id='procedurep'>{count1}</p>
                  <p>Procedures Ready</p>
                </div>
                <div className="item">
                  <img src={imge2} alt="" />
                  <p style={{ marginTop: '10px' }} id='bankp'>{count2}</p>
                  <p>Bank Support</p>
                </div>
                <div className="item">
                  <img src={imge3} alt="" />
                  <p style={{ marginTop: '10px' }} id='supportp'>{count3}</p>
                  <p>Support Countries</p>
                </div>
                <div className="item">
                  <img src={imge4} alt="" />
                  <p style={{ marginTop: '10px' }} id='bitcoinp'>{count4}</p>
                  <p>Bitcoin Atms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bitcoin">
          <h1>Why Choose Bitcoin</h1>
          <div className="cards">
            <div className="card1">
              <h2 style={{marginTop:'30px'}}>What we Offer</h2>
              <p style={{ marginTop: '40px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem perspiciatis odit possimus eius sunt illo minima minus temporibus, voluptatibus repellendus fuga corrupti a hic error tempora deserunt odio veritatis ipsam.</p>
              <p style={{ marginTop: '40px' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quas aperiam numquam at deleniti, itaque alias labore ipsum! Repellat, nihil.</p>
              <h4 style={{color:'#fd7e14',marginTop:'30px'}}>Free Consultation</h4>
            </div>
            <div className="card2">
              <div style={{marginTop:'-1px'}} className="carda">
                <h2 style={{marginTop:'30px'}}>Safe And Secure</h2>
                <p style={{marginTop:'30px'}}>There are many variations of Lorem Ipsum available but the about some majority have form randomised words which believable.</p>
              </div>
              <div style={{marginTop:'34px'}}  className="carda">
                <h2 style={{marginTop:'30px'}}>Instant Exchange</h2>
                <p style={{marginTop:'30px'}}>There are many variations of Lorem Ipsum available but the about some majority have form randomised words which believable.</p>
              </div>
            </div>
              <div className="card2">
              <div style={{marginTop:'-1px'}} className="carda">
                <h2 style={{marginTop:'30px'}}>Secure Wallet</h2>
                <p style={{marginTop:'30px'}}>There are many variations of Lorem Ipsum available but the about some majority have form randomised words which believable.</p>
              </div>
              <div style={{marginTop:'34px'}} className="carda">
                <h2 style={{marginTop:'30px'}}>Experts Support</h2>
                <p style={{marginTop:'30px'}}>There are many variations of Lorem Ipsum available but the about some majority have form randomised words which believable.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
