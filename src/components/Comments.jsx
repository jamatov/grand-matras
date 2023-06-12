import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

import img1 from '../images/comment1.svg'
import img2 from '../images/comment2.jpg'
import img3 from '../images/comment3.jpg'


import star from '../images/icons/star.svg'

export default function Comments() {
  return (
    <section className="Comments">
      <div className="container">
        <h2>Mijozlarimizning fikrlari</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            736: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card">
              <div className="card-body">
                <div className="d-flex">
                  <img src={img1} alt="" />

                  <div>
                    <p>Aziz</p>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>

                <p className="comment-info">
                  Men Grand Matrasdan ikkita matras sotib oldim. Biri o'zim uchun, biri mehmon xonasi uchun. Ikkala matras ham o'z vaqtida yetkazib berildi va juda yaxshi qadoqlangan.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="card-body">
                <div className="d-flex">
                  <img src={img1} alt="" />

                  <div>
                    <p>Aziz</p>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>

                <p className="comment-info">
                  Men Grand Matrasdan ikkita matras sotib oldim. Biri o'zim uchun, biri mehmon xonasi uchun. Ikkala matras ham o'z vaqtida yetkazib berildi va juda yaxshi qadoqlangan.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="card-body">
                <div className="d-flex">
                  <img className="person-image" src={img2} alt="" />

                  <div>
                    <p>Husniddin</p>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>

                <p className="comment-info">
                  Men "Grand Matras" dan matras sotib oldim sifatiga gap bo'lishi mumkun emas hodimlar hushmuomala va o'z ishlarini ustasi ekan barchaga tavsiya qilaman.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="card-body">
                <div className="d-flex">
                  <img className="person-image" src={img3} alt="" />

                  <div>
                    <p>Mirsodiq</p>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>

                <p className="comment-info">
                  Ushbu matras bilan bo'lgan tajribam juda ijobiy bo'ldi. U ideal qattiqlikka ega va har qanday vazn va balandlikdagi odamlar uchun javob beradi. Bundan tashqari, bu haqiqatan ham qulay va to'liq va sog'lom uyquga yordam beradi.
                </p>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  );
}