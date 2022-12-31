// import React, { useState } from 'react'
import React  from 'react'

export default function Todo({ TodoListing }) {
  // const [counter , setcounter] =  useState(0);
  
  return (
    <div>
        {/* <h3>{props.name}</h3>  */}
        <h3>  { TodoListing }  </h3>    
     </div>
  )
}
