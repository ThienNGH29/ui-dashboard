import React from "react";
import ChartBoard from "../../../components/ChartBoard";
import TopbarTitle from "../../../components/TopbarTitle";
import TopList from "../../../components/TopList";

function AdminDashboard() {
  return (
    <>
      <TopbarTitle title="Event-15" hasDropdown />

      <ChartBoard />
      <TopList title="Top Exhibitors" />
    </>
  );
}

export default AdminDashboard;
