import React from "react";
import PropTypes from "prop-types";
import TopbarSearch from "../../../components/TopbarSearch";

AdminExhibitorList.propTypes = {};

function AdminExhibitorList(props) {
  return (
    <>
      <TopbarSearch hasDropdown hasCreate />
    </>
  );
}

export default AdminExhibitorList;
