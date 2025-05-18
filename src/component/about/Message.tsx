import React from "react";
import { MdOutlineFormatQuote } from "react-icons/md";
import Puskole from "../../assets/images/Puskole.png";
import SingleLine from "../../assets/linearts/single_line.png";
import LineWithStyle from "../../assets/linearts/lines_with_style.png";

const Message: React.FC = () => {
  return (
    
    <div className="md:h-[60dvh] lg:min-h-[100dvh]  py-10 px-5 flex justify-center items-center">
  <img
    src={SingleLine}
    className="w-[980px] hidden lg:block h-0.5 absolute top-405 lg:ml-[340px] z-10"
    alt=""
  />
  <div className="w-[92%] left-0 mx-auto h-[90%] hidden lg:block bg-[#F7F6F6] absolute z-[-10]"></div>

  <div className="flex flex-col-reverse lg:ml-20 lg:flex-row bg-transparent w-full max-w-[1400px] mx-auto gap-10 lg:gap-16">
    
    {/* Left Text Column */}
    <div className="w-full lg:w-3/5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4">
      <h1 className="text-[38px] lg:text-header lg:mt-[-110px] sm:text-[40px] md:text-[48px] lg:text-[64px] text-[#181415] leading-relaxed z-10">
        Message
      </h1>

      <p className="mt-4 text-[16px] md:text-[18px] font-semibold text-[#181415] lg:pr-100">
        Chief Incumbent (Viharadhipati) Of The Historic
        Aluvihara,
      </p>

      {/* Mobile image */}
      <div className="relative w-full h-[300px] mt-6 block lg:hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#F4F6F8] rounded-md flex items-center justify-center z-10">
          <img
            src={Puskole}
            alt="Palm Leaf Book"
            className="rounded-md w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mt-6 flex w-full lg:w-5/6 flex-col text-[15px] md:text-[18px] justify-center text-[#4F4C53] leading-relaxed text-justify relative">
        <MdOutlineFormatQuote className="inline text-[#EBB23E] h-10 w-10 rotate-180 mb-2" />
        <p>
          It is with deep reverence and heartfelt blessings that I welcome you
          to our temple’s online sanctuary. This platform has been created to
          bring the spiritual and cultural essence of our sacred temple beyond
          its physical boundaries, offering an opportunity for devotees near and
          far to connect with the timeless teachings of the Dhamma.
        </p>
        <div className="text-right mt-6 font-semibold text-[#181415]">
          Ven. Aluvihare Saranankara. <br />
          <MdOutlineFormatQuote className="inline text-[#EBB23E] h-10 w-10 ml-2" />
        </div>
      </div>
    </div>

    <div className="relative hidden lg:block w-full max-w-[440px] h-[400px] mt-10 lg:mt-[100px] lg:p-20">
      <div className="absolute left-[20px] top-0 w-full h-[400px] border border-gray-300 z-0"></div>
      <div className="absolute top-[-20px] left-[-20px] w-full h-[400px] border border-gray-300 z-0"></div>
      <div className="absolute top-0 left-0 lg:left-1 w-full h-full lg:h-[380px] rounded-md flex items-center justify-center z-10 lg:py-2 lg:px-5">
        <img
          src={Puskole}
          alt="Palm Leaf Book"
          className="rounded-md w-full h-full object-cover "
        />
      </div>
    </div>
  </div>

  <img
    src={LineWithStyle}
    alt=""
    className="hidden lg:block absolute left-0 top-530 w-1/2"
  />
</div>

  );
};

export default Message;
