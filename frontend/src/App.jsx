import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import { AuthContextProvider } from "./context/AuthContext";
import List from "./component/List";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/list" element={<List />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
