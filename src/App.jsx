import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ABButton from './components/ABButton'
import InputBtn from './components/input'
import TableComponent from './components/table'



function App() {

  // button Component
  const buttonClick = () => {
    console.log("button click from parent");
  }
  // Table Component
  const data = [
    { name: "Saif", email: "abc@gmail.com", age: 12 },
    { name: "Faizan", email: "abc@gmail.com", age: 13 },
    { name: "Raheel", email: "abc@gmail.com", age: 14 }

  ]
  console.log(data);

  // input
  const inputType = () => {
    console.log("input check");

  }


  return (
    <div>
      <div>
        <h1 className='text-center text-4xl font-bold pt-5'>React.js Component</h1>
      </div>

      <div className='p-8'>
        <div className='text-center pt-8'>
          <h1 className='text-2xl font-bold mb-4 text-center'>Button Component</h1>
          <ABButton

            btnClick={buttonClick}
            lable="Register" />

          <ABButton lable="Login" />
          <ABButton lable="SignUp" />
          <ABButton lable="Ok" />
        </div>
      </div>

      <div className='p-8'>
        <h1 className='text-2xl font-bold text-center'>Input component</h1>
        <InputBtn
          inputChange={inputType}
          text="type"
        />
      </div>


      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4 text-center">User Data Table</h1>
        {/* Pass the data array to the TableComponent as a prop */}
        <TableComponent data={data} />
      </div>


    </div>
  )
}


export default App
