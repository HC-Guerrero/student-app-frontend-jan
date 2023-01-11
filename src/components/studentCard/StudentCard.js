import React from 'react'

import AddIcon from '@mui/icons-material/Add';

import './StudentCard.scss';

const StudentCard = () => {
  return (
    <div className="studentCard">
        <div className="studentCard__image">
            <img src='https://via.placeholder.com/150' />
        </div>
        <div className="studentCard__profile">
            <div className="studentCard__name">
            Ash Ketchum
            </div>
            <div className="studentCard__info">
            <div>Email: ash@pokemon.org</div>
            <div>Company: Nintendo</div>
            <div>Skill: Training</div>
            </div>
        </div>
        <div className="studentCard__toggleGrades">
            <AddIcon fontSize="inherit"/>
        </div>
    </div>
  )
}

export default StudentCard