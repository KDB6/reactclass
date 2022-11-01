import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderText = {
  brand: "Brand",
  title: "22AW Lookbook",
  p: "포터리는 현대사회에 알맞는 유니폼을 제안하고자 합니다.",
  btnMore: "Read more",
  btnSite: "Site"
}


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
                <span>{sliderText.brand}</span>
                <h3>{sliderText.title}</h3>
                <p>
                  {sliderText.p}
                </p>
                <div className="btn">
                    <a href="/">{sliderText.btnMore}</a>
                    <a href="/" className="black">{sliderText.btnSite}</a>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="desc">
                <span>{sliderText.brand}</span>
                <h3>{sliderText.title}</h3>
                <p>
                  {sliderText.p}
                </p>
                <div className="btn">
                    <a href="/">{sliderText.btnMore}</a>
                    <a href="/" className="black">{sliderText.btnSite}</a>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="desc">
                <span>{sliderText.brand}</span>
                <h3>{sliderText.title}</h3>
                <p>
                  {sliderText.p}
                </p>
                <div className="btn">
                    <a href="/">{sliderText.btnMore}</a>
                    <a href="/" className="black">{sliderText.btnSite}</a>
                </div>
            </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      );
}

export default Slider