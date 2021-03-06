import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import CharacterInfoPages from "../pages/CharacterInfoPages";
import ComicsPages from "../pages/ComicsPages";
import Homepage from "../pages/Homepage";
import LoginPages from "../pages/LoginPages";
import NotFound from "../pages/NotFound";
import PrivateRoutes from "./PrivateRoutes";

const AppRouter = () => {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LoginPages} />
        <Route exact path="/personajes">
          <PrivateRoutes component={Homepage}/>
        </Route>
        <Route exact path="/comics" >
          <PrivateRoutes component={ComicsPages} />
        </Route>
        <Route exact path="/personajes/:id" >
          <PrivateRoutes component={CharacterInfoPages} />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
