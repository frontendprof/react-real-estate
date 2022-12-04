import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#2b2b2b] h-[10rem] flex items-center justify-center text-white text-[19px]">
      <h1>@frontendprof &copy; {new Date().getFullYear()} </h1>
    </div>
  );
};

export default Footer;
