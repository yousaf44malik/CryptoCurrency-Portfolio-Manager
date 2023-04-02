import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Contact() {
  return (
    <div>
          <Navbar />
          <div className="contact">
            <div className="content">
                <h1 style={{marginLeft:'-220px'}} className='contenthead'>Contact</h1>
                  <div className="nav">
                    <ul>
                    <li>Home</li>
                    <li className='navicon'></li>
                    <li style={{color: '#fd7e14'}}>Contact us</li>
                    </ul>
                 </div>
             </div>
          </div>
          <div className="ccard">
              <div style={{width:'500px'}} className="ccard1">
                  <h2> <h2 style={{ display: 'inline-block', color: '#fd7e14' }}>Get in</h2> touch with us!</h2>
                  <p style={{marginTop:'10px'}}>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form .</p>
                  <input style={{marginLeft:'10px',marginTop:'30px',height:'35px'}} type="text" placeholder='Name' />
                  <input style={{ marginLeft: '10px',height:'35px' }} type="text" placeholder='Email' />
                  <input style={{ width: '390px', marginLeft: '10px', marginTop: '20px',height:'35px' }} type="text" placeholder='Subject' />
                  <textarea style={{ marginLeft: '10px', marginTop: '30px' }} cols="50" rows="10" placeholder='Message'></textarea>
                  <button style={{marginTop:'20px'}} className="cbtn">Sent Message</button>
              </div>

              <div className="ccard2">
                  <div  className="txt">
                      <h3>Head Office</h3>
                      <div className="fontawesome">
                        <div className="i1">30 South Park Avenue, CA 94108 San Francisco USA</div>
                        <div className="i2">Supportinfo@yourdomain.com</div>
                        <div className="i3">+18 0540 1516 056, +01 2156 2455 054</div>
                      </div>
                      <hr style={{ marginTop: '60px' }} />
                       <h2 style={{marginTop:'15px'}}>Branch Office</h2>
                      <div className="fontawesome">
                        <div className="i1">30 South Park Avenue, CA 94108 San Francisco USA</div>
                        <div className="i2">Supportinfo@yourdomain.com</div>
                        <div className="i3">+18 0540 1516 056, +01 2156 2455 054</div>
                      </div>
                  </div>
              </div>
          </div>
          <Footer/>
    </div>
  )
}
