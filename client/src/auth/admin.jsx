import React, { useState } from "react";
import style from "./styles/adminDash.module.scss";
import { NavLink, withRouter, Route, Switch } from "react-router-dom";
import SideNav from "./../components/navs/sideNav/sideNav";
import Auth from "./auth";
import UpdateBlog from "./adminComponent/update";
import CreateAdmin from "./adminComponent/createAdmin";
import Blog from "./adminComponent/blog";
import AddBlogs from "./adminComponent/addBlogs";
import Message from "./adminComponent/message";
function Admin(props) {
  const [isSideNav, setSetNav] = useState(false);
  const [navItems] = useState([
    { title: "Blogs", link: "/admin/" },
    { title: "Add Blogs", link: "/admin/add" },
    { title: "Create Admin", link: "/admin/create" },
    { title: "Message", link: "/admin/message" },
  ]);
  const sideNavHandler = () => {
    return setSetNav((pre) => !pre);
  };
  const logOutHandler = () => {
    new Auth(props.history).LogOut();
  };
  return (
    <>
      <div className='container-fluid'>
        <div className={`row ${style.content}`}>
          <SideNav
            navItems={navItems}
            handler={sideNavHandler}
            isSideNav={isSideNav}
            logOut={logOutHandler}
          />
          {/* Links */}
          <div className={`col-sm-2 ${style.sidenav}`}>
            <ul>
              <li>
                <NavLink exact activeClassName={style.active} to='/admin/'>
                  <i
                    className='fa fa-address-card pr-3'
                    style={{ color: "red" }}></i>
                  Blogs
                </NavLink>
                <hr />
              </li>
              <li>
                <NavLink exact activeClassName={style.active} to='/admin/add'>
                  <i
                    className='fa fa-plus-square pr-3'
                    style={{ color: "red" }}></i>
                  Add Blogs
                </NavLink>
                <hr />
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName={style.active}
                  to='/admin/create'>
                  <i className='fa fa-user  pr-3' style={{ color: "red" }}></i>
                  Create Admin
                </NavLink>
                <hr />
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName={style.active}
                  to='/admin/message'>
                  <i
                    className='fa fa-envelope  pr-3'
                    style={{ color: "red" }}></i>
                  Message
                </NavLink>
                <hr />
              </li>
              <li>
                <span onClick={logOutHandler} style={{ cursor: "pointer" }}>
                  <i
                    className='fa fa-sign-out pr-3'
                    style={{ color: "red" }}></i>
                  LogOut
                </span>
                <hr />
              </li>
            </ul>
            <br />
          </div>
          <br />
          {/* components */}
          <div className='col-sm-9'>
            <div className='well'>
              <div className={style.menuIcon} onClick={sideNavHandler}>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div>
                <Switch>
                  <Route exact path='/admin/add'>
                    <AddBlogs />
                  </Route>
                  <Route exact path='/admin/create'>
                    <CreateAdmin />
                  </Route>
                  <Route exact path='/admin/update'>
                    <UpdateBlog />
                  </Route>
                  <Route exact path='/admin/message'>
                    <Message />
                  </Route>
                  <Route path='/admin'>
                    <Blog />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default withRouter(Admin);
