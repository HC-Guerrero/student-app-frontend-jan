import React, {useState, useEffect} from 'react'

// import { useParams } from "react-router-dom";

import {Add, Remove} from '@mui/icons-material';

import EmptyView from '../emptyView/EmptyView';
import Icon from '../icon/Icon';

import './StudentCard.scss';

type StudentCardProps = {
  studentData?: any,
  studentId?: string
}

interface Student {
  first_name?: string;
  last_name?: string;
  email?: string;
  company?: string;
  skill?: string;
  pic?: string;
  grades?: number[];
}


const StudentCard = ({studentData, studentId}: StudentCardProps) => {

  const [student, setStudent] = useState<Student>({
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    skill: '',
    pic: '',
    grades:[]
  });

  const [showGrades, setShowGrades] = useState(false);

  const {first_name: firstName, last_name: lastName, email, company, skill, pic, grades} = student;

  useEffect(() => {
    if(studentData){
      setStudent(studentData);
    } else {
      fetch(`http://localhost:9000/students/${studentId}`)
      .then(response => response.json())
      .then(data => {
        data.grades = [];
        setStudent(data);
      })
    }
    
  }, [])
 

  const toggleGrades = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();

    if(!showGrades){
      // TODO: change plus icon to loader

      setShowGrades(true);
    } else {
      setShowGrades(false);
    }
  }

  // BEM
  //B - block
  //E - element
  //M - modifier
  return (
    <div className="studentCard">
        <div className="studentCard__image">
            <img src={pic} />
        </div>
        <div className="studentCard__profile">
            <div className="studentCard__name">
            {firstName} {lastName}
            </div>
            <div className="studentCard__info">
            <div>Email: {email}</div>
            <div>Company: {company}</div>
            <div>Skill: {skill}</div>
            <div 
              className="studentCard__grades" 
              style={{"display" : showGrades ? "block" : "none"}}
            >
              {grades &&  grades.length > 0 && grades.map((grade,index) => {
                return (
                  <div 
                    className="studentCard__grade" 
                    key={index+1}
                  >
                    <span>Test {index+1}:</span>
                    <span>{grade}%</span>
                  </div>)
              })}
              {(!grades || grades.length === 0) && <EmptyView message="No grades for this student." />}
            </div>
            </div>
        </div>
        <div className="studentCard__toggleGrades">
            {!showGrades && 
            <Icon onClick={toggleGrades}>
              <Add fontSize="inherit"/>
            </Icon>
            }
            {showGrades && 
             <Icon onClick={toggleGrades}>
              <Remove fontSize="inherit"/>
            </Icon>
            }
        </div>
    </div>
  )
}

export default StudentCard