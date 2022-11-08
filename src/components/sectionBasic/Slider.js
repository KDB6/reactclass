import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function Slider(props) {
    return (
      <section id="sliderType" className={`slider__wrap ${props.fonts}`}>
        <div className="slider__inner">
          <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
            pagination={{ clickable: true }} 
            navigation={true} 
            modules={[Autoplay, Navigation, Pagination]} 
            className="mySwiper"
          >
          <SwiperSlide>
            <div className="desc">
                <span>Brand</span>
                <h3>22AW Lookbook</h3>
                <p>
                    포터리는 현대사회에 알맞는 유니폼을 제안하고자 합니다.
                </p>
                <div className="btn">
                    <a href="/">Read more</a>
                    <a href="/" className="black">Site</a>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="desc">
                  <span>Brand</span>
                  <h3>22AW Lookbook</h3>
                  <p>
                      포터리는 현대사회에 알맞는 유니폼을 제안하고자 합니다.
                  </p>
                  <div className="btn">
                      <a href="/">Read more</a>
                      <a href="/" className="black">Site</a>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="desc">
                  <span>Brand</span>
                  <h3>22AW Lookbook</h3>
                  <p>
                      포터리는 현대사회에 알맞는 유니폼을 제안하고자 합니다.
                  </p>
                  <div className="btn">
                      <a href="/">Read more</a>
                      <a href="/" className="black">Site</a>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </section>
      );
}

export default Slider