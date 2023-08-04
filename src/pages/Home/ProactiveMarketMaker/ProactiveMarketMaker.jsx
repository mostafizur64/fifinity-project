import React from "react";
import ContainerTwo from "../../../components/ContainerTwo";
import proActiveImage from "../../../assets/image/proactiveImage/Proactive.png";
import { FaDrupal } from "react-icons/fa";
import lineBar from "../../../assets/image/proactiveImage/line.png";
const ProactiveMarketMaker = () => {
  return (
    <ContainerTwo>
      <div className="bg lg:mt-[180px] relative ">
        <div className="text-center lg:p-[100px]">
          <h2 className="text-[45px] capitalize text-[#FFF] ">
            Proactive Market Maker
          </h2>
          <p className="text-xl capitalize font-normal mt-4 mb-10 text-[#64677C]">
            A highly optimized proactive market maker designed to improve
            capital efficiency and reduce impermanent loss.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:px-[118px]">
            <div className="">
              <div className="flex image">
                <img src={lineBar} alt="line1" />

                <div className="flex flex-col gap-[100px] items-center justify-center mx-auto px-8">
                  <div className="relative">
                    <FaDrupal size={40} />
                    <div className="border-r border-[#A787FF] lg:mt-[25px] lg:pt-[30px] -right-[33px]  absolute" />
                    <h2 className="text-[24px] mt-[24px] text-[#FFF] ">
                      Liquidity Providers 50%
                    </h2>
                    <div className="border-l border-[#A787FF] lg:-mt-[30px] lg:pt-[30px] lg:-left-[32px]  absolute" />
                    <p className="text-[16px] font-normal mt-4 text-[#64677C] capitalize">
                      A highly optimized proactive market maker designed to
                      improve capital efficiency and reduce impermanent loss.
                    </p>
                  </div>
                  <div className="relative">
                    <FaDrupal size={40} />
                    <div className="border-r border-[#A787FF] lg:mt-[25px] lg:pt-[30px] -right-[33px]  absolute" />
                    <h2 className="text-[24px] mt-[24px] text-[#FFF] ">
                    Rase Pool  05%
                    </h2>
                    <div className="border-l border-[#A787FF] lg:-mt-[30px] lg:pt-[30px] lg:-left-[32px]  absolute" />
                    <p className="text-[16px] font-normal mt-4 text-[#64677C] capitalize">
                    We Buy POL From the Market And Distribute these Tokens Among Advanced Platform Users Who Put Their Pols In The Staking Smart Contact
                    </p>
                  </div>
                </div>
                <img src={lineBar} alt="line2" />
              </div>
            </div>
            <div className="col-span-2 ...">
              <img src={proActiveImage} alt="proactive image" />
            </div>
            <div className="...">
              <div className="flex image">
                <img src={lineBar} alt="line1" />

                <div className="flex flex-col gap-[100px] items-center justify-center mx-auto px-8">
                  <div className="relative">
                    <FaDrupal size={40} />
                    <div className="border-r border-[#A787FF] lg:mt-[25px] lg:pt-[30px] -right-[33px]  absolute" />
                    <h2 className="text-[24px] mt-[24px] text-[#FFF] ">
                    Buy Back And Burn 15%
                    </h2>
                    <div className="border-l border-[#A787FF] lg:-mt-[30px] lg:pt-[30px] lg:-left-[32px]  absolute" />
                    <p className="text-[16px] font-normal mt-4 text-[#64677C] capitalize ">
                    A highly optimized proactive market maker designed to improve capital efficiency and reduce impermanent loss.
                    </p>
                  </div>
                  <div className="relative">
                    <FaDrupal size={40} />
                    <div className="border-r border-[#A787FF] lg:mt-[25px] lg:pt-[30px] -right-[33px]  absolute" />
                    <h2 className="text-[24px] mt-[24px] text-[#FFF] ">
                    Advanced Users 30%
                    </h2>
                    <div className="border-l border-[#A787FF] lg:-mt-[30px] lg:pt-[30px] lg:-left-[32px]  absolute" />
                    <p className="text-[16px] font-normal mt-4 text-[#64677C] capitalize">
                    We Buy POL From the Market And Distribute these Tokens Among Advanced Platform Users Who Put Their Pols In The Staking Smart Contact
                    </p>
                  </div>
                </div>
                <img src={lineBar} alt="line2" />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </ContainerTwo>
  );
};

export default ProactiveMarketMaker;
