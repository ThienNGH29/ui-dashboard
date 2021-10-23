import React from "react";
import TopbarSearch from "../../../components/TopbarSearch";
import VisitorTable from "../../../components/VisitorTable";

function ExVisitor(props) {
  return (
    <>
      <TopbarSearch searchString="Search visitors..." hasDropdown />

      <VisitorTable />
    </>
  );
}

export default ExVisitor;
