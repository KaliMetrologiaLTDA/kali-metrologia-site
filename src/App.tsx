import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Areas from "./components/Areas";
import About from "./components/About";
import CertificatesShowcase from "./components/CertificatesShowcase"; 
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import QuemSomos from "./pages/QuemSomos";
import PoliticaPrivacidade from "./pages/PoliticaPr";
import Highlight from "./components/Highlight";
import Blog from "./pages/Blog";
import StudioPage from "./pages/Studio";


export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#0F172A]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Areas />
                  <About />
                  <Highlight />
                  <CertificatesShowcase /> 
                </>
              }
            />
            <Route path="/servicos" element={<Services />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/studio/*" element={<StudioPage />} />
          
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
             <Route path="/blog" element={<Blog />} />
            <Route
              path="*"
              element={
                <div className="py-24 text-center">
                  <h1 className="text-2xl font-semibold">Página não encontrada</h1>
                  <p className="text-[#475569]">Verifique o endereço ou volte ao início.</p>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
