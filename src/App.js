import React from "react";
import { Switch, Route } from "react-router-dom";
import { paths } from "./constants";
import Registration from "./Containers/Registration/Registration";
import Login from "./Containers/Login/Login";
import Dashboard from "./Containers/Dashboard/Dashboard";
import Editor from "./Containers/Editor/Editor";
import Templates from "./Containers/Templates/Templates";
import Header from "./Components/Header/Header";
import "./App.css";
import PreviewT2 from "./Components/Preview/PreviewT2/PreviewT2";
import EmploymentHistory from "./Components/EmploymentHistory/EmploymentHistory";

function App() {
  return (
    <div className="App">
      <Header />
      <EmploymentHistory />
      <Switch>
        <Route path={paths.registration} component={Registration} />
        <Route path={paths.login} component={Login} />
        <Route path={paths.dashboard} component={Dashboard} />
        <Route path={paths.editor} component={Editor} />
        <Route path={paths.templates} component={Templates} />
      </Switch>
    </div>
  );
}

export default App;
