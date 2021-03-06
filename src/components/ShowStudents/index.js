import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Grid,
  Button,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import Placeholder from './NoData.svg';

import AddStudent from '../AddStudent';

// Custom Components
import API from '../../api';

const useStyles = makeStyles({
  content: {
    padding: '6rem 2rem',
  },
  paper: { maxWidth: '1200px', margin: '2rem auto' },
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
  tableContainer: {
    maxWidth: '1200px',
    margin: '2rem auto',
    maxHeight: 500,
  },
  tableCol: {
    color: 'rgba(17, 7, 37, 0.5)',
    fontSize: 15,
    fontWeight: 600,
  },
  tableRow: {
    color: '#110725',
    fontSize: 15,
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

const MyStudents = (props) => {
  const classes = useStyles();

  const studentList = props.studentList;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const pageChangeHandler = (e, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageHandler = (e) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  const formatter = (number) => {
    return (
      number.substr(0, 3) +
      '-' +
      number.substr(3, 4) +
      '-' +
      number.substr(7, 4)
    );
  };

  return (
    <Paper className={classes.paper}>
      <TableContainer
        className={classes.tableContainer}
        elevation={0}
        component={Paper}
      >
        <Table className={classes.table} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCol}>이름</TableCell>
              <TableCell className={classes.tableCol}>학교</TableCell>
              {/* <TableCell>생년월일</TableCell> */}
              <TableCell className={classes.tableCol}>학년</TableCell>
              <TableCell className={classes.tableCol}>연락처</TableCell>
              <TableCell className={classes.tableCol}>부모님 성함</TableCell>
              <TableCell className={classes.tableCol}>부모님 연락처</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentList.map((student) => (
              <TableRow key={student._id}>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tableRow}
                >
                  {student.name}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tableRow}
                >
                  {student.school}
                </TableCell>
                {/* <TableCell component="th" scope="row">
                  {student.dob.split('T')[0]}
                </TableCell> */}
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tableRow}
                >
                  {student.grade}학년
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tableRow}
                >
                  {formatter(student.phone_number)}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tableRow}
                >
                  {student.parent.parent_name}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tableRow}
                >
                  {formatter(student.parent.parent_number)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={studentList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={pageChangeHandler}
        onChangeRowsPerPage={rowsPerPageHandler}
      />
    </Paper>
  );
};

const ShowStudents = () => {
  const classes = useStyles();

  document.title = 'Tempture | My Students';

  const [studentList, setStudentList] = useState([]);

  const [formOpen, setFormOpen] = useState(false);

  const handleClickOpen = () => {
    setFormOpen(true);
  };

  const handleClose = () => {
    setFormOpen(false);
  };

  useEffect(() => {
    (async () => {
      const res = await API.get('students');
      console.log(res.data);
      setStudentList(res.data);
    })();
  }, []);

  const getNewList = () => {
    (async () => {
      const res = await API.get('students');
      console.log(res.data);
      setStudentList(res.data);
    })();
  };

  return (
    <div className={classes.main}>
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
      <AddStudent
        open={formOpen}
        modalClose={handleClose}
        getNewList={getNewList}
      />
      {studentList.length === 0 ? (
        <NoStudent />
      ) : (
        <MyStudents studentList={studentList} />
      )}
    </div>
  );
};

export default ShowStudents;
