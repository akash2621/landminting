import { Navigate } from "react-router-dom";
import AuthPage from "./component/Layout/AuthPage";
import LoginPage from "./pages/Login/LoginPage";
import { routes } from "../src/constants";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import MintPage from "./pages/Mint/MintPage";

const getRoutes = (user) => [
  {
    path: routes.login,
    children: [
      { path: routes.login, element: <LoginPage /> },
    ],
  },
  {
    path: routes.dashboard,
    children: [
      { path: routes.dashboard, element: <DashboardPage /> },
    ],
  },
  {
    path: routes.mint,
    children: [
      { path: routes.mint, element: <MintPage /> },
    ],
  },
];

export default getRoutes;
