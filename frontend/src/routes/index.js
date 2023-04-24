import { Route, Routes } from "react-router-dom";
import Login from "../component/Login";
import { useAuthContext } from "../context/AuthContext";
import List from "../component/List";
import SignUp from "../component/SignUp";

function AppRoute() {
  const { user } = useAuthContext();
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      {user && <Route exact path="/list" element={<List />} />}
      <Route exact path="*" element={<Login />} />
    </Routes>
  );
}

export default AppRoute;
