import React from 'react'
import img from '../images/contactform.jpg'

export default function ContactForm() {
  return (
    <section className='ContactForm'>
      <div className="container">
        <div className="contactform-body">
          <form className='contact-form row' action="">
            <h3>Buyurtma xaqida xabar qoldiring</h3>
            <input type="text" className='col-md-8 mb-3' placeholder='Ismingizni kiriting' />
            <input type="text" className='col-md-8 mb-4' placeholder='Telefon raqamingizni kiriting' />
            <button>Jo'natish</button>
          </form>

          <img src={img} alt="" />
        </div>
      </div>
    </section>
  )
}
