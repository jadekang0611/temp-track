import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AddStudent from '../AddStudent';

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

const NoStudent = () => {
  const classes = useStyles();
  const [formOpen, setFormOpen] = useState(false);

  const handleClickOpen = () => {
    setFormOpen(true);
  };

  const handleClose = () => {
    setFormOpen(false);
  };
  return (
    <div className={classes.content}>
      <Container>
        <Typography variant="h5">
          학생들이 없습니다. 학생을 추가해주세요.
        </Typography>

        <Button
          className={classes.addButton}
          onClose={handleClose}
          onClick={handleClickOpen}
        >
          학생 추가하기
        </Button>
        <AddStudent open={formOpen} modalClose={handleClose} />
      </Container>
    </div>
  );
};

const Students = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography>Show Student List</Typography>
    </div>
  );
};

const list = [];

const ShowStudents = () => {
  const classes = useStyles();
  return list.length === 0 ? <NoStudent /> : <Students />;
};

export default ShowStudents;
