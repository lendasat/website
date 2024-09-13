import Contact from "@/components/lender-components/Contact.tsx";
import HowItWorksLender from "@/components/lender-components/HowItWorksLender.tsx";
import { ScrollRestoration } from "react-router-dom";
import DesktopImage2 from "./assets/images/lender_desktop_app.png";
import Footer from "./components/Footer";
import ForLenders from "./components/ForLenders";
import ImageDisplayer from "./components/lender-components/ImageDisplayer.tsx";
import Interest from "./components/lender-components/Interest.tsx";
import Payouts from "./components/lender-components/Payouts.tsx";
import Navbar from "./components/Navbar";

export default function Lenders() {
  return (
    <>
      <Navbar />
      <ForLenders />
      <ImageDisplayer src={DesktopImage2} />
      <Interest />
      <HowItWorksLender />
      <Payouts />
      <Contact />
      <Footer />
      <ScrollRestoration />
    </>
  );
}
