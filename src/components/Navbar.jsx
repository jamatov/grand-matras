import React, {useState} from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [active, setActive] = useState("nav-list");
  const [toggleIcon, setToggleIcon] = useState('nav__toggler');

  const navToggle = () => {
    active === "nav-list"
      ? setActive("nav-list nav__active")
      : setActive("nav-list");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };
  
  return (
    <nav className='Navbar'>
      <div className="container">
        <div className="nav-body">
          <Link to='/' ><img src={logo} alt="logo" /></Link>

          <ul className={active}>
            <li><Link to='/' >Asosiy</Link></li>
            <li><Link to='/biz_haqimizda'>Biz haqimizda</Link></li>
            <li><Link to='/mahsulotlar'>Mahsulotlar</Link></li>
            {/* <li><a href="">Aloqa</a></li> */}
          </ul>

          <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}
