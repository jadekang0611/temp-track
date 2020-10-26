import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link, TextField, Button } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://google.com/">
        TempTrek
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles({
  container: {},
  signup: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 8,
  },
});

const LogIn = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h2>오늘도 좋은 하루 보내세요, 원장님!</h2>
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="이름"
          variant="outlined"
          fullWidth
        ></TextField>
        <TextField
          id="outlined-basic"
          label="비밀번호"
          variant="outlined"
          fullWidth
          type="password"
          autoComplete="current-password"
        ></TextField>
        <Button type="submit" className={classes.signup}>
          로그인 하기
        </Button>
      </form>
      <Copyright />
    </div>
  );
};

export default LogIn;
