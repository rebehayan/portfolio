import React, { useEffect, useState } from "react";
import { post, update } from "../utils/supa.js";

const today = new Date().toISOString().split("T")[0];

export default function Update() {
  const [getList, setGetList] = useState([]);
  const [dataObj, setDataObj] = useState({
    title: "",
    start: "",
    end: "",
    client: "",
    company: "",
    role: "",
  });

  const handleList = async () => {
    const list = await update();

    // 최신순 정렬
    const sortedList = list.sort((a, b) => new Date(b.start) - new Date(a.start));

    setGetList(sortedList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 입력값 공백 제거
    const cleanedData = Object.fromEntries(Object.entries(dataObj).map(([key, value]) => [key, value.trim()]));

    // 날짜 유효성 검사
    if (new Date(cleanedData.start) > new Date(cleanedData.end)) {
      alert("시작일은 종료일보다 이후일 수 없습니다.");
      return;
    }

    await post(cleanedData);
    await handleList();

    setDataObj({
      title: "",
      start: "",
      end: "",
      client: "",
      company: "",
      role: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 핵심기술 checkbox로 표기

    setDataObj((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    handleList();
  }, []);

  return (
    <div className="area">
      <div>
        <h2 className="">Update</h2>
        <form className="post-education" onSubmit={handleSubmit}>
          <input type="text" name="title" required placeholder="강좌명" value={dataObj.title} onChange={handleChange} />
          <input type="date" name="start" required placeholder="시작일" value={dataObj.start || today} onChange={handleChange} />
          <input type="date" name="end" required placeholder="종료일" value={dataObj.end || today} onChange={handleChange} />
          <input type="text" name="client" required placeholder="고객사" value={dataObj.client} onChange={handleChange} />
          <input type="text" name="company" required placeholder="소속사" value={dataObj.company} onChange={handleChange} />
          <input type="text" name="role" required placeholder="역할" value={dataObj.role} onChange={handleChange} />
          <button type="submit">등록</button>
        </form>
        <p className="text-right mt-10 mb-3">2024년까지의 개강,종강일(day)는 정확하지 않습니다.</p>
        <table className="table-type1">
          <caption></caption>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>강좌명</th>
              <th>개강일</th>
              <th>종강일</th>
              <th>고객사</th>
              <th>소속사</th>
              <th>역할</th>
            </tr>
          </thead>
          <tbody>
            {getList.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td>{item.client}</td>
                <td>{item.company}</td>
                <td>{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
