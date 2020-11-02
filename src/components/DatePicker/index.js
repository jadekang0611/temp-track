import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// Pick a date util library
import DateFnsUtils from '@date-io/date-fns';

const DatePicker = () => {
  const [selectedBegDate, setSelectedBegDate] = useState();
  const [selectedEndDate, setSelectedEndDate] = useState();

  const begDateHandler = (date) => {
    setSelectedBegDate(date);
  };

  const endDateHandler = (date) => {
    setSelectedEndDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        variant="dialog"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        value={selectedBegDate}
        onChange={begDateHandler}
      />
      <KeyboardDatePicker
        variant="dialog"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        value={selectedEndDate}
        onChange={endDateHandler}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
