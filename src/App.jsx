import {  Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Listup from "./pages/Listup";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/listup" element={<Listup/>}/>
      </Routes>
        
    </>
  )
}

export default App
