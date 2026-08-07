import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import PopularServices from "./components/PopularServices/PopularServices";
import TrustSection from "./components/TrustSection/TrustSection";
import FinalCta from "./components/FinalCta/FinalCta";
import Footer from "./components/Footer/Footer";

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