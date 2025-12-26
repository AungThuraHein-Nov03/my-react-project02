import {Routes, Route} from "react-router-dom";
import './App.css'
import Register from "./Register";

export function App() {
  return(
    <Router>
     <Routes>
      <Route path='/' element = {<Register/>}/>
    </Routes>
    </Router>
  );
}

