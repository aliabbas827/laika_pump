import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
import Home from './pages/Home/Home.jsx';
import CreateToken from './pages/CreateToken/CreateToken.jsx';
import Leaderboard from './pages/Leaderboard/Leaderboard.jsx';
import Profile from './pages/Profile/Profile.jsx';
import PampIt from './pages/PampIt/PampIt.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="createtoken" element={<CreateToken />} />
      <Route path="leaderboard" element={<Leaderboard />} />
      <Route path="profile" element={<Profile />} />
      <Route path="pamp" element={<PampIt />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);