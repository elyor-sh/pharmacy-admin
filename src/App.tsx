import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {PrivateRoutes} from "./routes/PrivateRoutes";
import {LayoutPh} from "./components/LayoutPh";
import {Categories} from "./pages/Categories";
import {Medicines} from "./pages/Medicines";
import {Orders} from "./pages/Orders";
import {Deliveries} from "./pages/Deliveries";

function App() {
  return (
    <Routes>
      <Route path={'/login'} element={<LoginPage />} />
        <Route element={<PrivateRoutes/>}>
          <Route element={<LayoutPh/>}>
            <Route path={''} element={<Navigate to={'/categories'} />} />
            <Route path={'categories'} element={<Categories />} />
            <Route path={'medicines'} element={<Medicines />} />
            <Route path={'orders'} element={<Orders />} />
            <Route path={'deliveries'} element={<Deliveries />} />
          </Route>
        </Route>
      <Route path={'*'} element={<h1>404 Page</h1>} />
    </Routes>
  );
}

export default App;
