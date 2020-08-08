import React, { useState } from 'react';
import '../App.css';

const TeamForm = () => {
  const [ members, setMembers ] = useState({
      name: '', 
      email: '', 
      role: '',
  })

  const onLineChange = event => {
      setMembers({
          ...members, 
          [event.target.name]: event.target.value
      })
  }

  return (
    <div className="App">
        <form>
            <label>
                Name:
                <input name="name" onchange={onLineChange} />
            </label>
            <label>
                Email:
                <input name="email" onchange={onLineChange} />
            </label>
            <label>
                Role:
                <input name="role" onchange={onLineChange} />
            </label>
        </form>
    </div>
  );
}

export default TeamForm;