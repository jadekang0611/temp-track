import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Copyright from '../Copyright';
import Tempture from '../../images/Tempture.png';

const useStyles = makeStyles((theme) => ({
  content: { backgroundColor: 'white', padding: '6rem 2rem', height: 'auto' },
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
  landing: {
    margin: theme.spacing(3, 0, 2),
  },
  appName: {
    fontFamily: 'Rubik, sans-serif',
    color: '#f50256',
    fontWeight: 600,
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <>
      <header>
        <img src={Tempture} alt="logo" width="300" />
      </header>
      <div className={classes.content}>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" className={classes.appName}>
            Tempture
          </Typography>

          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
            className={classes.landing}
          >
            오늘부터는 체온 기록도 빠르고 정확하게 기록하세요. 학원에서도
            학생들의 안전을 최우선으로하며 Tempture의 간단한 체온 기록 기능으로
            정부의 COVID 규정을 준수하여 학생과 학부모님에게 신뢰를 더하세요.
          </Typography>
          <div className={classes.buttons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Link to={ROUTES.SIGNUP} className={classes.link}>
                  <Button className={classes.signup}>지금 시작하기</Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to={ROUTES.LOGIN} className={classes.link}>
                  <Button className={classes.login}>로그인 하기</Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Copyright />
      </div>
    </>
  );
};

export default Landing;
