import React from 'react'
import img1 from '../../images/bes-klassik.jpg'
import img2 from '../../images/bes-komfort.jpg'
import img3 from '../../images/bes-premium.jpg'

export default function Bezpurjina() {
  return (
    <section className='MoreInfo'>
      <div className="container">
        <h2>Prujinasiz matraslar</h2>
        <h3>O'z ishlab chiqarish - eng yaxshi narx kafolati!</h3>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="card-body">
                <img src={img1} alt="" />
                <h3>Klassik</h3>
                <p> Balandligi: 22 sm</p>
                <p> Yuk: 90 kg</p>
                <p> Kafolat: 3 yil</p>

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

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="card-body">
                <img src={img2} alt="" />
                <h3>Komfort</h3>
                <p> Balandligi: 25 sm</p>
                <p> Yuk: 110 kg</p>
                <p> Kafolat: 4 yil</p>

                <div className="d-flex">
                  <p className='skidka'>1 000 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>

                <div className="d-flex">
                  <p>950 000 </p>
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
                <p> Balandligi: 28 sm</p>
                <p> Yuk: 120 kg</p>
                <p> Kafolat: 5 yil</p>

                <div className="d-flex">
                  <p className='skidka'>1 200 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>

                <div className="d-flex">
                  <p>1 100 000 </p>
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
