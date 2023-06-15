import React from 'react'
import icon1 from '../images/icons/vhy5.svg'
import icon2 from '../images/icons/vhy2.svg'
import icon3 from '../images/icons/vhy6.svg'
import icon4 from '../images/icons/vhy4.svg'


export default function HeaderIcons() {
  return (
    <section className='HeaderIcons'> 
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3">
            <img className='mb-2' src={icon1} alt="" />
            <p>Xavfsizlik</p>
          </div>
          <div className="col-6 col-md-3">
            <img className='mb-2' src={icon2} alt="" />
            <p>Sertifikatlangan mahsulotlar</p>
          </div>
          <div className="col-6 col-md-3">
            <img className='mb-2' src={icon3} alt="" />
            <p>Sertifikatlangan mahsulotlar</p>
          </div>
          <div className="col-6 col-md-3">
            <img className='mb-2' src={icon4} alt="" />
            <p>Sertifikatlangan mahsulotlar</p>
          </div>
        </div>
      </div>
    </section>
  )
}
