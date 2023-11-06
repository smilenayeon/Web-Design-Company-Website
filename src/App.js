
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ServiceDescription from './components/ServiceDescription';
import DetailedServiceDescription from './components/DetailedServiceDescription';
import ProvidingServices from './components/ProvidingServices';
import MemebershipBenefit from './components/MemebershipBenefit';
import PreviousWork from './components/PreviousWork';
import MoreExamples from './components/MoreExamples';
import Review from './components/Review';
import Pricing from './components/Pricing';

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
    </div>
  );
}

export default App;
