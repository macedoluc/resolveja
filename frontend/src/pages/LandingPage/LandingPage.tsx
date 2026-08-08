import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";
import HowItWorks from "../../components/sections/HowItWorks";
import PopularServices from "../../components/sections/PopularServices";
import TrustSection from "../../components/sections/TrustSection";
import FinalCta from "../../components/sections/FinalCta";
import Footer from "../../components/layout/Footer";

function LandingPage() {
    return (
        <>
          <Navbar />

          <Hero />

          <PopularServices />

          <HowItWorks />

          <TrustSection />

          <FinalCta />

          <Footer />
        </>
      );
    
}
  
export default LandingPage;