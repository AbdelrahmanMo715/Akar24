// routes.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import News from "./pages/News";
import Financing from "./pages/Financing";
import Law from "./pages/Law";
import InvestOpportunities from "./pages/InvestOpportunities";
import Auction from "./pages/Auction";
import About from "./pages/About";
import InfoGraphic from "./pages/InfoGraphic";
import Articles from "./pages/Articles";
import Program from "./pages/Program";
import BackToTop from "./components/Buttons/BackToTop";
import Advertise from "./pages/Advertise";
import { HelmetProvider } from "react-helmet-async";

const AppRoutes = () => {
  return (
    <>
    <Navbar/>
    <HelmetProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="financing" element={<Financing />} />
      <Route path="law" element={<Law />} />
      <Route path="InvestOpportunities" element={<InvestOpportunities/>}/>
      <Route path="auctions" element={<Auction/>}/>
      <Route path="advertise" element={<Advertise/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="infoGraphic" element={<InfoGraphic/>}/>
      <Route path="articles" element={<Articles/>}/>
      <Route path="program" element={<Program/>}/>
    </Routes>
    </HelmetProvider>
    <Footer/>
    <BackToTop/>
    </>
  );
};

export default AppRoutes;
