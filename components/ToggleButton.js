"use client";
import { useState } from "react";

export default function ToggleButton() {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div
      className="w-[44px] bg-green-600 rounded-[30px] h-[26px] pt-[3px] px-1"
      onClick={handleToggle}
    >
      <div
        className={`${active ? "active" : ""} w-5 h-5 rounded-full bg-white`}
      ></div>
    </div>
  );
}
