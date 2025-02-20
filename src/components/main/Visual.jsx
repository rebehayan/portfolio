import React, { forwardRef } from "react";
import Follow from "./Follow";
import visualImage from "../../assets/visual.jpg";
import { TfiArrowRight } from "react-icons/tfi";
import { HiArrowLongRight } from "react-icons/hi2";

const Visual = forwardRef(({ childrenRef }, ref) => {
  return (
    <section className="area" ref={ref}>
      <div className="grid mobile:grid-cols-1 tablet:grid-cols-[min-content_1.5fr_1fr] gap-x-30">
        <Follow ref={childrenRef} />
        <div className="text1 font-[teko] font-bold mobile:text-[8vw] mobile:leading-[0.7] tablet:text-[8rem] tablet:leading-26 uppercase mobile:mt-10 tablet:mt-0">
          <div>Bringing</div>
          <div>Ideas</div>
          <div>to Life</div>
          <div>with Code &</div>
          <div>Creativity</div>
        </div>
        <div className="text2 font-normal text-base font-[base] break-keep mobile:w-auto tablet:w-[28rem] tablet:justify-self-end  mobile:mt-5 tablet:mt-0">
          <TfiArrowRight className="mobile:hidden tablet:block w-40 h-40 rotate-45 -translate-x-7 text-gray-200 mb-10 break-keep" />
          <p>
            실무와 최신 기술이 만나는 프론트엔드, 웹퍼블리싱 교육,
            <br /> 미래를 선도하는 개발자로 성장하세요
          </p>
          <div className="mt-5">
            <a href="https://smartstore.naver.com/rebehayan" target="_blank" className="btn-goto">
              <span data-text="오프라인강의 신청">오프라인강의 신청</span>
              <HiArrowLongRight />
            </a>
          </div>
        </div>
        <div className="image col-span-full mobile:mt-10 tablet:-mt-15 -z-10  mobile:h-[30vw] tablet:h-[40rem] overflow-hidden">
          <img src={visualImage} alt="" className="w-full object-cover" />
        </div>
      </div>
    </section>
  );
});

export default Visual;
