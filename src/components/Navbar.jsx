import React from 'react'
import { FaCoins } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'
import InputFiltered from './InputFiltered'

const Navbar = ({handleChangeList}) => {
  return (
    <div>
        <Link to='/' className="navbar">
            <FaCoins className='icon'/>
            <h1> Coin <span className='purple'> Search</span></h1>
            <InputFiltered handleChangeList={handleChangeList}/>
        </Link>
    </div>
  )
}

export default Navbar