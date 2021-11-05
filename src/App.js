import "./App.css";
import Landing from "./pages/home";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectDesc from "./pages/project";

ReactGA.initialize("G-X28P09E27C");

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/project/:id">
            <ProjectDesc />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default withRouter(App);
