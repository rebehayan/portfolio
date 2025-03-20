import React from "react";
import GNB from "./GNB";
import { RiCloseLargeFill } from "react-icons/ri";
import { useGNB } from "../store/navigation";

export default function SlideMenu() {
  const { open, setGNB } = useGNB();
  return (
    <dialog className="inset-0 w-full h-full bg-white z-[1000] sidebar" open={open}>
      <div className="h-full flex justify-center items-center text-center">
        <GNB />
      </div>
      <form method="dialog" className="absolute right-3 top-3 cursor-pointer">
        <button onClick={() => setGNB(!open)}>
          <RiCloseLargeFill />
        </button>
      </form>
    </dialog>
  );
}
