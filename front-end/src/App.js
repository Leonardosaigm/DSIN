import { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Schedule from "./pages/schedule";
import { Route, Routes } from "react-router-dom";


function App() {
  const [id, setId] = useState('');


  return (
  <>
    <Navbar userId = {id}/>
    <div className="container">
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/register" element= {<Register />} />
        <Route path="/schedule" element= {<Schedule userId = {id}/>} />
        <Route path="/login" element= {<Login setId= {setId}/>} />
      </Routes>
    </div>
  </>)
}

export default App;
