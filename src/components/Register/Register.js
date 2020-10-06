import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Register = () => {

  const classes = useStyles();
  const { name } = useParams();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [selectedDate, setSelectedDate] = useState({
    startEvent: new Date(),
    endEvent: new Date() 
  });


  const handleStartDate = (date) => {
    const newDates = {...selectedDate}
    newDates.startEvent = date
    setSelectedDate(newDates);
  };

  const handleEndDate = (date) => {
    const newDates = {...selectedDate}
    newDates.endEvent = date
    setSelectedDate(newDates);
  };


  const handleForm = () => {
    
    const newEvent = {...loggedInUser, ...selectedDate};
    
    fetch('http://localhost:5000/addEvent', {
      method: 'POST',
      headers: { 'Content-Type':'application/json'},
      body: JSON.stringify(newEvent)
    
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }

  return (
    <form action="/addEvent" method="post" className={classes.root} noValidate autoComplete="off">
      <TextField id="name" label="Full Name" value={loggedInUser.name} />
      <br />
      <TextField id="email" label="Email" value={loggedInUser.email} />
      <br />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Start Event"
            value={selectedDate.startEvent}
            onChange={handleStartDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="End Event"
            format="dd/MM/yyyy"
            value={selectedDate.endEvent}
            onChange={handleEndDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />

        </Grid>
      </MuiPickersUtilsProvider>
      <br />
      <TextField id="description" label="Description"  />
      <br />
      <TextField id="name" label="Event Name" value={name} />
      <br />
      <Button onClick={handleForm} variant="contained" color="primary">Registration</Button>
    </form>
  );
};

export default Register;