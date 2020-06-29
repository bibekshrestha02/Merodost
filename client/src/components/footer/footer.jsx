import React from "react";
import style from "./style/footer.module.scss";
import { Link } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";

export default function footer() {
  return (
    <div className={`${style.footer} text-center pb-4`}>
      <div className='pt-4'>
        <Link to='/' className={`fa fa-facebook ${style.icon}`}></Link>
        <Link to='/' className={`fa fa-twitter ${style.icon}`}></Link>
        <Link to='/' className={`fa fa-google ${style.icon}`}></Link>
      </div>
      <div className={style.links}>
        <NavLink smooth to={"/#home"}>
          HOME
        </NavLink>
        <NavLink smooth to={"/#blog"}>
          BLOG
        </NavLink>
        <NavLink smooth to={"/#contact"}>
          CONTACT
        </NavLink>
      </div>
      <div className={style.copyRight}>
        <span>Copyright © 2020 All rights reserved - MeroDost</span>
        <span>
          Powered By <font color='#2e8bc0'>Bibek Shrestha</font>
        </span>
      </div>
    </div>
  );
}
