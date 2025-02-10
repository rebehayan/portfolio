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
      {projectInfo.url && (
        <p>
          <a href={projectInfo.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            프로젝트 링크
          </a>
        </p>
      )}
      <button type="button" className="absolute right-5 top-5 cursor-pointer" onClick={onClose}>
        Close
      </button>
    </div>
  );
}
