import React, { useState } from "react";
import PropTypes from "prop-types";
import { BsSearch } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import RightCreateModal from "./RightCreateModal";

TopbarSearch.propTypes = {
  classes: PropTypes.string,
  searchString: PropTypes.string,
  hasDropdown: PropTypes.bool,
  hasCreate: PropTypes.bool,
};

TopbarSearch.defaultProps = {
  classes: "col-12",
  searchString: "Search...",
  hasDropdown: false,
  hasCreate: false,
};

function TopbarSearch({ classes, searchString, hasDropdown, hasCreate }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={classes}>
      <div className="box">
        <div className="topbar">
          <div className="topbar-item searchbar">
            <BsSearch />
            <input type="text" id="search" placeholder={searchString}></input>
          </div>
          {hasDropdown && (
            <div className="topbar-item dropdown-wrap">
              <Dropdown>
                <Dropdown.Toggle>Event-15</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/">Event-14</Dropdown.Item>
                  <Dropdown.Item href="/">Event-12</Dropdown.Item>
                  <Dropdown.Item href="/">Event-13</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
          {hasCreate && <RightCreateModal />}
        </div>
      </div>
    </div>
  );
}

export default TopbarSearch;
