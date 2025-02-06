import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3hxa8vz", "template_xwupoce", form.current, {
        publicKey: "2s58JC7h0aOQhg3kc",
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
