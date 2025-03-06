import React, { useEffect, useState } from "react";
import { post, update } from "../utils/supa.js";

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

    setGetList(list);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await post(dataObj);
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

    // 종료일이 시작일보다 작으면안됨
    // 시작일이 종료일보다 크면안됨
    // 핵심기술 checkbox로 표기
    //trim 해야함

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
          <input type="date" name="start" required placeholder="시작일" value={dataObj.start} onChange={handleChange} />
          <input type="date" name="end" required placeholder="종료일" value={dataObj.end} onChange={handleChange} />
          <input type="text" name="client" required placeholder="고객사" value={dataObj.client} onChange={handleChange} />
          <input type="text" name="company" required placeholder="소속사" value={dataObj.company} onChange={handleChange} />
          <input type="text" name="role" required placeholder="역할" value={dataObj.role} onChange={handleChange} />
          <button type="submit">등록</button>
        </form>
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
