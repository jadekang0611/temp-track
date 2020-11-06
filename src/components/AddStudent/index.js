import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  MenuItem,
} from '@material-ui/core';

import API from '../../api';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  buttons: {
    margin: '0 auto',
  },

  addButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: theme.spacing(3, 0, 2),
  },
  dialog: { borderRadius: '10px !important' },
  title: {
    fontWeight: 700,
  },
}));

const gradeList = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '중1', label: '중1' },
  { value: '중2', label: '중2' },
  { value: '중3', label: '중3' },
];

const schoolList = [
  { value: '치현초등학교', label: '치현초등학교' },
  { value: '삼정초등학교', label: '삼정초등학교' },
  { value: '개화초등학교', label: '개화초등학교' },
  { value: '정곡초등학교', label: '정곡초등학교' },
  { value: '방화초등학교', label: '방화초등학교' },
  { value: '송화초등학교', label: '송화초등학교' },
  { value: '삼정중학교', label: '삼정중학교' },
  { value: '방원중학교', label: '방원중학교' },
  { value: '송정중학교', label: '송정중학교' },
];

export default function AddStudent(props) {
  const classes = useStyles();

  const [input, setInput] = useState({ school: '치현초등학교', grade: '1' });

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    const obj = {
      name: input.name,
      grade: input.grade,
      school: input.school,
      phone_number: input.phone_number,
      parent: {
        parent_name: input.pName,
        parent_number: input.pNumber,
      },
    };

    (async () => {
      try {
        await API.post('students', obj);
        props.getNewList();
        props.modalClose();
      } catch (e) {
        console.log(e);
      }
    })();
  };

  return (
    <>
      <CssBaseline />
      <Dialog
        open={props.open}
        aria-labelledby="form-dialog-title"
        classes={{
          paper: classes.dialog,
        }}
        component={Paper}
        onBackdropClick={props.modalClose}
        onEscapeKeyDown={props.modalClose}
      >
        <DialogTitle id="form-dialog-title" align="center">
          <Typography variant="h6" className={classes.title}>
            새 학생 추가하기
          </Typography>
        </DialogTitle>
        <DialogContent dividers={true}>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="name"
                  variant="filled"
                  required
                  fullWidth
                  id="name"
                  label="이름"
                  autoFocus
                  onChange={inputHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  select
                  id="grade"
                  label="학년"
                  name="grade"
                  value={input.grade ?? ''}
                  onChange={inputHandler}
                >
                  {gradeList.map((grade) => (
                    <MenuItem key={grade.value} value={grade.value}>
                      {grade.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  select
                  id="school"
                  label="학교"
                  name="school"
                  value={input.school ?? ''}
                  onChange={inputHandler}
                >
                  {schoolList.map((school) => (
                    <MenuItem key={school.value} value={school.value}>
                      {school.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={6} sm={6}>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  placeholder="서울시"
                ></TextField>{' '}
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  placeholder="강서구"
                ></TextField>{' '}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  name="phone_number"
                  label="연락처"
                  type="phone"
                  id="phone_number"
                  onChange={inputHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="pName"
                  variant="filled"
                  required
                  fullWidth
                  id="name"
                  label="부모님 성함"
                  autoFocus
                  onChange={inputHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  id="phone_number"
                  label="부모님 연락처"
                  name="pNumber"
                  onChange={inputHandler}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions className={classes.buttons}>
          <Button
            color="primary"
            className={classes.addButton}
            onClick={submitHandler}
          >
            추가하기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
