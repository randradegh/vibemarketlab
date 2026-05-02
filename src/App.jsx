import { useState } from "react";
import SiteHeader from "./components/SiteHeader";
import HeroSection from "./components/HeroSection";
import TrustBar from "./components/TrustBar";
import ProblemSection from "./components/ProblemSection";
import MethodSection from "./components/MethodSection";
import PackagesSection from "./components/PackagesSection";
import BenefitsSection from "./components/BenefitsSection";
import FaqSection from "./components/FaqSection";
import FinalCtaSection from "./components/FinalCtaSection";
import LeadFormModal from "./components/LeadFormModal";
import Footer from "./components/Footer";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const scrollToPackages = () => {
    const element = document.getElementById("paquetes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SiteHeader onOpenForm={openForm} />
      <main>
        <HeroSection onOpenForm={openForm} onScrollToPackages={scrollToPackages} />
        <TrustBar />
        <ProblemSection />
        <MethodSection />
        <PackagesSection onOpenForm={openForm} />
        <BenefitsSection />
        <FaqSection />
        <FinalCtaSection onOpenForm={openForm} />
      </main>
      <Footer />
      <LeadFormModal isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
}

export default App;
