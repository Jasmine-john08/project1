import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Status.css"

const Status = () => {
  return (
    <div className='status'>
      <section className='flex'>
        <main className='main 1'>
        <label htmlFor="">Customer Name:</label>
        <label htmlFor="">Mobile number:</label>
        <label htmlFor="">Machine:</label>
        <label htmlFor="">Motor Hp:</label>
        <label htmlFor="">Delivery Chellan:</label>
        <label htmlFor="">Missing Parts:</label>
        <label htmlFor="">Advance:</label>
      </main>
      <main className='main-status'>
        <div className='expense'>
          <h3>Expenses</h3>
          <input type="text" placeholder='Search'/><input type="number" placeholder='0'/>
          <button>Add</button>
        </div>
        <pre className='lap'>
          <div className='jas'>
          <h4>Back lid</h4><h4>24</h4><button>Remove</button>
          </div>
          <div className='jas'>
          <h4>Front lid</h4><h4>54</h4><button>Remove</button>
          </div>
          <div className='jas'>
          <h4>Back lid</h4><h4>24</h4><button>Remove</button>
          </div>
        </pre>
      </main>
      </section>
      <main className='footer'>
        <label htmlFor="repairstatus">Repair Status:</label><label class="toggle"><input type="checkbox" name='repairstatus'/><span class="slider"></span></label>
        <label htmlFor="delivery">Delivery Status:</label><label class="toggle"><input type="checkbox" name='delivery'/><span class="slider"></span></label> 
        <label htmlFor="payment">Payment:</label><label class="toggle"><input type="checkbox" name='payment'/><span class="slider"></span></label>
        <label htmlFor="discount">Discount:</label><input type="number" name='discount' placeholder='0'/>
        <label htmlFor="total">Total:</label>
        <button>Update</button>
      </main>
      <Outlet/>
    </div>
  )
}

export default Status
