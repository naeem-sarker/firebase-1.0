import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Reset from "./pages/Reset";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </Router>
  );
};

export default App;
