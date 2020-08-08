import React, { useState } from 'react';
import TeamForm from './components/TeamForm';
import TeamDisplay from './components/TeamDisplay';
import './App.css';

function App() {
  const [ teams, setTeams ] = useState([
    {
      id: 1, 
      name: "Jeff", 
      role: "Actor"
    }
  ])

  return (
    <div className="App">
        <TeamForm />
        <TeamDisplay />
    </div>
  );
}

export default App;
