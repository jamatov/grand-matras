import React from 'react'
import icon1 from '../images/header-icon1.svg'

export default function HeaderIcons() {
  return (
    <section className='HeaderIcons'> 
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3">
            <img src={icon1} alt="" />
            <p>Sertifikatlangan mahsulotlar</p>
          </div>
          <div className="col-6 col-md-3">
            <img src={icon1} alt="" />
            <p>Sertifikatlangan mahsulotlar</p>
          </div>
          <div className="col-6 col-md-3">
            <img src={icon1} alt="" />
            <p>Sertifikatlangan mahsulotlar</p>
          </div>
          <div className="col-6 col-md-3">
            <img src={icon1} alt="" />
            <p>Sertifikatlangan mahsulotlar</p>
          </div>
        </div>
      </div>
    </section>
  )
}
