
import './App.css';


import NavBar from "./components/layout/NavBar";
import Hero from  "./components/layout/Hero";
import ServiceDescription from './components/pages/ServiceDescription';
import DetailedServiceDescription from './components/pages/how-it-works/DetailedServiceDescription';
import ProvidingServices from './components/pages/how-it-works/ProvidingServices';
import MemebershipBenefit from "./components/pages/benefits/MemebershipBenefit";
import PreviousWork from './components/pages/recent-work/PreviousWork';
import MoreExamples from  "./components/pages/MoreExamples";
import Review from './components/pages/Review';
import Pricing from './components/pages/pricing/Pricing';
import FAQ from './components/pages/FAQs/FAQ';
import Booking from './components/pages/Booking';
import Footer from './components/layout/Footer';


function App() {
  return (
    <div className="App">
        <NavBar />
        <Hero/>
        <ServiceDescription/>
        <DetailedServiceDescription/>
        <ProvidingServices/>
        <MemebershipBenefit/>
        <PreviousWork/>
        <MoreExamples/>
        <Review/>
        <Pricing/>
        <FAQ />
        <Booking/>
        <Footer/>
    </div>
  );
}

export default App;
