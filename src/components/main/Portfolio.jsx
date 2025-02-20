import React, { forwardRef } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Feedback } from "../../data/feedback";

const Portfolio = forwardRef((_, ref) => {
  return (
    <section className="area feedback" ref={ref}>
      <div>
        <h2 className=" mobile:text-3xl tablet:text-6xl font-[base] font-bold">
          함께한 여정,
          <br />
          그리고 솔직한 이야기
        </h2>
        {/* <ul className="grid mobile:grid-cols-[auto-fit_minmax(8rem,1fr)] tablet:grid-cols-5 border-t-[1px] border-l-[1px] border-gray-200 text-center mt-10">
          <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">
            <div>Samsung</div>
          </li>
          <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">
            <div>Samsung</div>
          </li>
          <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">
            <div>Samsung</div>
          </li>
          <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">
            <div>Samsung</div>
          </li>
          <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">
            <div>Samsung</div>
          </li>
          <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">
            <div>Samsung</div>
          </li>
          <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">
            <div>Samsung</div>
          </li>
          <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">
            <div>Samsung</div>
          </li>
          <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">
            <div>Samsung</div>
          </li>
          <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">
            <div>Samsung</div>
          </li>
        </ul> */}
        <Swiper modules={[Autoplay, Navigation, Pagination]} navigation pagination={{ clickable: true }} autoplay={{ delay: 3000, disabledOnInteraction: false }}>
          {Feedback.map(({ avatar, job, message, name }, index) => (
            <SwiperSlide key={index}>
              <div className="text-center mt-20 slide">
                <FaQuoteRight className="mx-auto w-10 h-10" />
                <pre className="font-[base] font-light text-gray-600 my-5 mobile:text-base tablet:text-base">{message}</pre>
                <div className="w-20 aspect-square rounded-full border-[1px] border-stone-300 m-auto mt-5 flex items-center justify-center overflow-hidden">
                  <img src={avatar} alt="" className={avatar.includes("svg") ? "w-15" : "w-14 translate-y-1"} />
                </div>
                <div className="w-min whitespace-nowrap mx-auto">
                  {name}
                  <br />
                  {job}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
});

export default Portfolio;
