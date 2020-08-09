import React from 'react';
import styled from 'styled-components';
import '../App.css';

const MemberGroup = styled.div`
	color: palevioletred;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

const MemberTitle = styled.h2`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;

const Member = styled.p`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;

const TeamDisplay = (props) => {
  return (
    <div className="App">
        {props.teams.map(team => (
          <MemberGroup key={team.id}>
            <MemberTitle>{team.name}</MemberTitle>
            <Member>{team.email}</Member>
            <Member>{team.role}</Member>
          </MemberGroup>
        ))}
    </div>
  );
}

export default TeamDisplay;