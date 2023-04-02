import React from 'react'
export default function Arow(props) {
  
    return (
      
    <div>
          <div className="req">
              <p className='p1'>{props.set+1}</p>
              <p className='p2'>{props.cnic}</p>
              <p className='p3'>{props.value}</p>
              <button  onClick={()=>props.handleAccept(props.set)}  id={props.set} className="bb1">Approve</button>
              <button onClick={()=>props.handleDelete(props.set)}    className="bb2">Reject</button>
          </div>
          <hr />
    </div>
  )
}
