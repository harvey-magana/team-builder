import React, { useState } from 'react';
import styled from 'styled-components';
import '../App.css';

const Form = styled.form`
	color: palevioletred;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

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

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
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
    console.log("This works...");
    props.addNewMember(members)
  }

  return (
    <div className="App">
        <Form onSubmit={submitForm}>
            <FormGroup>
                <Label htmlFor="label">Name:</Label>
                <Input id="label" name="name" onChange={onLineChange} />
                <Label htmlFor="label">Email:</Label>
                <Input id="label" name="email" onChange={onLineChange} />
                <Label htmlFor="label">Role:</Label>
                <Input id="label" name="role" onChange={onLineChange} />
                <Button primary>Primary</Button>
            </FormGroup>
        </Form>
    </div>
  );
}

export default TeamForm;