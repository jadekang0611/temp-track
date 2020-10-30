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
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import Placeholder from './NoData.svg';
import PriorityHighRoundedIcon from '@material-ui/icons/PriorityHighRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

// Custom Components
import API from '../../api';

const dayjs = require('dayjs');

let customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

const useStyles = makeStyles({
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
  tableContainer: {
    maxWidth: '1200px',
    margin: '2rem auto',
  },
  green: { color: '#49E20E' },
  red: {
    color: 'red',
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
          아직 저장된 학생들의 체온기록이 없습니다.
        </Typography>
        <div>
          <img src={Placeholder} alt="Placeholder" />
        </div>
      </Container>
    </div>
  );
};

const MyStudentTemp = (props) => {
  const classes = useStyles();

  const studentTempList = props.studentTempList;

  const getTime = (timestamp) => {
    return dayjs(timestamp).format('hh:mm a');
  };

  const analysis = (temp) => {
    return temp < 36.9 ? (
      <CheckCircleRoundedIcon className={classes.green} />
    ) : (
      <PriorityHighRoundedIcon className={classes.red} />
    );
  };

  return (
    <>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>이름</TableCell>
              <TableCell>날짜</TableCell>
              <TableCell>시간</TableCell>
              <TableCell>체온</TableCell>
              <TableCell>체온분석</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentTempList.map((student) => (
              <TableRow key={student._id}>
                <TableCell component="th" scope="row">
                  {student.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {student.date_time.split('T')[0]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {getTime(student.date_time)}
                </TableCell>
                <TableCell component="th" scope="row">
                  {student.temperature} &#8451;
                </TableCell>
                <TableCell component="th" scope="row">
                  {analysis(student.temperature)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const ShowTemp = () => {
  const classes = useStyles();

  const [studentTempList, setStudentTempList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await API.get('logs');
      console.log(res.data);
      setStudentTempList(res.data);
    })();
  }, []);

  return (
    <div className={classes.main}>
      {studentTempList.length === 0 ? (
        <NoStudent />
      ) : (
        <MyStudentTemp studentTempList={studentTempList} />
      )}
    </div>
  );
};

export default ShowTemp;
