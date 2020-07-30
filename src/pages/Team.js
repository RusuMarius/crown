import React from 'react';
import Doctor from '../components/Doctor';
import './scss/team.scss';

class Team extends React.Component {
    render() {
        return (
            <div>
            <div className="team-hero">


            </div>
                <div className='main-container' id='team-box'>
                    <Doctor />
                </div>
            </div>
        );
    }
}

export default Team;
