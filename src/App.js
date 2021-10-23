import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Admin from "./roles/Admin";
import Exhibitor from "./roles/Exhibitor";

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect from="/" to="/login" exact />

        <Route path="/login" component={Login} exact />
        <Route path="/admin" component={Admin} />
        <Route path="/exhibitor" component={Exhibitor} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
