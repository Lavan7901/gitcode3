import React from 'react';
import Heading from "./Components/Heading";
import Home from "./Components/Home";
import About from "./Components/About";
import Main from "./Components/Main";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return(
    <div className="App">
      <Heading />
      <Home />
      <About />
      <Main />
    </div>
  );
}
export default App;