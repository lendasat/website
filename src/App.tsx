import { ScrollRestoration } from "react-router-dom";
import AppAdvert from "./components/AppAdvert";
import { Banner } from "./components/Banner";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Supporter from "./components/Supporter";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Supporter />
      <AppAdvert />
      <HowItWorks />
      <Team />
      <NewsLetter />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;
