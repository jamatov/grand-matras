import React from 'react'
import rectangle from '../images/header-rectangle.svg'
import headerimg from '../images/head-img.png'

export default function Header() {
  return (
    <header className='Header'>
      <div className="container">
        <div className="row">

          <div className="col-md-12 col-lg-6">
            <div className="header-info">
              <h2>GRAND MATRAS</h2>
              <p>Matraslar yaxshi tungi uyqu uchun zarur bo'lib, ular har xil turdagi, o'lchamlar va materiallarda mavjud bo'lib, ular shaxsiy imtiyozlar va ehtiyojlarga mos keladi.</p>
              <button>Bepul kansulatsiya</button>
            </div>
          </div>

          <div className="col-md-12 col-lg-6">
            <div className="header-img">
              <img src={rectangle} className='header-rectangle' alt="" />
              <img src={headerimg} className='header-matras' alt="" />
            </div>
          </div>

        </div>

        
      </div>
    </header>
  )
}
