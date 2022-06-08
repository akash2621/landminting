import React from "react";
import Header from "../../component/Layout/Header";
import "./Dashboard.css";
import HeroSection from "./HeroSection";
import Experiance from "./Experiance";
import Team from "./Team";
import VisionMission from "./VisionMission";
import About from "./About";
import Opportunities from "./Opportunities";
import Roadmap from "./Roadmap";
import Footer from "../../component/Layout/Footer";

const DashboardPage = () => {
  return (
    <>
      <div className="dashboard-main" >
        <Header />
        <HeroSection />
        <Experiance />
        <Team />
        <VisionMission />
        <About />
        <Opportunities />
        <Roadmap />
        <Footer />
      </div>
    </>
  );
};

export default DashboardPage;
