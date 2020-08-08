import React, { useState } from 'react';
import TeamForm from './components/TeamForm';
import TeamDisplay from './components/TeamDisplay';
import './App.css';

function App() {
  const [ teams, setTeams ] = useState([
    {
      id: 1, 
      name: "Jeff", 
      email: "jeff@lebowsky.com",
      role: "Actor"
    }
  ])

  const addNewMember = team => {
    const newMember = {
      id: Date.now(),
      name: team.name, 
      email: team.email, 
      role: team,role
    }
    setTeams([...teams, newMember])
  }

  return (
    <div className="App">
        <TeamForm />
        <TeamDisplay />
    </div>
  );
}

export default App;
