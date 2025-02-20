import React from "react";

export default function PortfolioDetail({ toggle, projectInfo, onClose }) {
  return (
    <div className={`detail-view ${toggle ? "show" : ""}`}>
      <h2 className="text-lg font-semibold">{projectInfo.name}</h2>
      <p>
        <strong>기간:</strong> {projectInfo.startDate} ~ {projectInfo.endDate}
      </p>
      <p>
        <strong>클라이언트:</strong> {projectInfo.client}
      </p>
      <p>
        <strong>회사:</strong> {projectInfo.company}
      </p>
      <p>
        <strong>기여도:</strong> {projectInfo.contribution}
      </p>
      {projectInfo.url.includes("https") ? (
        <p>
          <strong>URL : </strong>
          <a href={projectInfo.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            {projectInfo.url}
          </a>
        </p>
      ) : (
        <p>
          <strong>URL : </strong>비공개 또는 서비스 종료된 사이트입니다.
        </p>
      )}
      <button type="button" className="absolute right-5 top-5 cursor-pointer" onClick={onClose}>
        Close
      </button>
    </div>
  );
}
