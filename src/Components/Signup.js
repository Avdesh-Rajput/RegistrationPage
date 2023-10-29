// import React from 'react'

// const Signup = () => {
//   return (
//      <>
//         <h1>Signup</h1>
//         <input type='text' placeholder='Name'></input>
//         <input type='email' placeholder='Email'></input>
//         <input type='password' placeholder='Password'></input>
//         <input type='password' placeholder='Confirm Password'></input>
//         <input type='Button' placeholder='Name'></input>
//      </>
//   )
// }

// export default Signup

import React from 'react';
import styled from 'styled-components';

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: rgba(255,255,255,0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38 , 135, 0.37);
    backdrop-filter:blur(8.5px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Signup = () => {
  return (
    <SignupContainer>
      <Title>Signup</Title>
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <Button>Signup</Button>
    </SignupContainer>
  );
};

export default Signup;
