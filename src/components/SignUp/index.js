import React from 'react';
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
}));

const SignUp = () => {
  const classes = useStyles();
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
              ></TextField>
              <TextField
                id="outlined-basic"
                margin="normal"
                label="사업장 이름"
                variant="outlined"
                fullWidth
                required
              ></TextField>
              <TextField
                id="outlined-basic"
                margin="normal"
                label="이메일"
                variant="outlined"
                fullWidth
                autoComplete="email"
                required
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
              ></TextField>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="TempTrek 이용약관, 개인정보 수집 및 이용에 동의합니다."
                />
              </Grid>
              <Button type="submit" fullWidth className={classes.signup}>
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
