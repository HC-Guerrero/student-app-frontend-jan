import React, {useState} from 'react'

import { useParams, useLocation } from "react-router-dom";

import { Snackbar, Alert } from '@mui/material';

import StudentCard from '../components/studentCard/StudentCard';

const StudentDetail = () => {

    let { studentId } = useParams();
    const location = useLocation();

    const [showSnackbar, setShowSnackbar] = useState(location.state?.isNewlyCreated);

    return (
        <div className="studentDetail">
            <Snackbar
                open={showSnackbar}
                autoHideDuration={3000}
                onClose={() => setShowSnackbar(false)}
                anchorOrigin={{"vertical": 'top', "horizontal": 'center'}}
            >
                <Alert severity="success">Student was added successfully!</Alert>
            </Snackbar>
            <StudentCard studentId={studentId} />
        </div>
    )
}

export default StudentDetail