import { ScrollRestoration } from "react-router-dom";
import DesktopImage2 from "./assets/images/desktop_second_chart.png";
import Footer from "./components/Footer";
import ForLenders from "./components/ForLenders";
import HowItWorks from "./components/HowItWorks";
import ImageDisplayer from "./components/ImageDisplayer";
import Interest from "./components/Interest";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Payouts from "./components/Payouts";

export default function Lenders() {
  return (
    <>
      <Navbar />
      <ForLenders />
      <ImageDisplayer src={DesktopImage2} />
      <Interest />
      <HowItWorks />
      <Payouts />
      <NewsLetter />
      <Footer />
      <ScrollRestoration />
    </>
  );
}
