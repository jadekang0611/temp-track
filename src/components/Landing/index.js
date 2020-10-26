import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Footer from '../Footer';

const useStyles = makeStyles({
  content: { backgroundColor: 'white', padding: '6rem 2rem' },
  buttons: { marginTop: '2rem' },
  signup: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 8,
  },
  login: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 8,
  },
  link: {
    textDecoration: 'none',
  },
});

const Landing = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary">
            TempTrek
          </Typography>

          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Ditch your piece of paper. Be in compliance with the COVID
            regulation with this simple tracking application for your students'
            safety.
          </Typography>
          <div className={classes.buttons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Link to={ROUTES.SIGNUP} className={classes.link}>
                  <Button className={classes.signup}>Start now</Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to={ROUTES.LOGIN} className={classes.link}>
                  <Button className={classes.login}>Sign in</Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
