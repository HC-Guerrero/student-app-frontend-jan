import React from 'react'

import { useParams } from "react-router-dom";

import { Snackbar, Alert } from '@mui/material';

import StudentCard from '../components/studentCard/StudentCard';

const StudentDetail = () => {

    let { studentId } = useParams();

    return (
        <div className="studentDetail">
            <Snackbar
                open={true}
                autoHideDuration={3000}
            >
                <Alert severity="success">Student was added successfully!</Alert>
            </Snackbar>
            <StudentCard studentId={studentId} />
        </div>
    )
}

export default StudentDetail