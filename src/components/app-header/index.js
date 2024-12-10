import React, { memo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FcMusic } from "react-icons/fc";
import { CiSearch } from "react-icons/ci";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

import { headerLinks } from "@/common/local-data";

const AppHeader = memo(() => {
  const navigate = useNavigate();
  const jumpToLogin = () => {
    navigate("/login");
  };
  const jumpToCreatorsCenter = () => {
    navigate("/creators");
  };
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink
          to={item.link}
          key={index}
          className="m-4 font-bold text-sm text-white"
        >
          {item.title}
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} className="m-4 font-bold text-sm text-white">
          {item.title}
        </a>
      );
    }
  };

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft >
          <NavLink
            to="/"
            className="m-2 font-mono font-bold hover:text-blue-500"
          >
            <FcMusic className="w-8 h-8 text-gray-500 hover:text-blue-500 ml-2  " />
            Hi Music
          </NavLink>
          <div>
            {headerLinks.map((item, index) => showSelectItem(item, index))}
          </div>
        </HeaderLeft>
        <HeaderRight >
          <div className="flex items-center bg-white border rounded-full px-4 py-2 w-56  shadow-md m-2">
            <CiSearch className="w-6 h-6" />

            <input
              type="text"
              placeholder="Music/Video/Radio/User"
              className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500 ml-2"
            />
          </div>
          <div>
            <button
              onClick={jumpToCreatorsCenter}
              className="w-24 rounded-full "
            >
              Creators Center
            </button>
          </div>
          <div>
            <button
              onClick={jumpToLogin}
              className="w-16 rounded-full "
            >
              Login
            </button>
          </div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default AppHeader;
