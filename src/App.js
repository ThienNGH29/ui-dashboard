import { Route, Switch } from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Layout} exact />
        <Route path="/login" component={Login} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
