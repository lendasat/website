import { Banner } from './components/Banner'
import ImageDisplayer from './components/ImageDisplayer'
import DesktopImage from './assets/images/desktop_chart.png';
import AppAdvert from './components/AppAdvert';
import HowItWorks from './components/HowItWorks';
import Team from './components/Team';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ScrollRestoration } from 'react-router-dom';
import Supporter from './components/Supporter';


function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ImageDisplayer src={DesktopImage} />
      <Supporter />
      <AppAdvert />
      <HowItWorks />
      <Team />
      <NewsLetter />
      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default App
