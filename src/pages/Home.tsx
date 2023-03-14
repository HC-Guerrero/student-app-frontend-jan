import React from 'react'
import { useNavigate } from 'react-router-dom';

import PageLayout from '../layout/pageLayout/PageLayout';

// Custom Components
import StudentCardList from '../components/studentCardList/StudentCardList'

// Material UI
import Button from '@mui/material/Button';

const Home = () => {

    let navigate  = useNavigate();

    return (
        <PageLayout>
            <Button 
                style={{"float": "right"}} 
                variant="contained"
                onClick={() => navigate('/students/new')}
                >
                    Add Student
            </Button>
            <div style={{ "clear" : "both"}} />
            <StudentCardList />
        </PageLayout>
    )
}

export default Home;