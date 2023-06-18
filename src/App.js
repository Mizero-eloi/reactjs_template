import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/Signup";
import TableComponent from "./pages/Table";
import EcommerceCards from "./pages/EcommerceCards";

function App() {
  return (
    <>
      <ToastContainer />

      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Table" element={<TableComponent />} />
          <Route path="/cards" element={<EcommerceCards />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
