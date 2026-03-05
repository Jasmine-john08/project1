import React from 'react'
import { Link } from 'react-router-dom'
import "./Service.css"

const Service = () => {
  return (
    <div className='service'>
      <nav className='web'>
        <ul className='nav1'>
          <li>
          <Link to="fan">Fan</Link>
        </li>
        <li>
          <Link to="motor">Motor</Link>
        </li>
        <li>
          <Link to="power-tools">Power Tools</Link>
        </li>
        </ul>
      </nav>
      <div className='div'>
        <h3>Moter Detail Entry</h3><hr />
        <div >
          <main className='div2'>
            <label htmlFor="product">Product Id:</label><input type="text" name='product'/>
          <label htmlFor="customer">Customer Name:</label><input type="text" name='customer' placeholder='Enter the name' />
          <label htmlFor='mobile'>Mobile No:</label><input type="number" name='mobile' placeholder='Enter the number'/>
          <label htmlFor='color'>Color:</label><input type='color' name='color' value="#000000"/>
          <label htmlFor='delivery'>Delivery chellan:</label><input type="text" placeholder='-' />
          </main>
          <main className='div2'>
            <div className="div3">
            <label htmlFor='motor-hp'>Motor Hp:</label><select name="motor-hp" id="">
              <option value="">½</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">¼</option>
              <option value="">¾</option>
              </select>
            <label htmlFor="custom">Custom:</label><input type="text" />
            </div>
            <label htmlFor="miss">Missing Parts:</label><input type="text" name='miss' placeholder='Parts'/>
            <label htmlFor="date">Date Given:</label><input type="date" name='date' />
            <label htmlFor="adv">Advance:</label><input type="number" name='adv' placeholder='0'/>
          </main>
        </div>
        <hr />
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Service
