import React, { forwardRef } from "react";
import Follow from "./Follow";
import visualImage from "../../assets/visual.jpg";
import { TfiArrowRight } from "react-icons/tfi";
import { HiArrowLongRight } from "react-icons/hi2";

const Visual = forwardRef(({ chilrenRef }, ref) => {
  return (
    <section className="area" ref={ref}>
      <div className="grid mobile:grid-cols-1 tablet:grid-cols-[min-content_1.5fr_1fr] gap-x-30">
        <Follow ref={chilrenRef} />
        <div className="text1 font-[teko] font-bold mobile:text-[8vw] mobile:leading-[0.7] tablet:text-[8rem] tablet:leading-26 uppercase mobile:mt-10 tablet:mt-0">
          <div>Bringing</div>
          <div>Ideas</div>
          <div>to Life</div>
          <div>with Code &</div>
          <div>Creativity</div>
        </div>
        <div className="text2 font-normal text-base font-[base] break-keep mobile:w-auto tablet:w-[28rem] justify-self-end  mobile:mt-5 tablet:mt-0">
          <TfiArrowRight className="mobile:hidden tablet:block w-40 h-40 rotate-45 -translate-x-7 text-gray-200 mb-10 break-keep" />
          <p>프론트엔드 기술은 끊임없이 변화하고 발전하고 있습니다. 우리는 최신 웹 트렌드와 실무 경험을 결합한 교육을 통해, 개발자들이 더 나은 미래를 만들어갈 수 있도록 지원합니다.</p>
          <div className="mt-5">
            <a href="https://smartstore.naver.com/rebehayan" target="_blank" className="btn-goto">
              <span data-text="오프라인강의 신청">오프라인강의 신청</span>
              <HiArrowLongRight />
            </a>
          </div>
        </div>
        <div className="image col-span-full mobile:mt-10 tablet:-mt-15 -z-10">
          <img src={visualImage} alt="" className="w-full mobile:h-[30vw] tablet:h-[40rem] object-cover" />
        </div>
      </div>
    </section>
  );
});

export default Visual;
