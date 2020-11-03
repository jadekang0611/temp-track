import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';

import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// Pick a date util library
import DateFnsUtils from '@date-io/date-fns';

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#FE6B8B',
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: lightBlue.A200,
        // color: "white",
      },
    },
    MuiPickersDay: {
      day: {
        color: '#FE6B8B',
      },
      daySelected: {
        backgroundColor: '#FE6B8B',
      },
      dayDisabled: {
        color: '#FE6B8B',
      },
      current: {
        color: '#FE6B8B',
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: '#FF8E53',
      },
    },
  },
});

const DatePicker = (props) => {
  const [selectedDate, setSelectedDate] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.handleDate(props.name, date);
  };

  return (
    <ThemeProvider theme={materialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          variant="dialog"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          value={selectedDate}
          onChange={handleDateChange}
          label={props.label}
          color="secondary"
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default DatePicker;
