import React from "react";
import image from "../assets/visual.jpg";
import { getLatestVideos } from "../utils/youtube.js";

export default function About() {
  const last = getLatestVideos(5).then((data) => {
    console.log(data);
  });

  return (
    <main>
      <section className="area">
        <div>
          <div className="font-[base] font-bold text-5xl text-center break-keep leading-[1.1]">
            취미로 시작한 길이 현재 저의 직업이 되었고,
            <br />그 과정에서 멘토 없이 성장하며 수많은 시행착오를 겪었습니다.
            <br />
            이러한 경험을 바탕으로, 후배들이 잘못된 학습으로
            <br />
            시간을 낭비하지 않도록 돕는 것이 저의 목표입니다.
          </div>
          <div className="flex mx-auto mt-10 w-min font-[base] font-light text-sm items-start gap-5 ">
            <div className="flex items-center gap-5">
              <h2 className="whitespace-nowrap font-medium">01. 이곳에 오기까지</h2>
              <span className="w-20 border-t-[1px] border-black"></span>
            </div>
            <p className="break-keep  tablet:w-[30rem]">
              저는 실무 경험이 탄탄한 강의가 가장 가치 있다고 믿습니다. 그래서 강의뿐만 아니라 실무를 병행하며 끊임없이 배우고 성장하고 있습니다. 이러한 노력으로 여러분이 더 빠르고 효율적으로 성장할
              수 있도록 최선을 다하겠습니다.
            </p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-[2.5fr_1fr_1fr] gap-3 my-20">
        <div className="col-start-1 col-end-2 row-start-1 row-end-3">
          <img src={image} className="w-full h-[80vh] object-cover" alt="" />
        </div>
        <div>
          <img src={image} className="w-full h-full object-cover" alt="" />
        </div>
        <div>100+</div>
        <div>We Hepled</div>
        <div>
          <img src={image} className="w-full h-full object-cover" alt="" />
        </div>
      </section>
    </main>
  );
}
