import React from 'react'

function InputBtn(prop) {
    return (

        <input
            onChange={prop.inputChange}
            type="text"
            className="border-2 border-black rounded-lg text-center mt-2 mx-auto block w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12"

            placeholder='Enter your Value'
        />
    )
}

export default InputBtn

// ak table ka componet bana hai us mai ap.jsx say arry chla kar object pass krna hai 