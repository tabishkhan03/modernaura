"use client";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CatalogSwiperSection() {
  return (
    <>
      <div className="py-8 px-4 lg:py-28">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Image
              src="/image/swiper1.jpg"
              alt="LOGO"
              width={520}
              height={220}
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/image/swiper2.jpg"
              alt="LOGO"
              width={520}
              height={220}
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/image/swiper3.jpg"
              alt="LOGO"
              width={520}
              height={220}
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/image/swiper4.jpg"
              alt="LOGO"
              width={520}
              height={220}
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/image/swiper5.jpg"
              alt="LOGO"
              width={520}
              height={220}
              className="w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
