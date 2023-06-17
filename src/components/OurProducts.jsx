import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ortopedik from '../images/ortopedik.jpg'
import anatomik from '../images/anatomik.jpg'
import besprujina from '../images/besprujina.jpg'



export default function OurProducts() {
  const { t } = useTranslation();

  return (
    <section className='OurProducts'>
      <div className="container">
        <h2 className='pruducts-tittle'>{t("ourProducts")}</h2>
        
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
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

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <img src={anatomik} alt="" />
                <h3>Anatomik matraskar</h3>
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

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <img src={besprujina} alt="" />
                <h3>Purjinasiz matraslar</h3>
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
