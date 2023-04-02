import React, { useState } from 'react'
export default function Card(props) {
 
  return (
    
    <div className={props.set=='true' ? 'carddiv1' :'carddiv'} id='cardid'  >
      <h2 className="cardh1">{props.heading}</h2>
          <p className="cardp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa sequi praesentium exercitationem tempore consequuntur incidunt non aliquid provident totam. Nesciunt porro earum totam exercitationem inventore possimus, officia culpssimus, officia culpa iusto</p>
          <button className="cardbtn">Read More</button>
    </div>
  )
}
