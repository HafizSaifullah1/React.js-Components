import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ABButton from './components/ABButton'
import InputBtn from './components/input'
import TableComponent from './components/table'
// import Navbar from './components/navbar'
import Footer from './components/Footer'
import Navbar from './layout/Navbar'
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

      {/* <div>
        <Navbar/>
      </div> */}
      {/* 
      <div>
        <h1 className='text-center text-4xl font-bold pt-5'>React.js Component</h1>
      </div> */}

      {/* 
      <div className='p-8'>
        <div className='text-center pt-8'>
          <h1 className='text-2xl text-[red] font-bold mb-4 text-center'>Button Component</h1>
          <ABButton

            btnClick={buttonClick}
            lable="Register" />

          <ABButton lable="Login" />
          <ABButton lable="SignUp" />
          <ABButton lable="Ok" />
        </div>
      </div> */}

      {/* <div className='p-8'>
        <h1 className='text-2xl font-bold text-center'>Input component</h1>
        <InputBtn
          inputChange={inputType}
          text="type"
        />
      </div> */}


      {/* <div className="p-8">
        <h1 className="text-2xl font-bold mb-4 text-center">User Data Table</h1>

        <TableComponent data={data} />
      </div> */}

      {/* <div>
        <Footer/>
      </div> */}

      <div>
        <Navbar />

        <div className="bg-gradient-to-r w-full h-screen from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex items-center justify-center">
          <h1 className="text-center text-xl font-bold">Hello React</h1>
        </div>
    </div>

    </div >
  )
}


export default App
