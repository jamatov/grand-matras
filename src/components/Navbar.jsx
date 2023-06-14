import React from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='Navbar'>
      <div className="container">
        <div className="nav-body">
          <Link to='/' ><img src={logo} alt="logo" /></Link>

          <ul className='nav-list'>
            <li><Link to='/' >Asosiy</Link></li>
            <li><Link to='/biz_haqimizda'>Biz haqimizda</Link></li>
            <li><a href="">Mahsulotlar</a></li>
            <li><a href="">Aloqa</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
