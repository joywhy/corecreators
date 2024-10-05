import { useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import List from './pages/List';
import Sort from './pages/Sort';
import Report from './pages/Report';
import Adm from './pages/Adm';
import Aside from './components/aside/Aside';
import AsideSmall from './components/aside/AsideSmall';

import { responsiveWidth } from './constants';
import { useUserInfo } from './store/userInfoStore';
import './App.css';
import styled from 'styled-components';
import useWindowDimensions from './hooks/useWindowDimensions';
import User from './pages/User';

function App() {
  const { rememberUser } = useUserInfo();
  useEffect(() => {
    rememberUser();
  }, []);

  const Layer = () => {
    let { width } = useWindowDimensions();
    return (
      <StyledDiv>
        {width > responsiveWidth && <Aside />}
        <Outlet />
        {width <= responsiveWidth && <AsideSmall />}
      </StyledDiv>
    );
  };

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Layer />}>
        <Route path="list" element={<List />} />
        <Route path="sort" element={<Sort />} />
        <Route path="report" element={<Report />} />
        <Route path="adm" element={<Adm />}>
          <Route path="user" element={<User />} />
          {/*  <Route path="log" element={<Log />} />
            <Route path="*" element={<h1>404 Not Found</h1>}
             />*/}
        </Route>
      </Route>
    </Routes>
  );
}
const StyledDiv = styled.div`
  width: 100%;
  display: flex;

  @media only screen and (width <= 1200px) {
    & {
      display: block;
      flex-direction: column;
      align-items: end;
    }
  }
`;
export default App;
