import React from "react";
import {
  BsClipboardData,
  BsPersonCheckFill,
  BsPersonFill,
} from "react-icons/bs";
import { NavLink, Link, useRouteMatch } from "react-router-dom";

function Sidebar(props) {
  const match = useRouteMatch();

  return (
    <aside className="aside-main">
      <div className="aside-header">
        <a href="/">
          <img src="/logo.svg" alt="" />
        </a>
      </div>
      <div className="aside-content">
        <ul>
          <li>
            <NavLink to={`${match.url}`} exact>
              <div className="icon-fw">
                <BsClipboardData />
              </div>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/visitor-list`}>
              <div className="icon-fw">
                <BsPersonFill />
              </div>
              Visitor List
            </NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/exhibitor-list`}>
              <div className="icon-fw">
                <BsPersonCheckFill />
              </div>
              Exhibitor List
            </NavLink>
          </li>
        </ul>
      </div>
      <Link to={`${match.url}/profile`} className="aside-profile">
        <div className="aside-profile-img">
          <img
            src="https://i.pravatar.cc/65?u=a042581f4e29026704d"
            alt="Avatar"
          />
        </div>
        <div className="aside-profile-text">
          <p>John Doe</p>
          <small>CEO, Founder</small>
        </div>
      </Link>
    </aside>
  );
}

export default Sidebar;
