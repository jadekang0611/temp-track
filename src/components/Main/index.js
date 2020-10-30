import React, { useState } from 'react';

import {
  Grid,
  Typography,
  Button,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddStudent from '../AddStudent';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';

// Custom Routes
import * as ROUTES from '../../constants/routes';

// API
import API from '../../api';

// Components
import ShowStudents from '../ShowStudents';
import ShowTemp from '../ShowTemp';

const useStyles = makeStyles({
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
  AppButton: {
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 700,
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
});

const Main = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.main}>
        <AppBar position="static" elevation={false} color="primary">
          <Toolbar className={classes.toolbar}>
            <Grid item lg={3} className={classes.toolbarGrid}>
              <Typography variant="h5">TempTrek</Typography>
            </Grid>
            <Grid container lg={6} direction="row" justify="space-evenly">
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
            </Grid>
            <Grid item lg={3} className={classes.toolbarGrid}>
              <IconButton edge="end" className={classes.AppButton}>
                <ExitToAppRoundedIcon />
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
        

        <Switch>
          <Route path={ROUTES.SHOWSTUDENTS} component={ShowStudents} />
          <Route path={ROUTES.SHOWTEMPERATURES} component={ShowTemp} />
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
