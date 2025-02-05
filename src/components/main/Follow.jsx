import React, { forwardRef } from "react";
import SNS from "../SNS.jsx";

const Follow = forwardRef((_, ref) => {
  return (
    <aside ref={ref} className="flex tablet:flex-col items-center gap-3 mobile:col-start-1 mobile:-col-end-1 tablet:col-start-auto tablet:col-end-auto">
      <h2 className=" font-[teko] text-xl  tablet:write-vertical">FOLLOW</h2>
      <span className="mobile:w-14 mobile:h-[1px] tablet:w-[1px] tablet:h-14 bg-gray-200"></span>
      <SNS className={"mobile:flex tablet:grid gap-0.5"} />
    </aside>
  );
});

export default Follow;
