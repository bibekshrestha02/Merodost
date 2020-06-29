import React, { useState } from "react";
import style from "./styles/nav.module.scss";
import { NavHashLink as NavLink } from "react-router-hash-link";
import SideNav from "./sideNav/sideNav";
export default function Nav() {
  const [navItems] = useState([
    { title: "Home", link: "/#home" },
    { title: "Blog", link: "/#blog" },
    { title: "Contact", link: "/#contact" },
  ]);

  const [isSideNav, setSetNav] = useState(false);
  const sideNavHandler = () => {
    return setSetNav((pre) => !pre);
  };

  return (
    <>
      <nav className={`${style.nav}  navbar `}>
        <div className={style.menuIcon} onClick={sideNavHandler}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <img
          src='/images/merodost1.png'
          className={style.brandImage}
          alt='brandImage'
          width='150px'
        />

        <ul>
          {navItems.map((navItem, i) => {
            return (
              <li key={i}>
                <NavLink exact smooth to={navItem.link}>
                  {`${navItem.title}`.toLocaleUpperCase()}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <SideNav
          navItems={navItems}
          handler={sideNavHandler}
          isSideNav={isSideNav}
        />
      </nav>
    </>
  );
}
