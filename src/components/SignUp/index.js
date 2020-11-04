import React, { useState, useEffect } from 'react';
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
import { useHistory } from 'react-router-dom';

import WhatshotIcon from '@material-ui/icons/Whatshot';
import Copyright from '../Copyright';

import API from '../../api';

const useStyles = makeStyles((theme) => ({
  root: { height: '100vh' },
  signup: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
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
  error: {
    color: 'red',
  },
}));

const SignUp = () => {
  let history = useHistory();
  const classes = useStyles();

  const [userData, setUserData] = useState({});
  const [form, setForm] = useState(false);
  const [error, setError] = useState('');

  const formHandler = (e) => {
    setForm(e.target.checked);
    console.log(e.target.checked);
  };

  const userInputHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const registerHandler = (e) => {
    e.preventDefault();
    setError('');
    const obj = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };
    console.log(obj);
    if (form === false) {
      setError('이용약관, 개인정보 수집 및 이용에 동의해주세요.');
    } else {
      (async () => {
        try {
          await API.post('auth/user/register', obj);
          setTimeout(() => {
            history.push('/students');
          }, 1000);
        } catch (e) {
          setError(e.response.data);
        }
      })();
    }
  };
  return (
    <div>
      <Grid container className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <WhatshotIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              새 계정을 만들어 주세요.
            </Typography>
            <form noValidate autoComplete="off" className={classes.form}>
              <TextField
                id="outlined-basic"
                margin="normal"
                label="이름"
                variant="outlined"
                fullWidth
                required
                name="name"
                onChange={userInputHandler}
              ></TextField>
              <TextField
                id="outlined-basic"
                margin="normal"
                label="이메일"
                variant="outlined"
                fullWidth
                autoComplete="email"
                required
                name="email"
                onChange={userInputHandler}
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
                onChange={userInputHandler}
              ></TextField>
              <Grid item xs={12}>
                <Typography className={classes.error}>{error}</Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Tempture 이용약관, 개인정보 수집 및 이용에 동의합니다."
                  onChange={formHandler}
                  checked={form}
                  color="secondary"
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                className={classes.signup}
                onClick={registerHandler}
              >
                계정 만들기
              </Button>
              <Copyright />
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
