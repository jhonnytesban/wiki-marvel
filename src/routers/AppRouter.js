import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import CharacterInfoPages from "../pages/CharacterInfoPages";
import ComicsPages from "../pages/ComicsPages";
import Homepage from "../pages/Homepage";
import LoginPages from "../pages/LoginPages";
import NotFound from "../pages/NotFound";
import { useAuth0 } from "@auth0/auth0-react";

const AppRouter = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Switch>
        <Route exact path="/" component={LoginPages} />
        <Route exact path="/personajes">
          <Homepage />
          {/* {!isAuthenticated && <Redirect to='/'/>} */}
        </Route>
        <Route exact path="/comics" component={ComicsPages} />
        <Route exact path="/:id" component={CharacterInfoPages} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
