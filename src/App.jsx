import {  Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import List from "./pages/List";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
        
    </>
  )
}

export default App
