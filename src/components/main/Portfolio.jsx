import React, { forwardRef } from "react";
import { FaQuoteRight } from "react-icons/fa";

const Portfolio = forwardRef((_, ref) => {
  return (
    <section className="area" ref={ref}>
      <div>
        <h2 className=" mobile:text-3xl tablet:text-6xl font-[base] font-bold">
          완성도 높은 프로젝트,
          <br />
          그리고 함께한 사람들의 솔직한 이야기
        </h2>
        <ul className="grid mobile:grid-cols-[auto-fit_minmax(8rem,1fr)] tablet:grid-cols-5 border-t-[1px] border-l-[1px] border-gray-200 text-center mt-10">
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
        </ul>
        <div className="text-center mt-20 slide">
          <FaQuoteRight className="mx-auto w-10 h-10" />
          <p className="font-[base] font-light text-gray-600 my-5 mobile:text-lg tablet:text-xl">
            모든 프로젝트는 단순한 결과물이 아니라, 문제를 해결하고 새로운 가치를 창출하는 과정입니다. <br />
            나와 함께한 개발자, 디자이너, 그리고 협업 파트너들의 피드백이야말로
            <br />
            프로젝트의 성공을 증명하는 가장 강력한 이야기입니다.
            <br />
            디자인과 기능, 사용자 경험까지 균형을 맞춘 프로젝트가 어떻게 완성되었는지,
            <br />
            그리고 어떤 영향을 주었는지 직접 확인해보세요.
          </p>
          <div className="text-left w-min whitespace-nowrap mx-auto">
            Rebehayan
            <br />
            Web Publisher / FE Developer
          </div>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
