// import React, { useState } from 'react'
// import styled from "styled-components"
// import Login from '../Components/Login';

// const Registration = () => {

//   const Wrapper = styled.div`
//      height:100vh;
//      width:100vw;
//      display:flex;
//      justify-content:center;    
//   `
//   const Inwrapper = styled.div`
//       height:80vh;
//       width:80vw;
//       background-color:red;
//    `

//   return (
//     <Wrapper>
//       <Inwrapper>
//         <Login />
//         <button>new user</button>
//       </Inwrapper>
//     </Wrapper>
//   )
// }

// export default Registration

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Login from '../Components/Login';

const Registration = () => {
  
  const [show ,  setShow] = useState(false);


  const Uwrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items:center;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      background-image: url('./images/back.jpg');
      background-size:cover;
   `

  const Wrapper = styled.div`
    height: 80vh;
    width: 80%;
    display: flex;
    justify-content: center;
    background: rgba(255,255,255,0.15);
    align-items:center;
    border-radius:20px;
    background: rgba(255,255,255,0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38 , 135, 0.37);
    backdrop-filter:blur(8.5px);
  `;

  const Inwrapper = styled.div`
    height: 70vh;
    width: 80%;
    margin-left:20px;
    background: rgba(255,255,255,0);
    display: flex;
    flex-direction: column;
    align-items: center;
   border-radius: 20px;
  
  `;

  const Inwrappers = styled.div`
    height: 80vh;
    width: 80vw;
    background: rgba(255,255,255,0);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px){
        display: none;
      }
  `;

   const Img = styled.img`
      height:100%;
      width: 90%
    `
  //  const Btn = styled.button`
  //      height: 100%;
  //      width: 50%

  //   `

  
  const Btn = styled.button`
    height: 100%;
    width: 50%;
    background-color: #007bff; /* Blue background color */
    color: #fff; /* White text color */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: rgba(255,255,255,0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38 , 135, 0.37);
    backdrop-filter:blur(8.5px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   
    &:hover {
      background-color: #0056b3; /* Darker blue on hover */
    }
  `;

    const Cwrapper = styled.div`
         height: 6%;
         width: 80%;
         background: rgba(255,255,255,0);
        margin-top: 20px; 
        margin-bottom: 20px;
    `
  

  return (
   <Uwrapper>
    <Wrapper>
      <Inwrappers>
         <Img src='./images/login.png' alt='logo' />  
      </Inwrappers>


      <Inwrapper>
       
       <Cwrapper>
        <Link to="login">
         <Btn>Login</Btn>
         </Link>
        <Link to="signup">
         <Btn style={{backgroundColor: 'red'}}>Signup</Btn>
        </Link>
       </Cwrapper>
       <Outlet /> 
      </Inwrapper>

    </Wrapper>
    </Uwrapper> 
  );
};

export default Registration;
