import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import AddStudent from './components/AddStudent';
import Main from './components/Main';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <div>
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route exact path={ROUTES.SIGNUP} component={SignUp} />
        <Route exact path={ROUTES.LOGIN} component={LogIn} />
        <Route path={ROUTES.MAIN} component={Main} />
        <Route exact path={ROUTES.ADDSTUDENT} component={AddStudent} />
      </div>
    </Router>
  );
}

export default App;
