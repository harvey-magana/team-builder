import React, { useState } from 'react';
import '../App.css';

const TeamForm = () => {
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