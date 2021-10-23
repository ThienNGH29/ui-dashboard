import React from "react";
import TopbarSearch from "../../../components/TopbarSearch";
import VisitorTable from "../../../components/VisitorTable";

function AdminVisitorList(props) {
  return (
    <>
      <TopbarSearch searchString="Search visitors..." hasDropdown />

      <VisitorTable />
    </>
  );
}

export default AdminVisitorList;
