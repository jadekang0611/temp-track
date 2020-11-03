import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// Pick a date util library
import DateFnsUtils from '@date-io/date-fns';

const DatePicker = (props) => {
  const [selectedDate, setSelectedDate] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.handleDate(props.name, date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        variant="dialog"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        value={selectedDate}
        onChange={handleDateChange}
        label={props.label}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
