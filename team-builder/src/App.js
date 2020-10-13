import React, { useState } from 'react';
import TeamForm from './components/TeamForm';
import TeamDisplay from './components/TeamDisplay';
import './App.css';

function App() {
  const [ teams, setTeams ] = useState([
    {
      id: 1, 
      name: "", 
      email: "",
      role: ""
    }
  ])

  const addNewMember = (team) => {
    const newMember = {
      id: Date.now(),
      name: team.name, 
      email: team.email, 
      role: team.role
    }
    setTeams([...teams, newMember])
  }

  return (
    <div className="App">
        <TeamForm addNewMember={addNewMember} />
        <TeamDisplay teams={teams} />
    </div>
  );
}

export default App;
