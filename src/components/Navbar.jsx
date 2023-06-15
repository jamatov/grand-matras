import React, {useState, useEffect} from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [active, setActive] = useState("nav-list");
  const [toggleIcon, setToggleIcon] = useState('nav__toggler');

  const[navbar, setNavbar] = useState(false)

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
        setNavbar(true);
    } else {
        setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeNavbar);

  const navToggle = () => {
    active === "nav-list"
      ? setActive("nav-list nav__active")
      : setActive("nav-list");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  useEffect(() => {
  }, [])

  return (
    <nav className={`Navbar ${navbar ? 'navbarActive' : ''}`}>
      <div className="container">
        <div className="nav-body">
          <Link to='/' ><img src={logo} alt="logo" /></Link>

          <ul className={active}>
            <li><Link activeClass="active" onClick={navToggle} to='/' >Asosiy</Link></li>
            <li><Link activeClass="active" onClick={navToggle} to='/biz_haqimizda'>Biz haqimizda</Link></li>
            <li><Link activeClass="active" onClick={navToggle} to='/mahsulotlar'>Mahsulotlar</Link></li>
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
