import React from "react";
// import { NavLink } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import style from "./sideNav.module.scss";
export default function SideNav(props) {
  return (
    <div className={props.isSideNav ? style.sidenav : style.close}>
      <span className={style.closebtn} onClick={props.handler}>
        &times;
      </span>
      {props.navItems.map((navItem, i) => {
        return (
          <NavLink to={navItem.link} key={i}>
            {navItem.title}
          </NavLink>
        );
      })}
      {props.logOut ? (
        <span
          onClick={props.logOut}
          style={{ color: "white", fontSize: "20px" }}>
          LogOut
        </span>
      ) : null}
    </div>
  );
}
