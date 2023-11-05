
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ServiceDescription from './components/ServiceDescription';
import DetailedServiceDescription from './components/DetailedServiceDescription';
import ProvidingServices from './components/ProvidingServices';
import MemebershipBenefit from './components/MemebershipBenefit';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero/>
      <ServiceDescription/>
      <DetailedServiceDescription/>
      <ProvidingServices/>
      <MemebershipBenefit/>
    </div>
  );
}

export default App;
