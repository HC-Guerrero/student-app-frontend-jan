import React from 'react'

import { useParams } from "react-router-dom";

import StudentCard from '../components/studentCard/StudentCard';

const StudentDetail = () => {

    let { studentId } = useParams();

    return (
        <div className="studentDetail">
            <StudentCard studentId={studentId} />
        </div>
    )
}

export default StudentDetail