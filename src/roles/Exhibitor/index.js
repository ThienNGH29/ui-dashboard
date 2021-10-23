import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import ExVisitor from "./pages/Visitor";
import ExDashboard from "./pages/Dashboard";
import ExProfile from "./pages/Profile";

function Exhibitor(props) {
  const match = useRouteMatch();
  return (
    <div className="main-layout container-fluid">
      <Sidebar />
      <div className="main-layout-inner">
        <div className="content">
          <div className="row">
            <Switch>
              <Route path={match.url} exact component={ExDashboard} />
              <Route path={`${match.url}/visitor-list`} component={ExVisitor} />
              <Route path={`${match.url}/profile`} component={ExProfile} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Exhibitor;
