import React from 'react';
import Whatshot from '@material-ui/icons/Whatshot';
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
  { value: 1, label: '1학년' },
  { value: 2, label: '2학년' },
  { value: 3, label: '3학년' },
  { value: 4, label: '4학년' },
  { value: 5, label: '5학년' },
  { value: 6, label: '6학년' },
  { value: 7, label: '중1' },
  { value: 8, label: '중2' },
  { value: 9, label: '중3' },
];

const schoolList = [
  { value: 's1', label: '치현초등학교' },
  { value: 's2', label: '삼정초등학교' },
  { value: 's3', label: '개화초등학교' },
  { value: 's4', label: '정곡초등학교' },
  { value: 's5', label: '방화초등학교' },
  { value: 's6', label: '송화초등학교' },
  { value: 's7', label: '삼정중학교' },
  { value: 's8', label: '방원중학교' },
  { value: 's9', label: '송정중학교' },
];

export default function AddStudent(props) {
  const classes = useStyles();

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
                >
                  {schoolList.map((school) => (
                    <MenuItem key={school.value} value={school.value}>
                      {school.label}
                    </MenuItem>
                  ))}
                </TextField>
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
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="name"
                  variant="filled"
                  required
                  fullWidth
                  id="name"
                  label="부모님 성함"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  id="phone_number"
                  label="부모님 연락처"
                  name="phone_number"
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions className={classes.buttons}>
          <Button
            onClick={props.modalClose}
            color="primary"
            className={classes.addButton}
          >
            추가하기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
