import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import UserProvider from "./context/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Festivals from "./pages/Festivals";
import Food from "./pages/Food";
import Gods from "./pages/Gods";
import Heritage from "./pages/Heritage";
import Vedas from "./pages/Vedas";
import Monuments from "./pages/Monuments";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <>
      <Router>
        <UserProvider>
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/food" element={<Food />} />
            <Route path="/gods" element={<Gods />} />
            <Route path="/heritage" element={<Heritage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/monuments" element={<Monuments />} />
            <Route path="/vedas" element={<Vedas />} />
          </Routes>
        </UserProvider>
        <Footer />
      </Router>
    </>
  );
};

export default App;
