// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"fade"}
        navigation={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={require("./image2.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./image 18.png")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./image 17.png")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./image 16.png")} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
