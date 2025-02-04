import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { formatNumber } from "./formatNumber.js";

const AnimatedNumber = ({ end = 1000, duration = 2, delay = 0, isActive }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;
    gsap.to(numberRef.current, {
      textContent: end, // 목표 숫자
      duration: duration, // 애니메이션 지속 시간
      delay: delay,
      ease: "power1.out",
      snap: { textContent: 1 }, // 정수로 변환
      onUpdate: function () {
        const rawValue = this.targets()[0].textContent; // 현재 애니메이션 값
        numberRef.current.innerText = formatNumber(Math.round(rawValue)); // ✅ `formatNumber` 적용
      },
    });
  }, [isActive, end, duration]);

  return (
    <strong ref={numberRef} className="mobile:text-7xl tablet:text-9xl leading-[1]">
      0
    </strong>
  );
};

export default AnimatedNumber;
