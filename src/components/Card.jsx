import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';

const Card = ({ photo, price }) => {
  return (
    <div className="min-w-[20rem] shadow-md">
      <div className="relative">
        <img src={photo} alt={price} className="rounded-t-[0.3rem]" />
        <div className="absolute bottom-2 right-2 text-white text-[50px] group cursor-pointer">
          <AiOutlineHeart />
          <AiTwotoneHeart className="text-red-500/40 absolute top-0 hidden group-hover:flex duration-200 ease-out" />
        </div>
        <div className="absolute top-3 left-3 bg-[#1a52b8] text-white px-3 py-[2px] rounded-[0.5rem] text-[12px] ">
          <p>New</p>
        </div>
      </div>
      <div className="mt-2 ml-4 text-[15px] pb-2">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-600 rounded-full ml-1 mr-3"></div>
          <p>Single family house</p>
        </div>

        <p className="text-[26px] font-bold">{price}</p>
        <div className="gap-x-2">
          <div className="flex">
            <span className="font-bold pr-1">5</span>bed
            <span className="font-bold pr-1 pl-1">3</span>bath
            <span className="font-bold pr-1 pl-1">3,747</span>sqft
            <span className="font-bold pr-1 pl-1">8,423</span>sqft lpt
          </div>
          <p>1526 Poplar Drive</p>
          <p>Fort Myers, FL 33913</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
