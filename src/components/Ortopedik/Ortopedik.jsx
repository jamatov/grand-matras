import React from 'react'
import img1 from '../../images/orto-klassik.jpg'
import img2 from '../../images/orta-komfort.jpg'
import img3 from '../../images/orto-premium.jpg'

export default function Ortopedik() {
  return (
    <section className='MoreInfo'>
      <div className="container">
        <h2>Ortopedik matraslar</h2>
        <h3>O'z ishlab chiqarish - eng yaxshi narx kafolati!</h3>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="card-body">
                <img src={img1} alt="" />
                <h3>Klassik</h3>
                <p> Balandligi: 22 sm</p>
                <p> Yuk: 90 kg</p>
                <p> Kafolat: 2 yil</p>

                <div className="d-flex">
                  <p className='skidka'>400 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>

                <div className="d-flex">
                  <p>350 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>
                <a href="#buyurtma">
                  <button>Buyurtma berish</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="card-body">
                <img src={img2} alt="" />
                <h3>Komfort</h3>
                <p> Balandligi: 25 sm</p>
                <p> Yuk: 110 kg</p>
                <p> Kafolat: 3 yil</p>

                <div className="d-flex">
                  <p className='skidka'>600 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>

                <div className="d-flex">
                  <p>550 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>
                <a href="#buyurtma">
                  <button>Buyurtma berish</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="card-body">
                <img src={img3} alt="" />
                <h3>Premium</h3>
                <p> Balandligi: 25 sm</p>
                <p> Yuk: 140 kg</p>
                <p> Kafolat: 4 yil</p>

                <div className="d-flex">
                  <p className='skidka'>800 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>

                <div className="d-flex">
                  <p>750 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>
                <a href="#buyurtma">
                  <button>Buyurtma berish</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
