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
      <Route path="/Akar24/" element={<Home />} />
      <Route path="/Akar24/news" element={<News />} />
      <Route path="/Akar24/financing" element={<Financing />} />
      <Route path="/Akar24/law" element={<Law />} />
      <Route path="/Akar24/InvestOpportunities" element={<InvestOpportunities/>}/>
      <Route path="/Akar24/auctions" element={<Auction/>}/>
      <Route path="/Akar24/advertise" element={<Advertise/>}/>
      <Route path="/Akar24/about" element={<About/>}/>
      <Route path="/Akar24/infoGraphic" element={<InfoGraphic/>}/>
      <Route path="/Akar24/articles" element={<Articles/>}/>
      <Route path="/Akar24/program" element={<Program/>}/>
    </Routes>
    </HelmetProvider>
    <Footer/>
    <BackToTop/>
    </>
  );
};

export default AppRoutes;
