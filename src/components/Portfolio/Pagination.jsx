import React, { useState } from "react";

export default function Pagination({ projectList, currentPage }) {
  const ProjectPerPage = 10;
  const totaPages = Math.ceil(projectList.length / ProjectPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totaPages) return; // 범위를 벗어나면 실행하지 않음
    currentPage(page);
  };
  return (
    <nav className="paging border-t-[1px] border-gray-300 py-10 flex justify-center gap-4">
      <button type="button" className="cursor-pointer">
        이전페이지
      </button>
      <ol className="flex justify-center gap-4">
        {Array.from({ length: totaPages }, (_, i) => (
          <li key={i + 1}>
            <button type="button" onClick={() => handlePageChange(i + 1)} className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-400"}`}>
              {i + 1}
            </button>
          </li>
        ))}
      </ol>
      <button type="button" className="cursor-pointer">
        다음페이지
      </button>
    </nav>
  );
}
