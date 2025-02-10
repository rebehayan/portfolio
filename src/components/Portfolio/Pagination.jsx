import React from "react";

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const pagesPerGroup = 5;
  const currentGroup = Math.ceil(currentPage / pagesPerGroup); // 현재 페이지가 속한 그룹
  const startPage = (currentGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; // 범위를 벗어나면 실행하지 않음
    onPageChange(page);
  };
  return (
    <nav className="paging border-t-[1px] border-gray-300 py-10 flex justify-center gap-4">
      <button
        type="button"
        className="cursor-pointer px-3 py-1 rounded bg-gray-200 hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        첫페이지
      </button>
      <button
        type="button"
        className="cursor-pointer px-3 py-1 rounded bg-gray-200 hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        이전페이지
      </button>
      <ol className="flex justify-center gap-4">
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
          <li key={page}>
            <button
              type="button"
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded cursor-pointer ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-400"}`}
            >
              {page}
            </button>
          </li>
        ))}
      </ol>
      <button
        type="button"
        className="cursor-pointer px-3 py-1 rounded bg-gray-200 hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        다음페이지
      </button>

      <button
        type="button"
        className="cursor-pointer px-3 py-1 rounded bg-gray-200 hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        마지막페이지
      </button>
    </nav>
  );
}
