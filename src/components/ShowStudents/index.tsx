import React from 'react';
import { Container, Grid, Typography, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';
import * as ROUTES from '../../constants/routes';

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
    marginTop: '2rem',
  },
  link: {
    textDecoration: 'none',
  },
});

const rows: RowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'XGrid', col2: 'is Awesome' },
  { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
];

const columns: ColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

function NoStudent() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Container>
        <Typography variant="h5">
          학생들이 없습니다. 학생을 추가해주세요.
        </Typography>
        <Link to={ROUTES.ADDSTUDENT} className={classes.link}>
          <Button className={classes.addButton}>학생 추가하기</Button>
        </Link>
      </Container>
    </div>
  );
}

function Students() {
  const classes = useStyles();
  return (
    <div>
      <DataGrid rows={rows} columns={columns}></DataGrid>
    </div>
  );
}

const list = [];

const ShowStudents = () => {
  const classes = useStyles();
  return list.length === 0 ? <NoStudent /> : <Students />;
};

export default ShowStudents;
