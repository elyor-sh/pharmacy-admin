import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {PrivateRoutes} from "./routes/PrivateRoutes";
import {LayoutPh} from "./components/LayoutPh/LayoutPh";

function App() {
  return (
    <Routes>
      <Route path={'/login'} element={<LoginPage />} />
        <Route element={<PrivateRoutes/>}>
          <Route element={<LayoutPh/>}>
            <Route path={''} element={<h1>Home</h1>} />
          </Route>
        </Route>
    </Routes>
  );
}

export default App;
