import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import './KRFonts.js';

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
  CircularProgress,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import Placeholder from './NoData.svg';
import PriorityHighRoundedIcon from '@material-ui/icons/PriorityHighRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

// Custom Components
import API from '../../api';
import DatePicker from '../DatePicker';

const dayjs = require('dayjs');

let customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

const useStyles = makeStyles({
  content: {
    padding: '6rem 2rem',
  },
  downloadButton: {
    background: ' #FE6B8B ',
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

  searchButton: {
    background: '#2196F3',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '17px',
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
  paper: { maxWidth: '1200px', margin: '2rem auto' },
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

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const pageChangeHandler = (e, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageHandler = (e) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

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
    <Paper className={classes.paper}>
      <TableContainer
        className={classes.tableContainer}
        elevation={0}
        component={Paper}
      >
        <Table className={classes.table} stickyHeader>
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
            {studentTempList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((student) => (
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={studentTempList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={pageChangeHandler}
        onChangeRowsPerPage={rowsPerPageHandler}
      />
    </Paper>
  );
};

const ShowTemp = () => {
  const classes = useStyles();

  const [studentTempList, setStudentTempList] = useState([]);

  const [loading, setLoading] = useState(false);

  const [dates, setDates] = useState({
    startDate: '',
    endDate: '',
  });

  const handleDate = (name, date) => {
    console.log(name);
    console.log(date);
    setDates({
      ...dates,
      [name]: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      try {
        setLoading(true);
        let obj = {
          firstDate: dates.startDate,
          secondDate: dates.endDate,
        };
        console.log(obj.firstDate);
        console.log(obj.secondDate);
        const res = await API.post('logs/date', obj);
        setLoading(false);
        setStudentTempList(res.data);
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
    })();
  };

  useEffect(() => {
    (async () => {
      const res = await API.get('logs');
      setStudentTempList(res.data);
    })();
  }, []);

  const getTime = (timestamp) => {
    return dayjs(timestamp).format('hh:mm a');
  };

  //<------- PDF Generator starts here -------->//
  const handleDownload = (e) => {
    console.log('here');

    const doc = new jsPDF();
    const tableRows = [];
    console.log('start');

    studentTempList.forEach((data) => {
      const data_obj = [
        data.name,
        data.date_time.split('T')[0],
        getTime(data.date_time),
        data.temperature,
      ];
      tableRows.push(data_obj);
    });

    let finalY = doc.lastAutoTable.finalY || 10;
    doc.setFont('NanumSquare_acR');
    doc.text('방화동성 e해법수학 학생 체온 기록', 14, finalY + 15);
    autoTable(doc, {
      theme: 'grid',
      startY: finalY + 20,
      margin: { top: 20 },
      columns: [
        { dataKey: 'name', header: '이름' },
        { dataKey: 'date', header: '날짜' },
        { dataKey: 'time', header: '시간' },
        { dataKey: 'temperature', header: '체온' },
      ],
      body: tableRows,
      columnStyles: {
        name: { font: 'NanumSquare_acR' },
        date: { font: 'NanumSquare_acR' },
        time: { font: 'NanumSquare_acR' },
        temperature: { font: 'NanumSquare_acR' },
      },
      allSectionHooks: true,
      didParseCell: function (data) {
        if (
          data.column.dataKey === 'name' ||
          data.column.dataKey === 'date' ||
          data.column.dataKey === 'time' ||
          data.column.dataKey === 'temperature'
        ) {
          data.cell.styles.font = 'NanumSquare_acR';
        }
      },
    });
    doc.save(`report.pdf`);
    // Define the columns I want and their titles
  };

  //<------- PDF Generator ends here -------->//

  return (
    <div className={classes.main}>
      <Paper elevation={0} className={classes.subNavPaper}>
        <Grid container direcion="row" justify="space-evenly">
          <DatePicker label="From" name="startDate" handleDate={handleDate} />
          <DatePicker label="To" name="endDate" handleDate={handleDate} />
          <Button className={classes.searchButton} onClick={handleSubmit}>
            기록 찾기
          </Button>
          <Button className={classes.downloadButton} onClick={handleDownload}>
            기록 다운받기
          </Button>
        </Grid>
      </Paper>
      {studentTempList.length === 0 ? (
        <NoStudent />
      ) : (
        <MyStudentTemp studentTempList={studentTempList} />
      )}
      <Grid item xs={12}>
        {loading && <CircularProgress />}
      </Grid>
    </div>
  );
};

export default ShowTemp;
