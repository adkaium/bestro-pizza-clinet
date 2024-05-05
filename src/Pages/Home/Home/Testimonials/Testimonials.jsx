import TextHeading from "../../../../Components/TextHeading/TextHeading";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import {Navigation} from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
    const [reviwes, setReviwes] = useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:5000/review")
          .then((res) => res.json())
          .then((data) => setReviwes(data));
    },[])

  return (
    <section className="mb-5">
      <TextHeading
        subHeding={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></TextHeading>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        {reviwes.map((reviwe) => (
          <SwiperSlide key={reviwe._id}>
            <div className="text-center flex flex-col items-center mx-24 my-16">
              <Rating style={{maxWidth: 180}} value={reviwe.rating} readOnly />
              <p className="p-5">{reviwe.details}</p>
              <h4 className="text-yellow-500">{reviwe.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
