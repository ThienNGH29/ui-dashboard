import React from "react";
import TopbarSearch from "../../../components/TopbarSearch";
import ExhibitorTable from "../../../components/ExhibitorTable";

function AdminExhibitorList(props) {
  return (
    <>
      <TopbarSearch searchString="Search exhibitor..." hasDropdown hasCreate />

      <ExhibitorTable />
    </>
  );
}

export default AdminExhibitorList;
