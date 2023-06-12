import React from 'react'
import logo from '../images/logo.svg'

export default function Navbar() {
  return (
    <nav className='Navbar'>
      <div className="container">
        <div className="nav-body">
          <img src={logo} alt="logo" />

          <ul className='nav-list'>
            <li><a href="">Asosiy</a></li>
            <li><a href="">Biz haqimizda</a></li>
            <li><a href="">Mahsulotlar</a></li>
            <li><a href="">Aloqa</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
