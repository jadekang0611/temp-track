import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  Icon,
} from '@material-ui/core';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';

import API from '../../api';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '90vh',
  },
  message: {
    lineHeight: '48px',
  },
  form: {
    marginTop: theme.spacing(6),
    textAlign: 'center',
    padding: '0rem 2rem',
  },

  buttonContainer: { marginTop: '2rem' },
  addButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  box: {
    background: '#ffffff',
    boxShadow: '0px 6px 16px rgba(8, 35, 48, 0.12)',
  },
}));

const AddTemp = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center" className={classes.message}>
        안녕하세요. 아래에 인적사항과 체온을 입력해주세요. &#128512;
      </Typography>

      <form noValidate autoComplete="on" className={classes.form}>
        <Grid container direction="row" justify="space-around" spacing={2}>
          <Grid item xs={12} md={3}>
            <TextField
              variant="outlined"
              label="이름"
              className={classes.box}
              fullWidth
              required
            ></TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              variant="outlined"
              label="주소"
              className={classes.box}
              fullWidth
              required
            ></TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              required
              variant="outlined"
              label="연락처"
              className={classes.box}
              fullWidth
              id="outlined-required"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              variant="outlined"
              label="체온"
              className={classes.box}
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <Grid item className={classes.buttonContainer} xs={12}>
          <Button
            className={classes.addButton}
            startIcon={<PublishRoundedIcon />}
          >
            입력하기
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default AddTemp;
