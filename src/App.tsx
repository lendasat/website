import WhitePaper from "@/components/WhitePaper.tsx";
import { ScrollRestoration } from "react-router-dom";
import AppAdvert from "./components/AppAdvert";
import { Banner } from "./components/Banner";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <HowItWorks />
      <AppAdvert />
      <WhitePaper />
      <NewsLetter />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;
