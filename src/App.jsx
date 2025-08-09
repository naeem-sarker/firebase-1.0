import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </Router>
  );
};

export default App;
