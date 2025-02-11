import React, { useEffect, useState } from "react";
import { projects } from "../data/portfolio";
import { useTitleHook } from "../utils/useTitleHook";
import PortfolioDetail from "../components/Portfolio/PortfolioDetail";
import PortfolioList from "../components/Portfolio/PortfolioList";
import PortfolioSearch from "../components/Portfolio/PortfolioSearch";

export default function Portfolio() {
  const [detailID, setDetailID] = useState();
  const [toggleList, setToggleList] = useState(false);
  const [filterDataList, setFilterDataList] = useState(projects);
  const [isKeyword, setIsKeyword] = useState("");

  const handleGetID = (id) => {
    setDetailID((prevID) => (prevID === id ? prevID : id));
    setToggleList((prev) => (prev === id ? !prev : true));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const getKeyword = formData.get("search").trim();
    setIsKeyword(getKeyword);

    handleYear(undefined, getKeyword); // 최신 검색어를 바로 전달
  };

  const handleYear = (getYear = "전체보기", keyword = isKeyword) => {
    const filterYear = getYear != "전체보기" ? projects.filter((item) => item.startDate.slice(0, 4) === getYear) : projects;
    const searchKeyword = keyword ? filterYear.filter((item) => item.name.includes(keyword)) : filterYear;

    setFilterDataList((prevFilter) => (prevFilter === searchKeyword ? prevFilter : searchKeyword));
  };

  const selectedProject = projects.find((item) => item.id === detailID);
  useTitleHook();

  useEffect(() => {
    handleYear();
  }, [isKeyword]);

  return (
    <div className="portfolio">
      <div className="area">
        <PortfolioSearch handleYear={(year) => handleYear(year)} handleSearch={handleSearch} />
      </div>
      <div className="area">
        <div className={`portfolio-wrap ${toggleList ? "show" : ""}`}>
          <PortfolioList projectList={filterDataList} handleGetID={(id) => handleGetID(id)} />
          {selectedProject && <PortfolioDetail toggle={toggleList} projectInfo={selectedProject} onClose={() => setToggleList(false)} />}
        </div>
      </div>
    </div>
  );
}
