import React, { useEffect, useRef, useState } from "react";
import image from "../../assets/visual.jpg";
import { carrerCountData } from "../../data/carrerCount";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedNumber from "../../utils/AnimatedNumber";
import video from "../../assets/educate.mp4";
import { HiArrowLongRight } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);
const year = new Date().getFullYear();
const career = year.toString().slice(2, 4);

const Introduce = () => {
  const introRef = useRef();
  const countRef = useRef();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: introRef.current,
        start: "top center",
        onEnter: () => setIsActive(true),
      },
    });
    const title = introRef.current.querySelector("p");
    const text = introRef.current.querySelector(".text");
    const image = introRef.current.querySelectorAll(".img");
    const countLi = countRef.current.querySelectorAll("li");

    timeline
      .fromTo(
        title,
        {
          x: -30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
      .fromTo(
        text,
        {
          x: 30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
      .fromTo(
        image,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
        }
      )
      .fromTo(
        countLi,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
        }
      );
  }, []);

  return (
    <>
      <section className="area" ref={introRef}>
        <div>
          <p className="font-[base] font-medium mobile:text-3xl tablet:text-6xl mobile:leading-[1.2] tablet:leading-[1.2] break-keep">
            웹 퍼블리셔와 프론트엔드 개발자를 위한 <span className="font-extrabold text-orange-400">실용적이고 체계적인</span> 교육을 지원합니다. 트렌드에 강하고, 실무에 바로 적용하는 당신의{" "}
            <span className="font-extrabold">커리어</span>를 한 단계
            <span className="font-extrabold">업그레이드</span>하세요
          </p>
          <div className="grid grid-cols-2 tablet:gap-y-20 gap-x-10 mobile:mt-10 tablet:mt-20">
            <div className="mobile:hidden tablet:block"></div>
            <div className="text text-base font-[base] mobile:w-full tablet:w-[30rem] break-keep mobile:col-span-full tablet:col-span-1  mobile:mb-10  tablet:mb-0">
              바로 현장에서 써먹는
              <br /> 실무 스킬 지금 온라인 강의에서 만나보세요
              <div className="mt-5">
                <a href="" className="btn-goto">
                  <span data-text="온라인강의 둘러보기">온라인강의 둘러보기</span>
                  <HiArrowLongRight />
                </a>
              </div>
            </div>
            <div className="justify-self-end img">
              <video src={video} muted loop autoPlay className="aspect-[16/9] w-[20rem] object-cover"></video>
            </div>
            <div className="img">
              <img src={image} alt="" className="mobile:aspect-[3/4] tablet:aspect-[9/16] w-[20rem] object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="area" ref={countRef}>
        <div>
          <ul className="font-[teko] mobile:grid mobile:grid-cols-1 mobile:gap-3 tablet:flex tablet:justify-between translate-y-3">
            {carrerCountData.map(({ number, title, kor }, index) => (
              <li key={index} className="flex items-end gap-4 hover-kor">
                <AnimatedNumber end={number} delay={1.5} isActive={isActive} />
                <span data-kor={kor}>{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Introduce;
