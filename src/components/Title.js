import React from 'react'

// Props is a object

function Title({name,contactNumber,schoolName,rollNo}) {
  return (
    <div>
    {/* Whenever we get name from the screen we can pass it to the component over here */}
    <h1 style={{fontSize:30, color:"blue"}}>{name}</h1>
    <h1 style={{fontSize:30, color:"blue"}}>{contactNumber}</h1>
    <h1 style={{fontSize:30, color:"blue"}}>{schoolName}</h1>
    <h1 style={{fontSize:30, color:"blue"}}>{rollNo}</h1>
    </div>
  )
} 

export default Title