import { checkIcon } from '../../assets/images';

const Plan = ({ data }) => {
  const { title, price, advantages } = data;

  return (
    <div className="rounded-2xl py-[37px] px-[39px] bg-[#1C1C1C] flex flex-col items-center">
      <div className="mb-[26px]">
        <span className="text-[22px] font-[Inter] text-[#A6A6A6]">{`${title}/`}</span>
        <span className="text-[14px] font-[Inter] text-[#A6A6A6]">month</span>
      </div>
      <div className="text-[30px] font-extrabold font-[Inter] text-white mb-[53px]">{price}</div>
      <div className="flex flex-col mb-[53px]">
        {advantages.map((item, index) => (
          <div key={`adv-${index}`} className="flex items-center gap-4 mb-4">
            <img src={checkIcon} alt="" className="w-4 h-4" />
            <span className="text-lg font-[Inter] font-extralight text-white leading-[normal]">{item}</span>
          </div>
        ))}
      </div>
      <button className="mt-auto w-full py-[10px] rounded bg-btn-active text-[18px] font-semibold text-white hover:bg-btn-hover transition-all duration-300">
        Choose a Pricing Plan
      </button>
    </div>
  );
};

export default Plan;
