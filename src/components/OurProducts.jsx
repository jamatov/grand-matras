import React from 'react'
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'
import { Link } from 'react-router-dom'
import ortopedik from '../images/ortopedik.jpg'
import anatomik from '../images/anatomik.jpg'
import besprujina from '../images/besprujina.jpg'



export default function OurProducts() {
  return (
    <section className='OurProducts'>
      <div className="container">
        <h2 className='pruducts-tittle'>Bizning mahsulotlarimiz</h2>
        
        <div className="row">
          <div className="col-6 col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={ortopedik} alt="" />
                <h3>Ortopedik matraslar</h3>
                  <div className='d-flex'>
                    <p className='skidka'>400 000 </p><span>so'mdan /kv.m</span>
                  </div>
                <p>350 000 <span>so'mdan /kv.m</span></p>
                <Link to='/ortopedik_matraslar'>
                  <button>Ba'tafsil ma’lumot</button>  
                </Link>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={anatomik} alt="" />
                <h3>Mahsulot nomi</h3>
                  <div className='d-flex'>
                    <p className='skidka'>400 000 </p><span>so'mdan /kv.m</span>
                  </div>
                <p>350 000 <span>so'mdan /kv.m</span></p>
                <Link to='/anatomik_matraslar'>
                  <button>Ba'tafsil ma’lumot</button>  
                </Link>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={besprujina} alt="" />
                <h3>Mahsulot nomi</h3>
                  <div className='d-flex'>
                    <p className='skidka'>400 000 </p><span>so'mdan /kv.m</span>
                  </div>
                <p>350 000 <span>so'mdan /kv.m</span></p>
                <Link to='/purjinasiz_matraslar'>
                  <button>Ba'tafsil ma’lumot</button>  
                </Link>
              </div>
            </div>
          </div>
         

        </div>
      </div>
    </section>
  )
}
