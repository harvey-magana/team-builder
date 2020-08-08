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

  const submitForm = (event) => {
    event.preventDefault();
    console.log("This works...");

  }

  return (
    <div className="App">
        <form onSubmit={submitForm}>
            <label>
                Name:
                <input name="name" onChange={onLineChange} />
            </label>
            <label>
                Email:
                <input name="email" onChange={onLineChange} />
            </label>
            <label>
                Role:
                <input name="role" onChange={onLineChange} />
            </label>
            <button>Submit</button>
        </form>
    </div>
  );
}

export default TeamForm;