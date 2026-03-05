import React from 'react'
import "./Spares.css"
import { BsSearch } from 'react-icons/bs'

const Spares = () => {
  return (
    <div>
      <div className='homeSearch-'>
        <input type="text" placeholder='Search by name,id or phone number' />
        <button className='btn'><BsSearch className='icon'/></button>
      </div>
      <div className='spare-table'>
        <table className='table'>
            <thead className='table-head'>
                <tr><td>Spare Name</td><td>Use Case</td><td>Units Available</td><td>Price</td><td>Quantity</td><td>Sell Stocks</td></tr>
            </thead>
             <tr><td>Back lid</td><td>power tool</td><td>8</td><td>17</td><td><input type="number" placeholder='0'/></td><td><button>Sell</button></td></tr>
        </table>
      </div>
    </div>
  )
}

export default Spares
