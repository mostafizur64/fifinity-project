import React from "react";
import img1 from "../../../assets/image/brandlogo/brand1.png";
import img2 from "../../../assets/image/brandlogo/brand2.png";
import img3 from "../../../assets/image/brandlogo/brand3.png";
import img4 from "../../../assets/image/brandlogo/brand4.png";
import img5 from "../../../assets/image/brandlogo/brand5.png";
import Container from "../../../components/Container";
const Brand = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 justify-between lg:gap-[176px] gap-20  mx-auto lg:mt-[70px] -mt-[215px] z-50">
        <img
          className="lg:w-[157px] lg:h-[37px] w-96"
          src={img1}
          alt="brand1"
        />
        <img
          className="lg:w-[157px] lg:h-[37px] w-96"
          src={img2}
          alt="brand2"
        />
        <img
          className="lg:w-[157px] lg:h-[37px] w-96"
          src={img3}
          alt="brand3"
        />
        <img
          className="lg:w-[157px] lg:h-[37px] w-96"
          src={img4}
          alt="brand4"
        />
        <img
          className="lg:w-[157px] lg:h-[37px] w-96"
          src={img5}
          alt="brand5"
        />
      </div>
    </Container>
  );
};

export default Brand;
