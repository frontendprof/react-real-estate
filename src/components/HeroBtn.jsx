import React from 'react';

const HeroBtn = ({ title, underline, css }) => {
  return (
    <div className={`relative group ${css}`}>
      <div className="text-white font-semibold px-1.5 text-[14px]">
        <button>{title}</button>
      </div>
      <div
        className={`w-full duration-200 ease-out h-[2.5px] absolute group-hover:bg-[#e20112] ${underline}`}
      ></div>
    </div>
  );
};

export default HeroBtn;
