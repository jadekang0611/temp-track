import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Grid, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
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

  //   buttonContainer: { marginTop: '2rem' },
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

  const [userData, setUserData] = useState({});
  const [search, setSearch] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    (async () => {
      const res = await API.get('students');
      setSearch(res.data);
      setSelected(res.data[0]);
      console.log(res.data);
    })();
  }, []);

  const dataHandler = (e, value) => {
    if (value != null) {
      setUserData({
        ...userData,
        name: value.name,
        student_id: value._id,
      });
    }
    setSelected(value);
  };

  const tempHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userData);
    const obj = {
      name: userData.name,
      temperature: userData.temperature,
      student_id: userData.student_id,
    };
    (async () => {
      try {
        await API.post('logs', obj);
        setSelected(search[0]);
        setUserData({ ...userData, name: '', temperature: '' });
      } catch (e) {
        console.log(e);
      }
    })();
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center" className={classes.message}>
        안녕하세요. 아래에 인적사항과 체온을 입력해주세요. &#128512;
      </Typography>

      <form noValidate autoComplete="on" className={classes.form}>
        <Grid container direction="row" justify="space-around" spacing={2}>
          <Grid item xs={12} md={3}>
            {search && (
              <Autocomplete
                options={search}
                getOptionLabel={(search) =>
                  `${search.name} (${search.grade}학년)`
                }
                value={selected}
                getOptionSelected={search.student_id}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="이름"
                    className={classes.box}
                    fullWidth
                    required
                  />
                )}
                onChange={(e, value) => {
                  dataHandler(e, value);
                }}
              />
            )}
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              variant="outlined"
              label="체온"
              className={classes.box}
              fullWidth
              required
              name="temperature"
              onChange={tempHandler}
              value={userData.temperature}
            />
          </Grid>
          <Grid item className={classes.buttonContainer} xs={12} md={3}>
            <Button
              className={classes.addButton}
              onClick={submitHandler}
              startIcon={<PublishRoundedIcon />}
            >
              입력하기
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddTemp;
