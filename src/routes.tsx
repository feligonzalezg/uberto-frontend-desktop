import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Perfil from "./views/perfil/perfil";
import Login from "./views/login/Login";
import Layout from "./layout";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
						<Route path="/Home" element={<Home />} />
						<Route path="/Perfil" element={<Perfil />} />
					</Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
