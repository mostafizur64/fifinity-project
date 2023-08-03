import React from "react";

const Container = ({ children }) => {
  return <div className="max-w-[1920px] mx-auto xl:px-[180px] md:px-[120px] sm:px-2 px-4">{children}</div>;
};

export default Container;
