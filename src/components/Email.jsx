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
      <fieldset className="grid justify-start gap-5">
        <legend>문의하기</legend>
        <label htmlFor="name" className="-mb-4">
          이름
        </label>
        <input type="text" id="name" name="user_name" required className="border-2 border-gray-400" />
        <label htmlFor="email" className="-mb-4">
          이메일
        </label>
        <input type="email" id="email" name="from_name" required className="border-2 border-gray-400" />
        <label htmlFor="message" className="-mb-4">
          문의사항
        </label>
        <textarea name="message" id="message" required className="border-2 border-gray-400 resize-y" />
        <input type="submit" value="이메일 문의하기" className="border-2 border-gray-400" />
      </fieldset>
    </form>
  );
};
