import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AddStudent from '../AddStudent';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';

import * as ROUTES from '../../constants/routes';

import Placeholder from './NoData.svg';

// Custom Components
import API from '../../api';

const useStyles = makeStyles({
  main: { background: '#F1F1F1', height: '100vh' },
  content: {
    padding: '6rem 2rem',
  },
  addButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '17px',
    fontWeight: 500,
    fontSize: '15px',
  },
  link: {
    textDecoration: 'none',
  },
  placeholderContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  elevation4: {
    boxShadow: 'none',
  },
  subNavPaper: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  subNavGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  AppButton: {
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 700,
  },
  noStudentTitle: {
    marginBottom: '2rem',
    fontSize: '28px',
    fontWeight: 700,
  },
  toolbar: {
    padding: '0 10px',
  },
  toolbarGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const NoStudent = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Container
        classes={{
          root: classes.placeholderContent,
        }}
      >
        <Typography variant="h5" className={classes.noStudentTitle}>
          학생들이 없습니다. 학생을 추가해주세요.
        </Typography>
        <div>
          <img src={Placeholder} alt="Placeholder" />
        </div>
      </Container>
    </div>
  );
};

// const columns = [
//   { field: 'name', headerName: '이름' },
//   { field: 'school', headerName: '학교' },
//   { field: 'grade', headerName: '학년' },
//   { field: 'phoneNumber', headerName: '연락처' },
//   { field: 'parentName', headerName: '부모님 성함' },
//   { field: 'parentNumber', headerName: '부모님 연락처' },
// ];

// API.get('/students')
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const rows = [
  // {
  //   name: '강지훈',
  //   school: '치현초등학교',
  //   grade: '3학년',
  //   phoneNumber: '010-8000-1234',
  //   parentName: '김수지',
  //   parentNumber: '010-1233-3909',
  // },
  // {
  //   name: '강지훈',
  //   school: '치현초등학교',
  //   grade: '3학년',
  //   phoneNumber: '010-8000-1234',
  //   parentName: '김수지',
  //   parentNumber: '010-1233-3909',
  // },
  // {
  //   name: '강지훈',
  //   school: '치현초등학교',
  //   grade: '3학년',
  //   phoneNumber: '010-8000-1234',
  //   parentName: '김수지',
  //   parentNumber: '010-1233-3909',
  // },
  // {
  //   name: '강지훈',
  //   school: '치현초등학교',
  //   grade: '3학년',
  //   phoneNumber: '010-8000-1234',
  //   parentName: '김수지',
  //   parentNumber: '010-1233-3909',
  // },
];

const MyStudents = (props) => {
  const classes = useStyles();

  const studentList = props.studentList;
  return (
    <>
      {studentList.map((student) => {
        return student.name;
      })}
    </>
  );
};

const ShowStudents = () => {
  const classes = useStyles();

  const [formOpen, setFormOpen] = useState(false);

  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await API.get('students');
      console.log(res.data);
      setStudentList(res.data);
    })();
  }, []);

  const handleClickOpen = () => {
    setFormOpen(true);
  };

  const handleClose = () => {
    setFormOpen(false);
  };
  return (
    <div className={classes.main}>
      <AppBar position="static" elevation={false} color="primary">
        <Toolbar className={classes.toolbar}>
          <Grid item lg={3} className={classes.toolbarGrid}>
            <Typography variant="h5">TempTrek</Typography>
          </Grid>
          <Grid container lg={6} direction="row" justify="space-evenly">
            <Button
              className={classes.AppButton}
              startIcon={<FaceRoundedIcon />}
            >
              학생명단
            </Button>
            <Button
              className={classes.AppButton}
              startIcon={<TrendingUpRoundedIcon />}
            >
              체온기록
            </Button>
          </Grid>
          <Grid item lg={3} className={classes.toolbarGrid}>
            <IconButton edge="end" className={classes.AppButton}>
              <ExitToAppRoundedIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <Paper elevation={0} className={classes.subNavPaper}>
        <Grid container>
          <Grid item xs={12} className={classes.subNavGrid}>
            <Button
              className={classes.addButton}
              onClose={handleClose}
              onClick={handleClickOpen}
            >
              학생 추가하기
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <AddStudent open={formOpen} modalClose={handleClose} />
      {studentList.length === 0 ? (
        <NoStudent />
      ) : (
        <MyStudents studentList={studentList} />
      )}
    </div>
  );
};

export default ShowStudents;
