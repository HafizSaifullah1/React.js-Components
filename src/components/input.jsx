import React from 'react'

function InputBtn(prop) {
    return (
        <input
        onChange={prop.inputChange}
        style={{border:"black 2px solid", borderRadius:"10", textAlign:"center",marginTop:"10px", marginLeft:"43%"}}
        placeholder='Enter your Value'/>
    )
}

export default InputBtn

// ak table ka componet bana hai us mai ap.jsx say arry chla kar object pass krna hai 