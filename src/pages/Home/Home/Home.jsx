import React from "react";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import MarketMaker from "../MarketMaker/MarketMaker";
import ProactiveMarketMaker from "../ProactiveMarketMaker/ProactiveMarketMaker";

const Home = () => {
  return (
    <>
      <Banner />
      <Brand/>
      <MarketMaker/>
      <ProactiveMarketMaker/>
    </>
  );
};

export default Home;
