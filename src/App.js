// import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
// import Home from "./Pages/Home";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
// import { GlobalStyle } from "./GlobalStyle";
// import Registration from "./Pages/Registration";

// function App() {
//   return (
//     <Router>
//      <GlobalStyle>
//       <Routes>
//         <Route path="/" element={<Home />}/>    
//         <Route path="/login" element={<Registration />}/> 
//         <Route path="/signup" element={<Signup />}/> 
//       </Routes>
//      </GlobalStyle>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Pages/Registration';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<><Registration /></>}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

