

import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram , AiOutlineGooglePlus } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const LoginContainer = styled.div`
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

 
const SocialIcons = styled.div`
display: flex;
gap: 20px;
margin-top: 20px;


svg {
  font-size: 24px;
  color: black /* Change the color to your desired color */
  cursor: pointer;
  box-shadow: 10px 10px 10px  rgba(0, 0, 0, 0.2); 
  

  &:hover {
    color: #0056b3;
   
  }
}
`;


const Login = () => {
  return (
    <LoginContainer>
      <Title>Login</Title>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button>Login</Button>
       <h4>OR</h4>
      <SocialIcons>
      <AiOutlineInstagram />
      <AiOutlineGooglePlus/>
      <VscGithub />
      </SocialIcons>
    </LoginContainer>
  );
};

export default Login;
