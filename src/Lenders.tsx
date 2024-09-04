import DesktopImage2 from './assets/images/desktop_second_chart.png';
import HowItWorks from './components/HowItWorks';
import ForLenders from './components/ForLenders';
import Interest from './components/Interest';
import Payouts from './components/Payouts';
import ImageDisplayer from './components/ImageDisplayer';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ScrollRestoration } from 'react-router-dom';

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
    )
}
