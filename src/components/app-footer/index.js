import React, { memo } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { FcMusic } from "react-icons/fc";
import { FootWraper } from "./style";
import { footerLinks } from "../../common/local-data";
import routes from "../../router";

const AppFooter = memo(() => {
  const footerRoute = routes.find((route) => route.path === "/footer/*");
  const footerRoutes = footerRoute?.routes || [];
  return (
    <FootWraper>
      <div className="foot-nav-container">
        <NavLink to="/" className="m-2 font-mono font-bold hover:text-blue-500">
          <FcMusic className="w-8 h-8 text-gray-500 hover:text-blue-500 ml-2  " />
          Hi Music
        </NavLink>
        {footerLinks.map((item, index) => (
          <NavLink className="foot-nav" key={index} to={item.link}>
            {item.title}
          </NavLink>
        ))}
      </div>
      <Routes>
        {footerRoutes.map((route, index) => (
          <Route
            className="foot-route"
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </FootWraper>
  );
});

export default AppFooter;
