import React, { forwardRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

const PortfolioDetail = forwardRef(({ projectInfo }, ref) => {
  return (
    <dialog ref={ref} className="detail-view top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed">
      <header className="flex items-end justify-between">
        <h2 className="text-3xl font-semibold">{projectInfo?.name}</h2>
        <form method="dialog" className="text-[0px]">
          <button type="submit" className="cursor-pointer">
            <IoCloseOutline className="w-7 h-7" />
          </button>
        </form>
      </header>
      <div className="mt-5">
        <ul className="grid gap-2">
          <li className="grid grid-cols-[6rem_1fr] gap-2 items-center">
            <strong className="px-2 py-0.5 bg-neutral-100 rounded-md text-sm">기간</strong>
            <div>
              {projectInfo?.startDate} ~ {projectInfo?.endDate}
            </div>
          </li>
          <li className="grid grid-cols-[6rem_1fr] gap-2  items-center">
            <strong className="px-2 py-0.5 bg-neutral-100 rounded-md text-sm">클라이언트</strong>
            <div>{projectInfo?.client}</div>
          </li>
          <li className="grid grid-cols-[6rem_1fr] gap-2  items-center">
            <strong className="px-2 py-0.5 bg-neutral-100 rounded-md text-sm">회사</strong>
            <div>{projectInfo?.company}</div>
          </li>
          <li className="grid grid-cols-[6rem_1fr] gap-2  items-center">
            <strong className="px-2 py-0.5 bg-neutral-100 rounded-md text-sm">기여도</strong>
            <div>{projectInfo?.contribution}</div>
          </li>
          {projectInfo?.url.includes("https") ? (
            <li className="grid grid-cols-[6rem_1fr] gap-2  items-center">
              <strong className="px-2 py-0.5 bg-neutral-100 rounded-md text-sm">URL</strong>
              <div>
                <a href={projectInfo?.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  {projectInfo?.url}
                </a>
              </div>
            </li>
          ) : (
            <li className="grid grid-cols-[6rem_1fr] gap-2  items-center">
              <strong className="px-2 py-0.5 bg-neutral-100 rounded-md text-sm">URL</strong>
              <div>비공개 또는 서비스 종료된 사이트입니다.</div>
            </li>
          )}
        </ul>
      </div>
    </dialog>
  );
});
export default PortfolioDetail;
