import React, { useState } from 'react';
import styled from 'styled-components';
import '../App.css';

const FormGroup = styled.div`
	color: palevioletred;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

const Label = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;


const Input = styled.input`
	padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

const Message = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TeamForm = (props) => {
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
    console.log(props);
    props.addNewMember(members);
  }

  return (
    <div className="App">
        <FormGroup onSubmit={submitForm}>
        <Label htmlFor="label">Name</Label>
        <Input id="label" name="name" onChange={onLineChange} />
        <Label>Email</Label>
        <Input name="email" onChange={onLineChange} />
        <Label>Role</Label>
        <Input name="role" onChange={onLineChange} />
        <Message>This is the validation message</Message>
        <Button type="submit" primary>Primary</Button>
        </FormGroup>
    </div>
  );
}

export default TeamForm;