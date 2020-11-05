import React, { useState } from 'react';

import { Grid, Button, AppBar, Toolbar, IconButton } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';

import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import AdjustRoundedIcon from '@material-ui/icons/AdjustRounded';

// Custom Routes
import * as ROUTES from '../../constants/routes';

// Components
import ShowStudents from '../ShowStudents';
import ShowTemp from '../ShowTemp';
import AddTemp from '../AddTemp';

import Logo from '../../images/Tempture.png';

const useStyles = makeStyles((theme) => ({
  appbar: { background: '#f1d302', color: '#071013' },
  main: { background: '#F1F1F1', height: '100vh' },
  content: {
    padding: '6rem 2rem',
  },
  addButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '17px',
    fontWeight: 500,
    fontSize: '15px',
  },
  link: {
    textDecoration: 'none',
  },
  placeholderContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  elevation4: {
    boxShadow: 'none',
  },
  subNavPaper: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  subNavGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  buttonContainer: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-between',
    },
  },
  AppButton: {
    color: '#071013',
    fontSize: '18px',
    fontWeight: 700,
    '&:hover': {
      color: '#ffffff',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  AppTempButton: {
    color: '#f50256',
    fontSize: '18px',
    fontWeight: 700,
    border: '2px solid',
    '&:hover': {
      color: '#071013',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  noStudentTitle: {
    marginBottom: '2rem',
    fontSize: '28px',
    fontWeight: 700,
  },
  toolbar: {
    padding: '0 10px',
  },
  toolbarGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tableContainer: {
    maxWidth: '1200px',
    margin: '2rem auto',
  },
}));

const Main = () => {
  const classes = useStyles();
  const history = useHistory();

  const logoutHandler = (e) => {
    setTimeout(() => {
      history.push(ROUTES.LOGIN);
    }, 1000);
  };

  return (
    <Router>
      <div className={classes.main}>
        <AppBar position="static" elevation={false} className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Grid item lg={3} className={classes.toolbarGrid}>
              <Link to={ROUTES.LANDING}>
                <img
                  src={Logo}
                  alt="logo"
                  width="200"
                  className={classes.logo}
                />
              </Link>
            </Grid>
            <Grid
              container
              lg={6}
              direction="row"
              justify="space-evenly"
              className={classes.buttonContainer}
            >
              <Link to={ROUTES.SHOWSTUDENTS} className={classes.link}>
                <Button
                  className={classes.AppButton}
                  startIcon={<FaceRoundedIcon />}
                >
                  학생명단
                </Button>
              </Link>

              <Link to={ROUTES.SHOWTEMPERATURES} className={classes.link}>
                <Button
                  className={classes.AppButton}
                  startIcon={<TrendingUpRoundedIcon />}
                >
                  체온기록
                </Button>
              </Link>
              <Link to={ROUTES.ADDTEMP} className={classes.link}>
                <Button
                  className={classes.AppTempButton}
                  startIcon={<AdjustRoundedIcon />}
                >
                  체온재기
                </Button>
              </Link>
            </Grid>
            <Grid item lg={3} className={classes.toolbarGrid}>
              <IconButton
                edge="end"
                className={classes.AppButton}
                onClick={logoutHandler}
              >
                <ExitToAppRoundedIcon />
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path={ROUTES.SHOWSTUDENTS} component={ShowStudents} />
          <Route path={ROUTES.SHOWTEMPERATURES} component={ShowTemp} />
          <Route path={ROUTES.ADDTEMP} component={AddTemp} />
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
