import React from "react";
import Container from "../../../components/Container";
import bannerImg from "../../../assets/image/bannerImg/Union.png";
import shadow1 from "../../../assets/image/shadowImage/shadow1.png";
import shadow2 from "../../../assets/image/shadowImage/shadow2.png";
import shadow3 from "../../../assets/image/shadowImage/shadow3.png";
import DemoVideo from "./DemoVideo";
const Banner = () => {
  return (
    <Container>
      <div className="mt-[140px]">
        {/*first small banner heading  */}
        <div className="flex flex-row gap-[10px] justify-center items-center text-center">
          <img src={bannerImg} alt="" />
          <p
            className="text-[14px] uppercase tracking-[5.6px]"
            style={{ color: "var(--7-a-49-ff, #7A49FF)" }}
          >
            Welcome to Lifinity
          </p>
        </div>

        <div className="relative">
          <img
            className=" absolute w-[1560px] h-[1560px] top-[50px] text-red-500 shodow1"
            src={shadow1}
            alt="shadow1"
          />
          <img
            className=" absolute w-[1444px] h-[1444px] top-[90px] left-20 p-[90px] text-red-500 shodow2"
            src={shadow2}
            alt="shadow2"
          />
          <img
            className=" absolute w-[1224px] h-[1224px] top-[300px] left-[170px] text-red-500 shodow3"
            src={shadow3}
            alt="shadow3"
          />
        </div>

        {/* second large banner heading */}
        <div className="text-center lg:mt-[40px] ">
          <h2 className="text-[72px] capitalize font-medium text-[#FFFFFF]">
            Proactive market maker
          </h2>
          <h3 className="text-[52px] capitalize font-extralight text-[#FFF] mt-[4px]">
            with concentrated liquidity
          </h3>
          <div className="flex flex-row justify-center items-center gap-[10px] text-[#FFFFFF] mt-[40px]">
            <button className="launch_btn">Launch App</button>
            <button className="trail_Btn ">Start Free Trial</button>
          </div>
        </div>
        <DemoVideo />
      </div>
    </Container>
  );
};

export default Banner;
