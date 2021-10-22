import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function Layout(props) {
  return (
    <div className="main-layout container-fluid">
      <Sidebar />
      <div className="main-layout-inner">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
