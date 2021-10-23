import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import AdminDashboard from "./pages/Dashboard";
import AdminExhibitorList from "./pages/ExhibitorList";
import AdminVisitorList from "./pages/VisitorList";
import AdminProfile from "./pages/Profile";

function Admin(props) {
  const match = useRouteMatch();

  return (
    <div className="main-layout container-fluid">
      <Sidebar />
      <div className="main-layout-inner">
        <div className="content">
          <div className="row">
            <Switch>
              <Route path={match.url} exact component={AdminDashboard} />
              <Route
                path={`${match.url}/exhibitor-list`}
                component={AdminExhibitorList}
              />
              <Route
                path={`${match.url}/visitor-list`}
                component={AdminVisitorList}
              />
              <Route path={`${match.url}/profile`} component={AdminProfile} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Admin;
