import React from "react";
import Layout from "../../components/Layouts/Layout";
import HeroSection from "./HeroSection";
import Section1 from "./Section1";
import '../../Styles/HomeStyle.css'
const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        {/* <Section1/> */}
      </Layout>
    </>
  );
};

export default Home;
