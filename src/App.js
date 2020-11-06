import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import * as ROUTES from './constants/routes';
import Home from './components/Website/Home';
import Covid from './components/Website/MiscPages/Covid';
import Forms from './components/Website/MiscPages/Forms';
import Tempture from './images/Tempture.png';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import AddStudent from './components/AddStudent';
import Main from './components/Main';
import Copyright from './components/Copyright';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
  },

  navigation: {
    padding: '1rem 4rem',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      padding: '2rem 4rem',
    },
  },
  navLeft: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  navRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  item: {
    marginRight: '2rem',
    [theme.breakpoints.down('sm')]: {
      margin: '0 20px',
    },
  },
  itemContent: {
    fontFamily: 'Rubik, sans-serif',
    fontSize: 18,
    fontWeight: 600,
    color: '#757575',
    '&:hover': {
      color: '#f50256',
    },
  },
  footer: {
    marginBottom: '2rem',
  },
}));

const Navigation = () => {
  const classes = useStyles();
  return (
    <div>
      <header>
        <nav>
          <Grid container className={classes.navigation}>
            <div className={classes.navLeft}>
              <Grid item>
                <img src={Tempture} alt="logo" width="300" />
              </Grid>
            </div>
            <div className={classes.navRight}>
              <Grid item className={classes.item}>
                <Link to={ROUTES.LANDING} className={classes.link}>
                  <Typography className={classes.itemContent}>Home</Typography>
                </Link>
              </Grid>
              <Grid item className={classes.item}>
                <Link to={ROUTES.COVID} className={classes.link}>
                  <Typography className={classes.itemContent}>
                    COVID 19
                  </Typography>
                </Link>
              </Grid>
              <Grid item className={classes.item}>
                <Link to={ROUTES.FORMS} className={classes.link}>
                  <Typography className={classes.itemContent}>Forms</Typography>
                </Link>
              </Grid>
            </div>
          </Grid>
        </nav>
      </header>
    </div>
  );
};

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={ROUTES.LANDING}
          component={() => (
            <>
              <Navigation />
              <Home />
              <footer className={classes.footer}>
                <Copyright />
              </footer>
            </>
          )}
        />
        <Route
          path={ROUTES.COVID}
          component={() => (
            <>
              <Navigation />
              <Covid />
              <footer className={classes.footer}>
                <Copyright />
              </footer>
            </>
          )}
        />
        <Route
          path={ROUTES.FORMS}
          component={() => (
            <>
              <Navigation />
              <Forms />
              <footer className={classes.footer}>
                <Copyright />
              </footer>
            </>
          )}
        />
        <Route path={ROUTES.SIGNUP} component={SignUp} />
        <Route path={ROUTES.LOGIN} component={LogIn} />
        <Route path={ROUTES.MAIN} component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
