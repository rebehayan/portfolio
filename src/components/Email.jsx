import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const publickeyID = import.meta.env.VITE_EMAIL_PUBLICKEY;

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publickeyID,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <fieldset className="grid justify-start gap-5 grid-cols-2">
        <legend className="hidden">문의하기</legend>
        <div className="grid">
          <label htmlFor="name" className="font-[base] text-base font-light">
            이름
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            autoComplete="name"
            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900"
          />
        </div>
        <div className="grid">
          <label htmlFor="email" className="font-[base] text-base font-light">
            이메일
          </label>
          <input
            type="email"
            id="email"
            name="from_name"
            required
            autoComplete="email"
            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900"
          />
        </div>
        <div className="col-span-full grid">
          <label htmlFor="message" className="font-[base] text-base font-light">
            문의사항
            <span className="block text-sm text-gray-700 mb-1">첨부파일은 클라우드 링크나 Notion등의 자료 링크로 보내주시면 감사하겠습니다.</span>
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 h-40 resize-y"
          />
        </div>
        <input
          type="submit"
          value="문의하기"
          className="rounded-md cursor-pointer bg-cyan-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 justify-self-start"
        />
      </fieldset>
    </form>
  );
};
