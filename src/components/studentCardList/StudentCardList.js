import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';


import SearchBar from "../searchBar/SearchBar";
import StudentCard from '../studentCard/StudentCard';
import EmptyView from "../emptyView/EmptyView";

import './StudentCardList.scss';

const StudentCardList = () => {
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    // fetch all student data
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:9000/students')
        .then(res => res.json())
        .then(data => {
            setStudents(data);
            setLoading(false)
        })
    }, [])


    let filteredStudentList = students;

    // if there is a search term
    if(searchTerm){
      // make searchterm all lowercase
      let searchTermLowerCase = searchTerm.toLowerCase();

      // filter the list of students to only include those who have the search term in their name
      filteredStudentList = students.filter(student => {
        const fullName = `${student.firstName} ${student.lastName}`;
        const fullNameLowerCase = fullName.toLowerCase();
        return fullNameLowerCase.includes(searchTermLowerCase);
      })
    }

    return (
        <div className="studentCardList">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="studentCardList__container">
            {filteredStudentList.map((student, idx) => {
              return (
                <Link to={`/students/${student.id}`} key={idx+1}>
                  <StudentCard studentData={student}  />
                </Link>
              )
            })}
          </div>
          {loading && <div>Loading...</div>}
          {!loading && filteredStudentList.length === 0 && <EmptyView styleKey="bold" message="No Students Found"/>}
        </div>
    )
}

export default StudentCardList;