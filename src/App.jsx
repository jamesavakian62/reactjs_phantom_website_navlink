//Styles
import "./App.css";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import Faqs from "./pages/Faqs";
import News from "./pages/News";
import RoadMap from "./pages/RoadMap";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/roadmap" element={<RoadMap />} />
      </Routes>
      <div style={{ height: "150px" }}></div>
      <Footer />
    </div>
  );
}

export default App;
