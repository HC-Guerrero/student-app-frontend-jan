import React from 'react'

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import './StudentForm.scss';

const StudentForm = () => {
  return (
    <div className="studentForm">
        <div className="studentForm__title">Add Student: </div>
        <div className="studentForm__inputs">
        <TextField 
            id="outlined-basic" 
            label="First Name" 
            variant="outlined" />
        <TextField 
            id="outlined-basic" 
            label="Last Name" 
            variant="outlined" />
        <TextField 
            id="outlined-basic" 
            label="Company" 
            variant="outlined" />
        <TextField 
            id="outlined-basic" 
            label="Skill" 
            variant="outlined" />
        </div>

        <div className="studentForm__button">
            <Button variant="contained">Add Student</Button>
        </div>
       
    </div>
  )
}

export default StudentForm;