import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import img from '../images/faq.jpg'

export default function Faq() {
  return (
    <section className='Faq'>
      <div className="container">
        <div className="row">
          <div className="faq-img col-md-6">
            <img src={img} alt="" />
          </div>
            
          <div className="faq-acardion col-md-6">
            <h2>Tez-tez so'raladigan savollar</h2>

         

            <Accordion className='faq-acardion__acardion mb-2'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='acardion-icon'/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='acardion-tittle'>To'shak balandligi qancha bo'lgani yaxshiroq ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='acardion-info'>
                Doimiy to'shak uchun siz 15 sm dan kam bo'lmagan matrasni tanlashingiz kerak, aks holda u umurtqa pog'onasini ortopedik qo'llab-quvvatlay olmaydi. Ko'pincha xaridorlar 20-30 sm balandlikdagi modellarni tanlaydilar.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className='faq-acardion__acardion mb-2'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='acardion-icon'/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='acardion-tittle'>Agar to'shak mos kelmasa nima qilish kerak?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='acardion-info'>
                Ishlatilmagan va asl sellofan o‘ramida bo‘lgan yangi mahsulot almashtirilishi mumkin. Bizning maslahatimiz: to'shakni olgandan so'ng, o'ramni darhol olib tashlamang. To'shakni birinchi navbatda to'shakka qo'ying va u siz uchun to'g'ri o'lchamda ekanligiga ishonch hosil qiling. Keyin yotib, tanlangan qattiqlik darajasi sizga mos kelishini tekshiring. To'shak sizning kutganingizga mos kelishini tekshirib ko'rsangiz va u sizga mos kelishiga ishonch hosil qilsangiz, o'ramni olib tashlang.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className='faq-acardion__acardion mb-2'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='acardion-icon'/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='acardion-tittle'>Qattiqlikni qanday tanlsh kerak ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='acardion-info'>
                O'zingizning didingizga e'tibor qarating va vaznni hisobga oling. Voyaga etgan sog'lom odam o'zi yoqtirgan har qanday qattiqlikdagi to'shakda uxlashi mumkin. Agar tanlov qilish siz uchun qiyin bo'lsa, universal o'rta qattiqlik modelini oling. Yaxshi variant - tomonlarning har xil qattiqligi bo'lgan modellar. Siz kayfiyatingizga qarab matrasni ag'darishingiz va yotoqning qattiqligini o'zgartirishingiz mumkin
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className='faq-acardion__acardion mb-2'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='acardion-icon'/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='acardion-tittle'>To'shakning asosiy vazifasi ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='acardion-info'>
                  To'shakning asosiy vazifasi dam olish vaqtida tananing to'g'ri holatini ta'minlashdir. Natijada, uyqu sifati sezilarli darajada yaxshilanadi, boshqacha aytganda, matrasning asosiy vazifasi qulay uyquni ta'minlashdir. Qulay uyqu bizga kamroq vaqt ichida etarlicha uxlash imkonini beradi.
                </Typography>
              </AccordionDetails>
            </Accordion>

           
          </div>
        </div>

        
      </div>
    </section>
  )
}
