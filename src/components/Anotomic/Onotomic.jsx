import React from 'react'
import img3 from '../../images/anatomik.jpg'
import img2 from '../../images/anato-komfort.jpg'
import img1 from '../../images/anato-klassik.jpg'

export default function Onotomic() {
  return (
    <section className='MoreInfo'>
      <div className="container">
        <h2>Anatomik matraslar</h2>
        <h3>O'z ishlab chiqarish - eng yaxshi narx kafolati!</h3>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="card-body">
                <img src={img1} alt="" />
                <h3>Klassik</h3>
                <p> Balandligi: 25 sm</p>
                <p> Yuk: 120 kg</p>
                <p> Kafolat: 5 yil</p>

                <div className="d-flex">
                  <p className='skidka'>750 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>

                <div className="d-flex">
                  <p>700 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="card-body">
                <img src={img2} alt="" />
                <h3>Komfort</h3>
                <p> Balandligi: 28 sm</p>
                <p> Yuk: 150 kg</p>
                <p> Kafolat: 6 yil</p>

                <div className="d-flex">
                  <p className='skidka'>950 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>

                <div className="d-flex">
                  <p>900 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="card-body">
                <img src={img3} alt="" />
                <h3>Premium</h3>
                <p> Balandligi: 32 sm</p>
                <p> Yuk: 150 kg</p>
                <p> Kafolat: 7 yil</p>

                <div className="d-flex">
                  <p className='skidka'>1 300 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>

                <div className="d-flex">
                  <p>1 250 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
