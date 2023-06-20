import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route
            path="/home"
            element={
              <ProtectedRouteGuard>
                <Home />
              </ProtectedRouteGuard>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export default App;
