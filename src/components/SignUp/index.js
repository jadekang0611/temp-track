import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles({
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
});

const SignUp = () => {
  const classes = useStyles();
  return (
    <div>
      <h2>환영합니다.</h2>
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="이름"
          variant="outlined"
          fullWidth
        ></TextField>
        <TextField
          id="outlined-basic"
          label="사업장 이름"
          variant="outlined"
          fullWidth
        ></TextField>
        <TextField
          id="outlined-basic"
          label="이메일"
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
          계정 만들기
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
