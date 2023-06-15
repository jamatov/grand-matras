import React from 'react'
import call from '../images/icons/call.svg'
import mail from '../images/icons/mail.svg'
import telegram from '../images/icons/telegram.svg'
import instagram from '../images/icons/instagram.svg'
import youtube from '../images/icons/youtube.svg'
import facebook from '../images/icons/facebook.svg'
import location from '../images/icons/location.svg'


export default function Footer() {
  return (
    <footer className='Footer'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <h3>Qo’ng’iroq qiling</h3>
            <a href="tel:+9989977755188">
              <img src={call} alt="" /> +9989 97 775 51 88
            </a>
            <a href="tel:+9989977755188">
              <img src={call} alt="" /> +9989 97 775 51 88
            </a>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <h3>Bizga yozing</h3>

            <a target='_blank' href="">
              <img src={mail} alt="" /> Grandmatras@gmail.com
            </a>

            <a target='_blank' href="https://t.me/Davron19820">
              <img src={telegram} alt="" /> Telegram
            </a>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <h3>Obuna bo’ling</h3>

            <a target='_blank' href="https://www.instagram.com/grand_matras1/">
              <img src={instagram} alt="" /> Instagram
            </a>

            <a target='_blank' href="https://www.facebook.com/profile.php?id=100056162767852">
              <img src={facebook} alt="" /> Facebook
            </a>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <h3>Manzil</h3>
            <a target='_blank' href="https://maps.windows.com/?form=WNAMSH&collection=point.41.392623_69.24397_Point">
              <img src={location} alt="" /> Yoshlik street, Tashkent, Tashkent, Tashkent, Uzbekistan 
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
