import React, { useState } from 'react';
import '../App.css';

const TeamForm = () => {
  const [ members, setMembers ] = useState({
      name: '', 
      email: '', 
      role: '',
  })

  return (
    <div className="App">
        <form>
            <label>
                Name:
                <input />
            </label>
            <label>
                Email:
                <input />
            </label>
            <label>
                Role:
                <input />
            </label>
        </form>
    </div>
  );
}

export default TeamForm;