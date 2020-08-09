import React from 'react';
import styled from 'styled-components';
import '../App.css';

const TeamDisplay = (props) => {
  return (
    <div className="App">
        {props.teams.map(team => (
          <div className="member" key={team.id}>
            <h2>{team.name}</h2>
            <p>{team.email}</p>
            <p>{team.role}</p>
          </div>
        ))}
    </div>
  );
}

export default TeamDisplay;