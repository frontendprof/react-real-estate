import React from 'react';

const NavBtn = ({ title, border, underline }) => {
  return (
    <div>
      <li className="relative group text-[14px] whitespace-nowrap">
        <button className={`px-2 ${border}`}>{title}</button>
        <div
          className={`absolute group-hover:flex hidden h-1 w-full bg-[#e20112] ${
            underline ? underline : '-bottom-[1.1rem]'
          } `}
        ></div>
      </li>
    </div>
  );
};

export default NavBtn;
