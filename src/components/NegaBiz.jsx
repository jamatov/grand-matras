import React from 'react'
import vhy1 from '../images/icons/vhy1.svg'
import vhy2 from '../images/icons/vhy2.svg'
import vhy3 from '../images/icons/vhy3.svg'
import vhy4 from '../images/icons/vhy4.svg'
import vhy5 from '../images/icons/vhy5.svg'
import vhy6 from '../images/icons/vhy6.svg'

export default function NegaBiz() {
  return (
    <section className='NegaBiz'>
      <div className="container">
        <h2>Nega biz?</h2>
        <div className="row">

         <div className="col-md-4">
            <div className="card-body">
              <img src={vhy3} alt="" />
              <h3>Demokratik narxlar</h3>
              <p>Ishlab chiqarishga joriy etilgan ko'plab texnologiyalar xarajatlarni kamaytirish imkonini beradi, bundan tashqari, mahsulotimizni o'zimiz ishlab chiqaramiz, bu esa narxlarga ta'sir qiladi.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-body">
              <img src={vhy5} alt="" />
              <h3>Xavfsizlik</h3>
              <p>Biz matraslarimiz uchun materiallar va plomba moddalarini diqqat bilan tanlaymiz, shuningdek, faqat tasdiqlangan komponentlar yetkazib beruvchilari bilan hamkorlik qilamiz.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-body">
              <img src={vhy6} alt="" />
              <h3>Pul qiymati</h3>
              <p>Biz pul uchun eng yaxshi qiymati kafolat, chunki biz zanjirdan vositachilarni hisobga olmaganda, o'z narx siyosatimizni shakllantiramiz.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-body">
              <img src={vhy1} alt="" />
              <h3>Bepul o'lchash</h3>
              <p>Mutaxassisimiz siz uchun qulay vaqtda to'shak uchun bepul jo'natish va o'lchashni amalga oshiradi.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-body">
              <img src={vhy4} alt="" />
              <h3> Bepul yetkazib berish</h3>
              <p>Toshkent shahri ichida yetkazib berish bepul. Biz barcha transport xarajatlarini o'z zimmamizga olamiz.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-body">
              <img src={vhy2} alt="" />
              <h3>Tez ishlab chiqarish</h3>
              <p>2 kun ichida buyurtma qilingan matrasni ishlab chiqaramiz.</p>
            </div>
          </div>

          

          

          
          
        </div>
      </div>
    </section>
  )
}
