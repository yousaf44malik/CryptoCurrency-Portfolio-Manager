import React from 'react'
import Card from './Card'
import coin from '../Images/coin.webp'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Home() {

  return (
    <>
    <Navbar/>
    <div className='hello'>
      <div id="h1">
        <h1 id='hh1' >We are Everyone's</h1>
        <h1 id='hh2' >Coinbuzz Agency</h1>
        <p id="pp1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, corporis!</p>
        <button id="bb1">Read More</button>
      </div>
      <div className="world">
        <h1 style={{fontSize:'3.2rem'}}>Let's change</h1>
        <h1 style={{fontSize:'3.2rem'}}>the World together</h1>
        <p id='pp2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio rerum magnam dolores similique porro optio nam neque voluptas et, minima impedit possimus dignissimos illum </p>

        <div style={{marginTop:'80px'}} className="cardy">
          <div className='undcard' >
               <Card heading='Easy and Fast' set='false' />
          </div>
          <div className='undcard2 ' >
               <Card heading='No Strigs Attached' set='true' />
          </div>
          <div className='undcard' >
               <Card heading='Small Comissions' set='false'  />
          </div>
          <div className='undcard' >
               <Card heading='100% secure' set='false' />
          </div>
        </div>
      </div>
      <div className="coin">
        <img src={coin} alt="" />
        <div className="detail">
          <h1 style={{fontSize:'3.2rem'}}>Let’s change</h1>
          <h1 style={{fontSize:'3.2rem'}}>the world together</h1>
          <p style={{fontSize:'1.2rem',color:'grey',marginTop:'30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga asperiores temporibus a dolores culpa, hic consequatur mollitia neque explicabo!</p>
          <button className="coinbtn">ReadMore</button>
        </div>
      </div>
      <Footer/>
      </div>
      </>
  )
}
