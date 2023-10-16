"use client"
// Import Swiper React components
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const TestimonialSlider = () => {
    return (
        <Swiper className="text-center my-20"
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            //   navigation={true}
            modules={[Autoplay, Pagination]}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >

            <SwiperSlide className="text-center">
                <div className="pb-20 px-32">
                    <p className="text-xl text-[#333333]">&quot;healow Aware has been a great experience, and is getting patients more engaged in their healthcare. We&apos;ve seen improvements in our UDS measures.&quot;</p>
                    <div className="mt-12">
                        <span className="block font-semibold text-xl mb-2">Anupriya</span>
                        <p className="text-[#333333]">Practice Manager at Foothills Community Health Center</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="text-center">
                <div className="pb-20 px-32">
                    <p className="text-xl text-[#333333]">&quot;healow Aware has been a great experience, and is getting patients more engaged in their healthcare. We&apos;ve seen improvements in our UDS measures.&quot;</p>
                    <div className="mt-12">
                        <span className="block font-semibold text-xl mb-2">Anupriya</span>
                        <p className="text-[#333333]">Practice Manager at Foothills Community Health Center</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="text-center">
                <div className="pb-20 px-32">
                    <p className="text-xl text-[#333333]">&quot;healow Aware has been a great experience, and is getting patients more engaged in their healthcare. We&apos;ve seen improvements in our UDS measures.&quot;</p>
                    <div className="mt-12">
                        <span className="block font-semibold text-xl mb-2">Anupriya</span>
                        <p className="text-[#333333]">Practice Manager at Foothills Community Health Center</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default TestimonialSlider