import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div className='log'>
      <section className='sec'>
        <form action="">
        <div className='flex'>
            <label htmlFor="">Customer Name:</label>
            <input type="text" placeholder='Enter the name'required/>
        </div>
        <div className="flex">
            <label htmlFor="">Address:</label>
            <input type="text" placeholder='Enter the Address' required/>
        </div>
        <div className="flex">
            <label htmlFor="">Contact Number:</label>
            <input type="tel" placeholder='Enter the Number' min="10" required pattern="\d{10}" title="Enter a 10-digit phone number"/>
        </div>
        <div className="flex">
            <label htmlFor="">Email:</label>
            <input type="email" placeholder='Enter the email' required/>
        </div>
        <button>Register</button>
      </form>
      </section>
    </div>
  )
}

export default Login
