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
      <div className="grid grid-cols-1 lg:grid-cols-5 justify-between items-center gap-36 mt-[70px]">
        <img src={img1} alt="brand1" />
        <img src={img2} alt="brand2" />
        <img src={img3} alt="brand3" />
        <img src={img4} alt="brand4" />
        <img src={img5} alt="brand5" />
      </div>
    </Container>
  );
};

export default Brand;
