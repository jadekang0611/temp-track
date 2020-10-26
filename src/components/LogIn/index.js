import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles({
  signup: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const LogIn = () => {
  const classes = useStyles();
  return (
    <div>
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
          label="사업장 이름"
          variant="outlined"
          fullWidth
        ></TextField>
        <Button type="submit" className={classes.signup}>
          계정 만들기
        </Button>
      </form>
    </div>
  );
};

export default LogIn;
