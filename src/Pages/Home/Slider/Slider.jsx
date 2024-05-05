import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";

import slider1 from '../../../assets/home/slide1.jpg';
import slider2 from '../../../assets/home/slide2.jpg';
import slider3 from '../../../assets/home/slide3.jpg';
import slider4 from '../../../assets/home/slide4.jpg';
import slider5 from '../../../assets/home/slide5.jpg';
import TextHeading from "../../../Components/TextHeading/TextHeading";

const Slider = () => {
  return (
    <div>
      <section className="center">
        <TextHeading
          subHeding={"From 11:00am To 10:00pm"}
          heading={"ORDER ONLINE"}
        ></TextHeading>
      </section>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-6"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />

          <h3 className="text-white text-center -mt-10 font-serif text-4xl">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3 className="text-white text-center -mt-10 font-serif text-4xl">
            PIZZA
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h3 className="text-white text-center -mt-10 font-serif text-4xl">
            SHOUP
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3 className="text-white text-center -mt-10 font-serif text-4xl">
            CAKE
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3 className="text-white text-center -mt-10 font-serif text-4xl">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
