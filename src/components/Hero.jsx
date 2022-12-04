import hpHero from '../assets/hp-hero.webp';
import HeroBtn from './HeroBtn';

import { RiSearchLine } from 'react-icons/ri';

const Hero = () => {
  const buttons = [
    { title: 'BUY', underline: 'bg-[#e20112]' },
    { title: 'RENT' },
    { title: 'SELL' },
    { title: 'PRE-APPROVAL' },
    { title: 'JUST SOLD', css: 'hidden sm:block' },
    { title: 'HOME VALUE', css: 'hidden sm:block' },
  ];
  return (
    <div className="h-[25rem] sm:h-[27rem] flex bg-red-400 overflow-hidden">
      <div className="absolute w-full z-20">
        <div className="bg-gray-900/05 absolute z-10 w-full h-[25rem]"></div>
        <img
          src={hpHero}
          alt="Houses"
          className="object-cover w-full h-[25rem] sm:h-[27rem]"
        />
      </div>

      <div className="relative pt-12 flex flex-col items-center w-full z-30">
        <p className="text-white font-bold text-[32px] small:text-[57px]">
          To each their home
        </p>
        <p className="text-white pt-2 sm:pt-0 text-[23px]">
          Let's find a home that's perfect for you
        </p>
        <ul>
          <div className="flex space-x-4 sm:space-x-2 pt-8">
            {buttons.map((but) => (
              <HeroBtn
                title={but.title}
                underline={but.underline}
                css={but.css}
              />
            ))}
          </div>
        </ul>
        {/* input */}
        <div className="mt-9 relative">
          <input
            className="py-4 w-[25rem] sm:w-[37rem] rounded-full pl-5 outline-0 placeholder:text-gray-500 placeholder:text-[20px]"
            type="search"
            placeholder="Address, School, City, Zip or Neighborhood"
          />
          <div className="absolute bg-[#e20112] rounded-full w-[2.7rem] h-[2.7rem] top-[0.4rem] right-1 flex items-center justify-center">
            <RiSearchLine className="text-white text-[1.5rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
