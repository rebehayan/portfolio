import React, { forwardRef } from "react";

const Opentalk = forwardRef((_, ref) => {
  return (
    <section className="area" ref={ref}>
      <div>
        <h2 className="text-center text-3xl font-[teko] font-bold uppercase mb-6">🖐OpenTalk</h2>
        <p className="font-[teko] mobile:text-7xl tablet:text-[10rem] uppercase font-extrabold leading-[0.8] text-center tablet:w-[50vw] mx-auto">Would you like to talk with me?</p>
        <div className="text-center relative z-20 grid gap-5">
          <a
            href="http://pf.kakao.com/_xmxhxdcC/chat"
            target="_blank"
            className="mobile:text-md tablet:text-xl transition-all duration-700 hover:text-cyan-800 font-[base] underline underline-offset-4"
          >
            리베하얀과 1:1 오픈톡 Go
          </a>
          <a
            href="https://open.kakao.com/o/gOT0rthe"
            target="_blank"
            className="group mobile:text-md tablet:text-xl transition-all duration-700 hover:text-amber-500 font-[base] underline underline-offset-4"
          >
            구독자 오픈 단체톡
            <span className=" inline-flex group-hover:text-cyan-500 group-hover:w-40 w-0 justify-center overflow-hidden whitespace-nowrap transition-all duration-700">[ PW : hayans2 ]</span> Go
          </a>
        </div>
      </div>
    </section>
  );
});
export default Opentalk;
