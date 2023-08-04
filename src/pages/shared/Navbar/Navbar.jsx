import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import logo from "../../../assets/image/logo/logo.png";
import logo1 from "../../../assets/image/logo/logo1.png";
const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link href="/">Product</Link>
      </li>
      <li>
        <Link href="/aboutUs">Community</Link>
      </li>
      <li>
        <Link href="/service">Company</Link>
      </li>
      <li>
        <Link href="/pages">Docs</Link>
      </li>
      <li>
        <Link href="/blog">Media</Link>
      </li>
      <li>
        <button
          className="lg:hidden block btn text-[#FFFFFF] capitalize bg justify-center items-center"
          href="/blog"
          style={{
            backgroundColor:
              "linear-gradient(180deg, rgba(207, 184, 255, 0.24) 0%, rgba(207, 184, 255, 0.00) 100%)",
            borderRadius: "38px",
            border: "0.5px solid var(--7-a-49-ff, #7A49FF)",
          }}
        >
          start Free Trial
        </button>
      </li>
    </>
  );
  return (
    <Container>
      <div className="py-6">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden text-white border ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box text-[#FFFFFF] text-[14px]"
              >
                {navItems}
              </ul>
            </div>
            <div className="flex gap-2 items-center text-white">
              <Link href="/" className="">
                <div className="flex flex-row justify-center items-center gap-[14px]sm:p-1">
                  <img className="w-[31px] h-[36px]" src={logo} alt="" />
                  <img className="w-[114px] h-[28px]" src={logo1} alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex text-[#FFFFFF]">
            <ul className="menu menu-horizontal px-1 text-[14px]">
              {navItems}
            </ul>
          </div>
          <div className="navbar-end">
            <button
              className="hidden lg:block px-[30px] py-[16px] text-[#FFFFFF] "
              style={{
                backgroundColor:
                  "linear-gradient(180deg, rgba(207, 184, 255, 0.24) 0%, rgba(207, 184, 255, 0.00) 100%)",
                borderRadius: "38px",
                border: "0.5px solid var(--7-a-49-ff, #7A49FF)",
              }}
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
      <div
        className="max-w-[1560px] mx-auto"
        style={{
          height: " 1px",
          backgroundImage:
            "linear-gradient(90deg, rgba(122, 73, 255, 0.00) 0%, rgba(122, 73, 255, 0.40) 51.55%, rgba(122, 73, 255, 0.00) 100%)",
        }}
      />
    </Container>
  );
};

export default Navbar;
