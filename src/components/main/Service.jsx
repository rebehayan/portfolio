import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { MdOutlineOndemandVideo, MdOutlineSupervisedUserCircle } from "react-icons/md";
import { TbCube3dSphere } from "react-icons/tb";

export default function Service() {
  return (
    <section className="area">
      <div className="grid tablet:grid-cols-2">
        <h2 className="font-[teko] mobile:text-4xl tablet:text-7xl mobile:leading-[1] font-extrabold text-pretty mobile:w-full tablet:w-96 uppercase">we make design that lead and inspire</h2>
        <ul className="mobile:mt-10 tablet:mt-0">
          <li className="mobile:pb-5 tablet:pb-10">
            <a href="" className="grid mobile:grid-cols-[min-content_1fr] tablet:grid-cols-[min-content_1fr_min-content] gap-x-5 gap-y-1">
              <TbCube3dSphere className="w-15 h-15 mobile:row-[1/4] tablet:row-[1/3]" />
              <strong className="font-[teko] text-3xl uppercase block">Development</strong>
              <div className="w-[90%]">
                &quot;아이디어를 현실로 만드는 개발 전문가&quot;
                <br /> 최신 웹 기술과 프레임워크를 활용하여 실용적인 프로젝트를 구축하고 확장합니다. 완성도 높은 코드와 최적화된 성능으로 더 나은 웹 경험을 제공합니다.
              </div>
              <span className="tablet:col-[3/4] tablet:row-[1/3] self-center">
                <HiArrowRight />
              </span>
            </a>
          </li>
          <li className="border-t-[1px] border-gray-300 mobile:py-5 tablet:py-10">
            <a href="" className="grid mobile:grid-cols-[min-content_1fr] tablet:grid-cols-[min-content_1fr_min-content] gap-x-5 gap-y-1">
              <MdOutlineOndemandVideo className="w-15 h-15 mobile:row-[1/4] tablet:row-[1/3]" />
              <strong className="font-[teko] text-3xl uppercase block">Youtube</strong>
              <div className="w-[90%]">
                &quot;배우고, 공유하고, 성장하는 개발 콘텐츠&quot;
                <br /> 웹 퍼블리싱과 프론트엔드 개발에 대한 실무 중심의 강의와 인사이트를 전달합니다. 800개 이상의 강의 영상과 튜토리얼을 통해 누구나 쉽게 배우고 성장할 수 있도록 돕습니다.
              </div>
              <span className="tablet:col-[3/4] tablet:row-[1/3] self-center">
                <HiArrowRight />
              </span>
            </a>
          </li>
          <li className="border-t-[1px] border-gray-300  mobile:py-5 tablet:py-10">
            <a href="" className="grid mobile:grid-cols-[min-content_1fr] tablet:grid-cols-[min-content_1fr_min-content] gap-x-5 gap-y-1">
              <MdOutlineSupervisedUserCircle className="w-15 h-15 mobile:row-[1/4] tablet:row-[1/3]" />
              <strong className="font-[teko] text-3xl uppercase block">Education</strong>
              <div className="w-[90%]">
                &quot;실무에서 바로 활용하는 웹 퍼블리싱 & 프론트엔드 강의&quot;
                <br /> 23년 이상의 경험을 바탕으로, 실무에 최적화된 커리큘럼을 제공합니다. 단순한 이론이 아닌 실제 프로젝트 기반 학습을 통해 더 빠르고 효과적으로 성장할 수 있습니다.
              </div>
              <span className="tablet:col-[3/4] tablet:row-[1/3] self-center">
                <HiArrowRight />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
