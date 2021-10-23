import React from "react";
import ChartBoard from "../../../components/ChartBoard";
import TopList from "../../../components/TopList";

function ExDashboard(props) {
  return (
    <>
      <ChartBoard />
      <TopList title="Top Visitors" />
    </>
  );
}

export default ExDashboard;
