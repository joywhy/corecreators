import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import List from './pages/List';
import Sort from './pages/Sort';
import Report from './pages/Report';
import Adm from './pages/Adm';
import { useUserInfo } from './store/userInfoStore';
import './App.css';


function App() {
  const {rememberUser} = useUserInfo();
  useEffect(()=>{
    rememberUser();
  },[])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/Sort" element={<Sort />} />
        <Route path="/report" element={<Report />} />
        <Route path="/adm/*" element={<Adm />} />
      </Routes>
    </>
  );
}

export default App;
