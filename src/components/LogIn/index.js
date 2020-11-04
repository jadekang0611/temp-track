import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  CssBaseline,
  Checkbox,
  Paper,
  Grid,
  Typography,
  Avatar,
  FormControlLabel,
} from '@material-ui/core';

import WhatshotIcon from '@material-ui/icons/Whatshot';
import Copyright from '../Copyright';
import * as ROUTES from '../../constants/routes';
import { Link, useHistory } from 'react-router-dom';
import API from '../../api';

const useStyles = makeStyles((theme) => ({
  root: { height: '100vh' },
  login: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: theme.spacing(3, 0, 2),
  },
  image: {
    backgroundImage:
      'url(https://source.unsplash.com/collection/13936289/temptrek)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  link: {
    textDecoration: 'none',
  },
}));

const LogIn = () => {
  const classes = useStyles();

  let history = useHistory();

  const [userInput, setUserInput] = useState({});

  const inputHandler = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const signInHandler = (e) => {
    e.preventDefault();
    const obj = {
      email: userInput.email,
      password: userInput.password,
    };
    (async () => {
      try {
        await API.post('auth/user/signin', obj);
        setTimeout(() => {
          history.push(ROUTES.ADDTEMP);
        }, 1000);
      } catch (e) {
        console.log(e.response.data);
      }
    })();
  };

  return (
    <div className={classes.container}>
      <Grid container className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <WhatshotIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              오늘도 좋은 하루 보내세요, 원장님!
            </Typography>
            <form noValidate autoComplete="off" className={classes.form}>
              <TextField
                id="outlined-basic"
                margin="normal"
                label="이메일"
                variant="outlined"
                autoComplete="email"
                fullWidth
                required
                name="email"
                onChange={inputHandler}
              ></TextField>
              <TextField
                id="outlined-basic"
                margin="normal"
                label="비밀번호"
                variant="outlined"
                fullWidth
                type="password"
                required
                autoComplete="current-password"
                name="password"
                onChange={inputHandler}
              ></TextField>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Button
                type="submit"
                fullWidth
                className={classes.login}
                onClick={signInHandler}
              >
                로그인 하기
              </Button>

              <Copyright />
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LogIn;
