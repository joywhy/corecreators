import {  Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
          {/* <Route path="/products" element={<Bookmark/>}/>
          <Route path="/bookmark" element={<ProductList/>}/> */} 
      </Routes>
        
    </>
  )
}

export default App
