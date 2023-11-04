
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ServiceDescription from './components/ServiceDescription';
import DetailedServiceDescription from './components/DetailedServiceDescription';
import ProvidingServices from './components/ProvidingServices';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero/>
      <ServiceDescription/>
      <DetailedServiceDescription/>
      <ProvidingServices/>
    </div>
  );
}

export default App;
