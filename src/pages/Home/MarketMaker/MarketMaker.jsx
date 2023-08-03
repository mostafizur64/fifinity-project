import React from "react";
import Container from "../../../components/Container";
import { FaArrowRight } from "react-icons/fa";
const MarketMaker = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-[180px]">
        <div className="lg:p-[50px] mt-12">
          {/* left side */}
          <h2 className="text-[45px] capitalize text-[#FFF]">
            Proactive Market Maker
          </h2>
          <p className="text-xl capitalize font-normal mt-4 mb-10 text-[#64677C]">
            A highly optimized proactive market maker designed to improve
            capital efficiency and reduce impermanent loss.
          </p>
          <div>
            <form action="">
              <div className="space-y-[32px]">
                <div className="relative ">
                  <input
                    className="custom-value px-[30px] py-[24px] lg:text-[20px]"
                    type="text"
                    placeholder="01 - Concentrated Liquidity"
                  />
                  <FaArrowRight
                    className="absolute top-7 lg:right-[63px] right-[40px] bottom-0"
                    color="red"
                    size={20}
                  />
                </div>
                <div className="relative">
                  <input
                    className="custom-value px-[30px] py-[24px] lg:text-[20px]"
                    type="text"
                    placeholder="01 - Concentrated Liquidity"
                  />
                  <FaArrowRight
                    className="absolute top-7 lg:right-[63px] right-[40px] bottom-0"
                    color="red"
                    size={20}
                  />
                </div>
                <div className="relative">
                  <input
                    className="custom-value px-[30px] py-[24px] lg:text-[20px]"
                    type="text"
                    placeholder="01 - Concentrated Liquidity"
                  />
                  <FaArrowRight
                    className="absolute top-7 lg:right-[63px] right-[40px] bottom-0"
                    color="red"
                    size={20}
                  />
                </div>
                <div className="relative">
                  <input
                    className="custom-value px-[30px] py-[24px] lg:text-[20px]"
                    type="text"
                    placeholder="01 - Concentrated Liquidity"
                  />
                  <FaArrowRight
                    className="absolute top-7 lg:right-[63px] right-[40px] bottom-0"
                    color="red"
                    size={20}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* right side */}
        <div
          className=" p-[50px] bg-[#070018]"
          style={{ border: " 1px solid rgba(122, 73, 255, 0.30)" }}
        >
          <h2 className="text-[30px] text-[#7A49FF] uppercase">
            Concentrated Liquidity{" "}
          </h2>
          <div>
            <div
              className="lg:h-[572px] bg-[#070018] p-[50px] mt-[42px]"
              style={{
                background: "rgba(110, 117, 210, 0.03)",
              }}
            >
              <h3 className="text-[22px] text-[#FFFFFF]">Assets To Supplies</h3>
              <div className="bg-[#070018] " />
              <img
                className=" lg:h-[400px] lg:w-[400px]  h-[200px] w-[300px] mt-4"
                src="https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MarketMaker;
