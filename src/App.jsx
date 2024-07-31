import {  Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import List from "./pages/List";
import Sort from "./pages/Sort";
import Report from "./pages/Report";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/Sort" element={<Sort/>}/>
        <Route path="/report" element={<Report/>}/>
      </Routes>
        
    </>
  )
}

export default App
