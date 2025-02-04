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
          <p className="font-[base] font-bold mobile:text-3xl tablet:text-6xl mobile:leading-[1.2] tablet:leading-[1] break-keep">
            리베하얀은 <span className="text-gray-300">{career}년 실무 경험</span>을 바탕으로 웹 퍼블리셔와 프론트엔드 개발자를 위한 실용적이고 <span className="text-gray-300">체계적인 교육</span>을
            제공합니다.
          </p>
          <div className="grid grid-cols-2 tablet:gap-y-20 gap-x-10 mobile:mt-10 tablet:mt-20">
            <div className="mobile:hidden tablet:block"></div>
            <div className="text text-base font-[base] mobile:w-full tablet:w-[27rem] break-keep mobile:col-span-full tablet:col-span-1">
              최신 웹 기술과 실무 중심 프로젝트를 통해 현업에서 바로 적용할 수 있는 노하우를 전달하며, 퍼블리싱과 개발의 경계를 허물고 더 나은 웹을 만들어가는 길을 함께합니다. 웹 퍼블리싱과 프론트엔드
              개발을 배우고, 성장하는 여정. 리베하얀과 함께 시작하세요!
              <div className="mt-5">
                <a href="" className="btn-goto">
                  <span data-text="지금 시작하세요.">지금 시작하세요.</span>
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
          <ul className="font-[teko] mobile:grid mobile:grid-cols-2 tablet:flex tablet:justify-between translate-y-3">
            {carrerCountData.map(({ number, title }, index) => (
              <li key={index} className="flex items-end gap-4">
                <AnimatedNumber end={number} delay={1.5} isActive={isActive} />
                <span className="uppercase mobile:text-lg tablet:text-xl w-15 leading-[1] mobile:-translate-y-4 tablet:-translate-y-7">{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
// https://crowdytheme.com/html/arolax/creative-agency.html#

export default Introduce;
