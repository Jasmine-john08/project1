import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import "./Home.css"
import { BsSearch } from "react-icons/bs";

const Home = () => {
  return (
    <div className='home'>
      <div className='homeSearch'>
        <input type="text" placeholder='Search by name,id or phone number' />
        <button><BsSearch className='icon'/></button>
      </div>
      <table >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Mobile No</th>
            <th>Color</th>
            <th>Machine</th>
            <th>Given Date</th>
            <th>Repair Status</th>
            <th>Delivery Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>jasmine</td>
            <td>9566029982</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><Link to={"status"}>Status</Link></td>
          </tr>
        </tbody>
      </table>
      <Outlet/>
    </div>
  )
}

export default Home
