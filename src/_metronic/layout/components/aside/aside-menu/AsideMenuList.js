/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import {useLocation} from "react-router";
import {NavLink}  from "react-router-dom";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl, checkIsActive} from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
        ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
        : "";
  };

  return (
      <>
        {/* begin::Menu Nav */}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
          {/*begin::1 Level*/}
          <li
              className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
              aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")}/>
            </span>
              <span className="menu-text">Dashboard</span>
            </NavLink>
          </li>
          {/*end::1 Level*/}

          {/*begin::1 Level*/}
          {/* <li
              className={`menu-item ${getMenuItemActive("/builder", false)}`}
              aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/builder">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span>
              <span className="menu-text">Layout Builder</span>
            </NavLink>
          </li> */}
          {/*end::1 Level*/}

          <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/react-bootstrap", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/react-bootstrap">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg")}/>
            </span>
              <span className="menu-text">Kerjasama</span>
              <i className="menu-arrow"/>
            </NavLink>
            <div className="menu-submenu ">
              <ul className="menu-subnav">
                <ul className="menu-subnav">
                  <li
                      className="menu-item  menu-item-parent"
                      aria-haspopup="true"
                  >
                  <span className="menu-link">
                    {/* <span className="menu-text">Bootstrap</span> */}
                  </span>
                  </li>

                  {/*begin::2 Level*/}
                  <li
                      className={`menu-item ${getMenuItemActive(
                          "/react-bootstrap/tooltips"
                      )}`}
                      aria-haspopup="true"
                  >
                    <NavLink className="menu-link" to="/mou">
                      <i className="menu-bullet menu-bullet-dot">
                        <span/>
                      </i>
                      <span className="menu-text">MOU</span>
                    </NavLink>
                  </li>
                  {/*end::2 Level*/}

                  {/*begin::2 Level*/}
                  <li
                      className={`menu-item ${getMenuItemActive(
                          "/react-bootstrap/toasts"
                      )}`}
                      aria-haspopup="true"
                  >
                    <NavLink className="menu-link" to="/pks">
                      <i className="menu-bullet menu-bullet-dot">
                        <span/>
                      </i>
                      <span className="menu-text">Perjanjian Kerjasama</span>
                    </NavLink>
                  </li>
                  {/*end::2 Level*/}
                </ul>
              </ul>
            </div>
          </li>
          {/*end::1 Level*/}
        </ul>

        {/* end::Menu Nav */}
      </>
  );
}
