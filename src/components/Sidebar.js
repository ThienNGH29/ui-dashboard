import React from "react";
import {
  BsClipboardData,
  BsPersonCheckFill,
  BsPersonFill,
} from "react-icons/bs";

function Sidebar(props) {
  return (
    <aside className="aside-main">
      <div className="aside-header">
        <a href="/">
          <img src="./logo.svg" alt="" />
        </a>
      </div>
      <div className="aside-content">
        <ul>
          <li>
            <a href="/">
              <div className="icon-fw">
                <BsClipboardData />
              </div>
              Dashboard
            </a>
          </li>
          <li>
            <a href="/">
              <div className="icon-fw">
                <BsPersonFill />
              </div>
              Visitor List
            </a>
          </li>
          <li>
            <a href="/">
              <div className="icon-fw">
                <BsPersonCheckFill />
              </div>
              Exhibitor List
            </a>
          </li>
        </ul>
      </div>
      <a href="/" className="aside-profile">
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
      </a>
    </aside>
  );
}

export default Sidebar;
