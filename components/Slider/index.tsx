import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './Slider.module.css'
import { dados } from '../../helpers/dados';

type Props = {
  setModalStatus: (setModalStatus: boolean) => void;

  onClick: (item: any) => void

}


type Props2 = {
  titleProject: string;
  image: string;
  description: string;
}


// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

const Slider = ({ setModalStatus, onClick }: Props) => {
  // console.log(item)

  const handleClick = (item:any) => {
    onClick(item)
    setModalStatus(true)
    // console.log(item)
  }

  return (
    <div className={styles.Container} >
      <Swiper

        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          // rotate: 50,
          rotate: 0,
          stretch: 0,
          depth: 100,
          // modifier: 1,
          modifier: 2.5,
          slideShadows: false,
        }}
        // pagination={true}
        pagination={{ el: '.swiper-pagination', clickable: true }}

        modules={[EffectCoverflow, Pagination, Navigation]}

        // className="mySwiper"
        className={styles.swiper} //swiperContainer

      >

        {dados.map((item, index) => (
          <SwiperSlide className={styles.swiperSlide} key={index}  >
            <div className={styles.teste} onClick={() =>handleClick(item)} >
              <img src={item.image} height={300} width={300} />
              <div className={styles.title}>
                <p >{item.titleProject}</p>
              </div>
            </div>

          </SwiperSlide>
        ))}


      </Swiper>
    </div>
  );
}


export default Slider;