import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar';
import CharacterInfoPages from '../pages/CharacterInfoPages';
import ComicsPages from '../pages/ComicsPages';
import Homepage from '../pages/Homepage';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/comics' component={ComicsPages} />
        <Route exact path='/:id' component={CharacterInfoPages}/>
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}
 
export default AppRouter;