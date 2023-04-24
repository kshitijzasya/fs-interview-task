import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./context/AuthContext";
import AppRoute from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthContextProvider>
      <AppRoute />
      <ToastContainer position="top-right" />
    </AuthContextProvider>
  );
}

export default App;
